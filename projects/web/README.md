# Web Application

Main Next.js application for Sumdnc.com.

## Tech Stack

- Next.js 14+ with App Router
- React 18+
- TypeScript
- Tailwind CSS
- tRPC
- Prisma
- NextAuth.js

## Setup

```powershell
# Install dependencies
pnpm install

# Setup environment variables
cp ../../conf/.env.example .env.local

# Run Prisma migrations
pnpm prisma migrate dev

# Start development server
pnpm dev
```

## Project Structure

```
src/
├── app/          # Next.js App Router pages
├── components/   # React components
├── lib/          # Utility libraries
├── server/       # tRPC routers and server code
└── hooks/        # Custom React hooks
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm test` - Run tests

## Documentation

See `/guidelines` for development standards and patterns.
