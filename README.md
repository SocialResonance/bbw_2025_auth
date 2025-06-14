<div align="center"><strong>Next.js 15 Admin Dashboard Template</strong></div>
<div align="center">Built with the Next.js App Router</div>
<br />
<div align="center">
<a href="https://next-admin-dash.vercel.app/">Demo</a>
<span> · </span>
<a href="https://vercel.com/templates/next.js/admin-dashboard-tailwind-postgres-react-nextjs">Clone & Deploy</a>
<span>
</div>

## Overview

This is a starter template using the following stack:

- Framework - [Next.js (App Router)](https://nextjs.org)
- Language - [TypeScript](https://www.typescriptlang.org)
- Auth - [Auth.js](https://authjs.dev)
- Database - [Postgres](https://vercel.com/postgres)
- Deployment - [Vercel](https://vercel.com/docs/concepts/next.js/overview)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Shadcn UI](https://ui.shadcn.com/)
- Analytics - [Vercel Analytics](https://vercel.com/analytics)
- Formatting - [Prettier](https://prettier.io)

This template uses the new Next.js App Router. This includes support for enhanced layouts, colocation of components, tests, and styles, component-level data fetching, and more.

## Getting Started for Local Development

These instructions will guide you through setting up the project to run on your local machine with a local PostgreSQL database.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20.x or later)
- [pnpm](https://pnpm.io/)
- [PostgreSQL](https://www.postgresql.org/) installed and running.

### 1. Clone the Repository and Install Dependencies

```bash
git clone https://github.com/your-username/your-repo-name.git # Change this to your repo URL
cd your-repo-name
pnpm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root of the project. You can do this by copying the `.env.example` if it exists, or by creating a new file. Add the following content, replacing the placeholder values:

```env
# Example URL for a local PostgreSQL database
POSTGRES_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/YOUR_DATABASE_NAME"

# You can generate a new secret with `openssl rand -base64 32`
NEXTAUTH_URL=http://localhost:3000
AUTH_SECRET="YOUR_AUTH_SECRET"

# GitHub OAuth credentials (optional, for authentication)
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

### 3. Create the Database

Connect to your local PostgreSQL instance using a client like `psql` and create the database you specified in your `POSTGRES_URL`.

```sql
CREATE DATABASE your_database_name;
```

### 4. Run Database Migrations

This project uses `drizzle-kit` to manage database schema migrations.

- To generate a new migration file after making changes to the schema in `lib/schema.ts`:
  ```bash
  pnpm drizzle-kit generate
  ```

- To apply all pending migrations to your database:
  ```bash
  pnpm drizzle-kit migrate
  ```

Run the `migrate` command now to set up your initial tables.

### 5. Run the Development Server

```bash
pnpm dev
```

You should now be able to access the application at http://localhost:3000.
