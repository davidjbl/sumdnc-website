# COMMON-PATTERNS.md
*Last updated 2025-10-29*
*Project: Sumdnc.com - Modern Responsive Web Platform*

> **Purpose** – Provide reusable code patterns and recipes for common development tasks.

## React Patterns

### Custom Hooks

```typescript
// AIDEV-NOTE: Custom hook for data fetching
export function useData<T>(key: string) {
  const { data, isLoading, error } = trpc.getData.useQuery({ key });
  return { data, isLoading, error };
}
```

### Component Patterns

```typescript
// AIDEV-NOTE: Compound component pattern
export function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

Card.Header = function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="card-header">{children}</div>;
};
```

## Utility Functions

### Class Name Utility

```typescript
// AIDEV-NOTE: cn utility for merging Tailwind classes
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## State Management Patterns

### Zustand Store

```typescript
// AIDEV-NOTE: Zustand store pattern
import { create } from 'zustand';

interface Store {
  count: number;
  increment: () => void;
}

export const useStore = create<Store>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

---

*For more patterns, see FRONTEND-STANDARDS.md and API-STANDARDS.md*
