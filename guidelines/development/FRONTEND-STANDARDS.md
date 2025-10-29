# FRONTEND-STANDARDS.md
*Last updated 2025-10-29*

> Frontend development standards for React/Next.js applications.

## Component Structure

- Use Server Components by default
- Client Components only when necessary ('use client')
- Co-locate components with their tests

## Styling

- Tailwind CSS utility-first approach
- shadcn/ui for reusable components
- Mobile-first responsive design

## State Management

- Zustand for client state
- React Query (TanStack Query) for server state
- Context API for theme/auth context

---

*See COMMON-PATTERNS.md for code examples*
