#!/usr/bin/env bash
# Deploy the current project to the Cerato production droplet.
# The root password is requested at runtime and is never written to disk.

set -euo pipefail

SERVER_HOST="165.227.150.59"
SERVER_USER="root"
REMOTE_ARCHIVE="/tmp/cerato-web-deploy.tar.gz"
REMOTE_APP_DIR="/var/www/cerato-web"
LOCAL_ARCHIVE="$(mktemp "${TMPDIR:-/tmp}/cerato-web-deploy.XXXXXX.tar.gz")"

cleanup() {
  rm -f "$LOCAL_ARCHIVE"
  unset DEPLOY_PASSWORD
}
trap cleanup EXIT

for command in npm tar scp ssh expect; do
  command -v "$command" >/dev/null || {
    echo "Required command not found: $command" >&2
    exit 1
  }
done

echo "Building locally to verify the production build..."
npm run build

echo "Packaging application source..."
COPYFILE_DISABLE=1 tar \
  --exclude='./.git' \
  --exclude='./.next' \
  --exclude='./node_modules' \
  --exclude='./.DS_Store' \
  --exclude='./.env' \
  --exclude='./.env.*' \
  -czf "$LOCAL_ARCHIVE" .

read -r -s -p "Root password for ${SERVER_HOST}: " DEPLOY_PASSWORD
echo
export DEPLOY_PASSWORD
export DEPLOY_ARCHIVE="$LOCAL_ARCHIVE"
export DEPLOY_HOST="$SERVER_HOST"
export DEPLOY_USER="$SERVER_USER"
export REMOTE_ARCHIVE REMOTE_APP_DIR

expect <<'EXPECT'
set timeout -1
set password $env(DEPLOY_PASSWORD)
set archive $env(DEPLOY_ARCHIVE)
set host $env(DEPLOY_HOST)
set user $env(DEPLOY_USER)
set remote_archive $env(REMOTE_ARCHIVE)
set remote_app_dir $env(REMOTE_APP_DIR)

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
    puts stderr "Remote command failed."
    exit [lindex $result 3]
  }
}

puts "Uploading source archive..."
spawn scp -o StrictHostKeyChecking=accept-new $archive "$user@$host:$remote_archive"
authenticate

puts "Installing dependencies, building, and restarting the service..."
set deploy_command "set -eu; install -d -o cerato -g cerato $remote_app_dir; tar -xzf $remote_archive -C $remote_app_dir; chown -R cerato:cerato $remote_app_dir; cd $remote_app_dir; runuser -u cerato -- npm ci; runuser -u cerato -- npm run build; systemctl restart cerato-web; rm -f $remote_archive; systemctl is-active --quiet cerato-web"
spawn ssh -o StrictHostKeyChecking=accept-new "$user@$host" $deploy_command
authenticate
EXPECT

unset DEPLOY_ARCHIVE DEPLOY_HOST DEPLOY_USER
echo "Deployment complete: https://cerato.online"
