# Development Tools Overview
---
### Frontend Stack
- **Next.js 14+** with App Router (React 18+)
- **TypeScript** for type safety
- **Tailwind CSS** + shadcn/ui components
- **Zustand** (state management)
- **React Query/TanStack Query** (server state)
- **Framer Motion** (animations)

### Backend Stack
- **Next.js API Routes** (serverless functions)
- **tRPC** (type-safe end-to-end APIs)
- **NextAuth.js** (authentication/OAuth)
- **Zod** (runtime validation)

### Database
- **PostgreSQL** (primary database)
- **Prisma ORM** (type-safe queries)
- **Redis** (caching layer via Upstash)

### Deployment & Infrastructure
- **Vercel** (hosting + edge functions + CDN)
- **GitHub Actions** (CI/CD)
- **Sentry** (error tracking)
- **Vercel Analytics** (performance monitoring)

### Testing
- **Vitest** (unit/integration tests)
- **Playwright** (E2E tests)
- **React Testing Library** (component tests)

### Data/Analytics (Python)
- **Python 3.13** with uv package manager
- **pandas**, **MLflow**, **Airflow**
- **Pydantic** (data validation)

---

**TL;DR**: Full-stack TypeScript monorepo with Next.js/React frontend, serverless tRPC backend, PostgreSQL + Prisma, deployed on Vercel, plus Python for data pipelines.