# Cerato Demo 1

Shipment-request module within the existing Cerato Systems application. The marketing site and demo share one Next.js frontend deployment and one FastAPI backend; `demo1.ceratosystems.com` serves the demo module at `/`.

## Stack

- Frontend: Next.js and React
- Shared backend: FastAPI in the repository-level `backend/` directory
- Database: PostgreSQL
- Schema migrations: Alembic with SQLAlchemy
- Authentication: JWT issued by FastAPI and stored in an HTTP-only cookie

The FastAPI backend owns business rules. The shared Next.js frontend sends demo requests to `/api/demo/*`, which it rewrites to the FastAPI `/api/*` routes. The existing marketing site's `/api/contact` route remains part of Next.js.

The marketing website and all demo subdomains use the same JWT session cookie. Leave `COOKIE_DOMAIN` empty for local development; set it to `.ceratosystems.com` in production, with `COOKIE_SECURE=true`, so a sign-in on the main website is also available on demo subdomains.

## Local development

1. Make sure PostgreSQL is installed and running locally.
2. Create a database named `cerato_demo` and a local database user named `cerato_demo`, then copy the repository-root `.env.example` to `.env` and set its database password and a private `JWT_SECRET`.
3. From the repository root, install frontend dependencies with `npm install`.
4. In one terminal, start the shared backend:

   ```bash
   cd backend
   python3 -m venv .venv-local
   .venv-local/bin/pip install -r requirements.txt
   .venv-local/bin/alembic upgrade head
   .venv-local/bin/uvicorn app.main:app --reload --port 8000
   ```

5. In a second terminal from the repository root, run `npm run dev`.

The existing website is available at `http://localhost:3000`. Sign in at `http://localhost:3000/sign-in`; after signing in, open `http://localhost:3000/demos` to see the available demo modules. Demo 1 is at `http://localhost:3000/demo1`. The API is at `http://localhost:8000`.

Example database setup in `psql` (run as a PostgreSQL administrator):

```sql
CREATE USER cerato_demo WITH PASSWORD 'choose-a-local-password';
CREATE DATABASE cerato_demo OWNER cerato_demo;
```

Local database credentials are for development only. Production must use a private PostgreSQL instance, a separate secret, HTTPS, secure cookies, backups, and SMTP infrastructure controlled by Cerato Systems if customer emails are enabled.
