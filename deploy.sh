#!/usr/bin/env bash
# Commit, push, and deploy the current project to the Cerato production droplet.
# The server pulls from GitHub; application files are never copied over SSH.

set -euo pipefail

SERVER_HOST="165.227.150.59"
SERVER_USER="root"
REMOTE_APP_DIR="/var/www/cerato-web"
REPOSITORY="https://github.com/dejannr/cerato-web.git"
BRANCH="$(git branch --show-current)"
COMMIT_MESSAGE="${1:-Deploy $(date '+%Y-%m-%d %H:%M:%S')}"

for command in git npm ssh expect; do
  command -v "$command" >/dev/null || {
    echo "Required command not found: $command" >&2
    exit 1
  }
done

if [[ -z "$BRANCH" ]]; then
  echo "Cannot deploy from a detached Git HEAD." >&2
  exit 1
fi

echo "Verifying the production build locally..."
npm run build

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Committing local changes..."
  git add --all
  git commit -m "$COMMIT_MESSAGE"
fi

echo "Pushing ${BRANCH} to GitHub..."
git push origin "$BRANCH"

read -r -s -p "Root password for ${SERVER_HOST}: " DEPLOY_PASSWORD
echo
export DEPLOY_PASSWORD SERVER_HOST SERVER_USER REMOTE_APP_DIR REPOSITORY BRANCH

expect <<'EXPECT'
set timeout -1
set password $env(DEPLOY_PASSWORD)
set host $env(SERVER_HOST)
set user $env(SERVER_USER)
set app_dir $env(REMOTE_APP_DIR)
set repository $env(REPOSITORY)
set branch $env(BRANCH)

proc authenticate {} {
  global password
  expect {
    -re "(?i)password:" { send -- "$password\r"; exp_continue }
    -re "Permission denied" { puts stderr "Authentication failed."; exit 1 }
    timeout { puts stderr "Connection timed out."; exit 1 }
    eof {}
  }
  catch wait result
  if {[lindex $result 3] != 0} {
    puts stderr "Remote deployment failed."
    exit [lindex $result 3]
  }
}

puts "Pulling from GitHub, building, and restarting the service..."
set deploy_command [format {set -eu; install -d -o cerato -g cerato %s; git config --global --add safe.directory %s; cd %s; fresh_checkout=0; old_lock=$(sha256sum package-lock.json 2>/dev/null | awk '{print $1}' || true); if [ ! -d .git ]; then fresh_checkout=1; git init -q; git clean -fdx -e .env -e .env.*; fi; if git remote get-url origin >/dev/null 2>&1; then git remote set-url origin %s; else git remote add origin %s; fi; git fetch --quiet origin %s; git checkout -q -B %s origin/%s; git reset --hard origin/%s; git clean -fd -e .env -e .env.*; new_lock=$(sha256sum package-lock.json | awk '{print $1}'); if [ "$fresh_checkout" = 1 ] || [ "$old_lock" != "$new_lock" ] || [ ! -d node_modules ]; then runuser -u cerato -- npm ci; fi; chown -R cerato:cerato %s; runuser -u cerato -- npm run build; systemctl restart cerato-web; systemctl is-active --quiet cerato-web} $app_dir $app_dir $app_dir $repository $repository $branch $branch $branch $branch $app_dir]
spawn ssh -o StrictHostKeyChecking=accept-new "$user@$host" $deploy_command
authenticate
EXPECT

unset DEPLOY_PASSWORD
echo "Deployment complete: https://cerato.online"
