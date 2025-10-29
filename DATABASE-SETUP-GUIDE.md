# Database Setup Guide 🗄️

## Quick Start Options

### Option 1: Local PostgreSQL (Recommended for Development)

#### Install PostgreSQL

**Windows (using Chocolatey):**

```powershell
choco install postgresql
```

**Windows (using Scoop):**

```powershell
scoop install postgresql
```

**Or download installer from:**
https://www.postgresql.org/download/windows/

#### Start PostgreSQL Service

```powershell
# Start PostgreSQL service
Start-Service postgresql-x64-15  # or postgresql-x64-16

# Verify it's running
Get-Service postgresql*
```

#### Create Database

```powershell
# Connect to PostgreSQL
psql -U postgres

# In psql prompt:
CREATE DATABASE sumdnc;
\q
```

#### Update .env.local

```bash
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/sumdnc?schema=public"
```

Replace `your_password` with your PostgreSQL password.

#### Run Migration

```powershell
cd projects/web
pnpm prisma migrate dev --name init
```

---

### Option 2: Docker PostgreSQL (Quick Setup)

#### Prerequisites

- Docker Desktop installed

#### Start PostgreSQL Container

```powershell
docker run --name sumdnc-postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=sumdnc -p 5432:5432 -d postgres:16-alpine
```

#### Update .env.local

```bash
DATABASE_URL="postgresql://postgres:password@localhost:5432/sumdnc?schema=public"
```

#### Run Migration

```powershell
cd projects/web
pnpm prisma migrate dev --name init
```

#### Manage Container

```powershell
# Stop
docker stop sumdnc-postgres

# Start
docker start sumdnc-postgres

# Remove
docker rm -f sumdnc-postgres
```

---

### Option 3: Cloud Database (Production-Ready)

#### Supabase (Free Tier)

1. Sign up at https://supabase.com
2. Create new project
3. Get connection string from Settings → Database
4. Update `.env.local`:

```bash
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres?pgbouncer=true&connection_limit=1"
```

#### Neon (Serverless PostgreSQL - Free Tier)

1. Sign up at https://neon.tech
2. Create new project
3. Copy connection string
4. Update `.env.local`:

```bash
DATABASE_URL="postgresql://[user]:[password]@[endpoint].neon.tech/[dbname]?sslmode=require"
```

#### Railway (Simple Setup)

1. Sign up at https://railway.app
2. Create new PostgreSQL database
3. Copy `DATABASE_URL` from Variables tab
4. Update `.env.local`

---

## After Database Setup

### 1. Run Initial Migration

```powershell
cd projects/web
pnpm prisma migrate dev --name init
```

This will:

- Create all tables defined in `prisma/schema.prisma`
- Generate Prisma Client
- Create `migrations/` folder with SQL files

### 2. Verify Schema

```powershell
pnpm prisma studio
```

Opens Prisma Studio (GUI) at http://localhost:5555 to view your database.

### 3. Seed Database (Optional)

Create `prisma/seed.ts`:

```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create sample user
  const user = await prisma.user.create({
    data: {
      email: "demo@sumdnc.com",
      name: "Demo User",
      emailVerified: new Date(),
    },
  });

  // Create sample posts
  await prisma.post.create({
    data: {
      title: "Welcome to Sumdnc",
      slug: "welcome-to-sumdnc",
      content: "This is a sample blog post.",
      excerpt: "Learn about our platform",
      published: true,
      authorId: user.id,
    },
  });

  console.log("✅ Database seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

Add to `package.json`:

```json
{
  "prisma": {
    "seed": "tsx prisma/seed.ts"
  }
}
```

Run seed:

```powershell
pnpm prisma db seed
```

---

## Common Issues

### Issue: "Can't reach database server"

**Fix:**

- Verify PostgreSQL is running: `Get-Service postgresql*`
- Check port 5432 is not in use: `netstat -ano | findstr :5432`
- Verify DATABASE_URL is correct

### Issue: "SSL connection required"

**Fix for local PostgreSQL:**

```bash
DATABASE_URL="postgresql://postgres:password@localhost:5432/sumdnc?sslmode=disable"
```

**Fix for cloud providers:**

```bash
DATABASE_URL="postgresql://user:pass@host:5432/db?sslmode=require"
```

### Issue: "Authentication failed"

**Fix:**

- Reset PostgreSQL password
- Verify username (usually `postgres`)
- Check password in DATABASE_URL matches

---

## Next Steps After Database Setup

1. ✅ Database configured and migrations run
2. ⏭️ Configure NextAuth.js for authentication
3. ⏭️ Add more UI components
4. ⏭️ Build dashboard and feature pages
5. ⏭️ Set up Python analytics environment

---

## Quick Commands Reference

```powershell
# Migrate database
pnpm prisma migrate dev

# Generate Prisma Client
pnpm prisma generate

# Open Prisma Studio
pnpm prisma studio

# Reset database (WARNING: deletes all data)
pnpm prisma migrate reset

# View migration status
pnpm prisma migrate status

# Create migration without applying
pnpm prisma migrate dev --create-only
```

Happy coding! 🚀
