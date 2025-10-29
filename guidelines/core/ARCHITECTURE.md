# ARCHITECTURE.md
*Last updated 2025-10-29*
*Project: Sumdnc.com - Modern Responsive Web Platform*

> **Purpose** – Define the monorepo architecture patterns, module boundaries, and integration points for the Sumdnc.com enterprise web platform.

## Overview

This document defines the architecture design patterns for the Sumdnc.com monorepo, including module organization, dependency management, and integration strategies.

## Monorepo Structure

### Module Organization

- **projects/web**: Main Next.js application
- **projects/analytics**: Python data pipeline
- **projects/utils**: Shared utilities and packages

### Server Components vs Client Components

Use React Server Components by default. Only use `'use client'` directive when:
- Interactive event handlers needed (onClick, onChange, etc.)
- React hooks required (useState, useEffect, etc.)
- Browser APIs needed (localStorage, window, etc.)

### tRPC Router Structure

```typescript
// AIDEV-NOTE: tRPC router structure - modular by domain
export const appRouter = router({
  user: userRouter,
  post: postRouter,
  analytics: analyticsRouter,
});
```

## Integration Points

- Frontend components → tRPC client → API routers → Prisma → Database
- Shared utilities in `projects/utils` imported by all projects
- Clear boundaries between concerns

## Module Creation Guidelines

Create new modules when:
- Distinct business domain
- Reusable across projects
- Independent deployment lifecycle
- Clear API boundaries

## Dependency Flow Rules

- Prevent circular dependencies
- Shared code goes in `projects/utils`
- Domain-specific code stays in respective projects

---

*For detailed implementation patterns, see FRONTEND-STANDARDS.md and API-STANDARDS.md*
