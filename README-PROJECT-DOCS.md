```markdown
# README-PROJECT-DOCS.md
*Last updated 2025-10-28*
*Project: Sumdnc.com - Modern Responsive Web Platform*

> **Purpose** – Master index and comprehensive reference guide for all project documentation files that guide AI coding agents (Cursor, Cascade, Roo, Copilot, Claude, etc.) and human developers working on the Sumdnc.com enterprise web platform.

## Overview

This repository contains 20 specialized documentation files organized in `guidelines/` to complement the core `Agents.md`. Each document provides targeted guidance for specific development domains, ensuring consistent patterns and best practices across the Sumdnc.com monorepo. The project leverages modern web technologies including Next.js, React, TypeScript, Tailwind CSS, and serverless architectures to deliver a high-performance, accessible, and secure web experience.

### Project Context: Sumdnc.com

**Sumdnc.com** is a modern, enterprise-grade web platform built with:
- **Frontend**: Next.js 14+ with App Router, React Server Components, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, tRPC for type-safe APIs, serverless architecture
- **Database**: PostgreSQL with Prisma ORM, Redis for caching
- **Hosting**: Vercel with edge functions and global CDN
- **Architecture**: Monorepo structure with shared utilities, component library, and multiple projects

---

## Quick Reference by Development Phase

### 🚀 Setup & Architecture
| Doc | Use When | Key Technologies |
|-----|----------|------------------|
| [PROJECT-SETUP.md](#8-project-setupmd) | Initializing new Python/JS projects | uv, npm, pnpm, pyproject.toml, package.json |
| [ARCHITECTURE.md](#1-architecturemd) | Understanding module boundaries and integration patterns | Monorepo, module federation, dependency injection |
| [COMMON-PATTERNS.md](#9-common-patternsmd) | Looking for reusable code recipes | React hooks, utility functions, HOCs, render props |

### 💻 Development
| Doc | Use When | Key Technologies |
|-----|----------|------------------|
| [PYTHON-STYLE.md](#7-python-stylemd) | Writing Python code (data pipelines, ML) | Python 3.13, ruff, loguru, pydantic, type hints |
| [FRONTEND-STANDARDS.md](#11-frontend-standardsmd) | Building React/Next.js components | React 18+, Next.js 14+, TypeScript, shadcn/ui, Zustand |
| [API-STANDARDS.md](#2-api-standardsmd) | Creating REST/GraphQL/tRPC endpoints | tRPC, Next.js API routes, Zod validation, NextAuth.js |
| [DATABASE-PATTERNS.md](#3-database-patternsmd) | Working with database models and queries | Prisma, PostgreSQL, Redis, Drizzle ORM |
| [DATA-PIPELINE.md](#18-data-pipelinemd) | Building ETL/ELT workflows | pandas, MLflow, Airflow, data validation |
| [ERROR-HANDLING.md](#5-error-handlingmd) | Implementing exception handling | Error boundaries, toast notifications, Sentry |

### 🎨 Design & UX
| Doc | Use When | Key Technologies |
|-----|----------|------------------|
| [RESPONSIVE-DESIGN.md](#15-responsive-designmd) | Implementing responsive layouts | Tailwind CSS, mobile-first, container queries |
| [ACCESSIBILITY.md](#16-accessibilitymd) | Ensuring WCAG 2.1 AA compliance | ARIA, semantic HTML, axe DevTools, keyboard nav |

### ✅ Quality & Testing
| Doc | Use When | Key Technologies |
|-----|----------|------------------|
| [TESTING-GUIDE.md](#4-testing-guidemd) | Writing tests | Jest, Vitest, Playwright, React Testing Library |
| [SECURITY-CHECKLIST.md](#6-security-checklistmd) | Implementing security controls | NextAuth.js, CSP, CORS, Zod validation, helmet.js |
| [PERFORMANCE.md](#14-performancemd) | Optimizing code and queries | Next.js Image, code splitting, Redis, CDN caching |
| [TROUBLESHOOTING.md](#10-troubleshootingmd) | Debugging common issues | Chrome DevTools, React DevTools, LogRocket |

### 🚢 Deployment & Operations
| Doc | Use When | Key Technologies |
|-----|----------|------------------|
| [VERSION-CONTROL.md](#12-version-controlmd) | Creating branches, commits, PRs | Git, GitHub, conventional commits, Git Flow |
| [CI-CD-PIPELINE.md](#17-ci-cd-pipelinemd) | Setting up automation workflows | GitHub Actions, Vercel deployments, quality gates |
| [DEPLOYMENT-GUIDE.md](#13-deployment-guidemd) | Deploying to staging/production | Vercel, Docker, environment configs, rollbacks |
| [MONITORING-LOGGING.md](#19-monitoring-loggingmd) | Implementing observability | Vercel Analytics, Sentry, loguru, structured logging |

### 🤝 Collaboration
| Doc | Use When | Key Technologies |
|-----|----------|------------------|
| [COLLABORATION-PM.md](#20-collaboration-pmmd) | Following team workflows | Jira, Linear, GitHub PRs, Slack, code reviews |

---

## Documentation Files - Detailed Reference

### Core Foundation

#### 1. ARCHITECTURE.md
**Location**: `guidelines/core/`
**Topics**: Architecture design, module boundaries, integration patterns
**Technology Stack**: Monorepo architecture, Next.js App Router, tRPC, Prisma

**Description**:
Defines the monorepo architecture patterns for Sumdnc.com, including:
- **Module Organization**: How projects in `projects/` interact with `projects/utils` shared library
- **Dependency Management**: Flow rules for preventing circular dependencies
- **Integration Points**: Clear boundaries between frontend components, API routes, database models, and shared utilities
- **Server Components vs Client Components**: When to use React Server Components vs 'use client' directive
- **Edge vs Serverless Functions**: Architecture decisions for Next.js compute options
- **tRPC Router Structure**: Type-safe API organization and procedure definitions
- **Prisma Schema Design**: Database model relationships and naming conventions

**Key Patterns**:
```typescript
// AIDEV-NOTE: tRPC router structure - modular by domain
export const appRouter = router({
  user: userRouter,
  content: contentRouter,
  analytics: analyticsRouter,
});
```

**When to Create New Modules**:
- Distinct business domain (e.g., `projects/analytics`, `projects/cms`)
- Reusable across multiple projects → `projects/utils`
- Independent deployment lifecycle
- Clear API boundaries via tRPC routers

---

#### 2. API-STANDARDS.md
**Location**: `guidelines/development/`
**Topics**: API Development, Back-end Development
**Technology Stack**: tRPC, Next.js API Routes, Zod, NextAuth.js, Axios

**Description**:
Specifies API design patterns for Sumdnc.com's type-safe backend:

**tRPC Patterns**:
- **Procedure Types**: Query (idempotent reads) vs Mutation (state changes)
- **Input Validation**: Zod schemas for runtime type safety
- **Context Management**: User authentication, database connections, request metadata
- **Error Handling**: TRPCError with standardized error codes
- **Middleware**: Authentication, rate limiting, logging

**REST API Patterns** (when tRPC isn't suitable):
- **Endpoint Naming**: `/api/v1/resource/:id` conventions
- **HTTP Methods**: Proper GET, POST, PUT, PATCH, DELETE usage
- **Response Schemas**: Consistent success/error response structures
- **Status Codes**: Appropriate 2xx, 4xx, 5xx usage

**Authentication Flows**:
- NextAuth.js providers (OAuth, credentials, magic links)
- JWT token management and refresh strategies
- Session handling (database vs JWT sessions)
- Protected API routes with middleware

**Request/Response Examples**:
```typescript
// AIDEV-NOTE: tRPC procedure with Zod validation
export const userRouter = router({
  updateProfile: protectedProcedure
    .input(z.object({
      name: z.string().min(2).max(50),
      email: z.string().email(),
    }))
    .mutation(async ({ ctx, input }) => {
      // Type-safe input and ctx
      return await ctx.prisma.user.update({
        where: { id: ctx.session.user.id },
        data: input,
      });
    }),
});
```

**API Documentation**:
- OpenAPI spec generation from tRPC schemas
- Postman collections for external APIs
- Interactive API playground for developers

---

#### 3. DATABASE-PATTERNS.md
**Location**: `guidelines/development/`
**Topics**: Database Management, Back-end Development
**Technology Stack**: Prisma, PostgreSQL, Redis, Drizzle ORM, Supabase

**Description**:
Documents database patterns for Sumdnc.com's data layer:

**Prisma ORM Patterns**:
- **Schema Design**: Model definitions, relations (1:1, 1:n, m:n), indexes
- **Migration Strategy**: Development vs production migrations, schema diffs
- **Query Optimization**: Select fields, include relations, where filters
- **Connection Pooling**: PgBouncer integration, connection limits
- **Transactions**: Interactive vs sequential transactions
- **Soft Deletes**: `deletedAt` patterns for audit trails

**PostgreSQL Best Practices**:
- **Indexing Strategy**: B-tree, GiST, GIN indexes for performance
- **Full-Text Search**: `tsvector` and search rankings
- **JSONB Columns**: When to use vs separate tables
- **Row-Level Security**: RLS policies for multi-tenant data
- **Partitioning**: Table partitioning for large datasets

**Redis Caching Patterns**:
- **Cache Keys**: Namespacing conventions (`user:${id}:profile`)
- **TTL Strategy**: Expiration times per data type
- **Cache Invalidation**: Pub/sub for distributed cache clearing
- **Session Storage**: Redis-backed sessions for scalability

**Query Examples**:
```typescript
// AIDEV-NOTE: Optimized Prisma query with relations
const posts = await prisma.post.findMany({
  where: { published: true },
  select: {
    id: true,
    title: true,
    author: {
      select: { name: true, avatar: true }
    }
  },
  orderBy: { createdAt: 'desc' },
  take: 10,
});
```

**Migration Workflow**:
1. Create migration: `prisma migrate dev --name add_user_roles`
2. Review SQL in `prisma/migrations/`
3. Test in development environment
4. Apply to production: `prisma migrate deploy`

---

#### 4. TESTING-GUIDE.md
**Location**: `guidelines/quality/`
**Topics**: Testing and Debugging
**Technology Stack**: Jest, Vitest, Playwright, React Testing Library, MSW, Supertest

**Description**:
Provides comprehensive testing strategies for Sumdnc.com:

**Unit Testing with Vitest**:
- **Component Tests**: React Testing Library patterns
- **Utility Function Tests**: Pure function testing
- **Hook Tests**: Custom React hooks testing with `@testing-library/react-hooks`
- **Coverage Requirements**: 80% minimum, 90% for critical paths

**Integration Testing**:
- **API Route Tests**: Supertest for Next.js API routes
- **tRPC Tests**: Testing procedures with mock contexts
- **Database Tests**: Test database seeding and teardown
- **MSW (Mock Service Worker)**: API mocking for frontend tests

**E2E Testing with Playwright**:
- **User Flows**: Complete user journey testing
- **Cross-Browser**: Chrome, Firefox, Safari, Edge
- **Visual Regression**: Screenshot comparison
- **Performance Testing**: Lighthouse CI integration

**Test File Organization**:
```
src/
  components/
    Button.tsx
    Button.test.tsx          # Co-located unit tests
  __tests__/
    integration/
      api/
        users.test.ts        # API integration tests
    e2e/
      checkout-flow.spec.ts  # Playwright E2E tests
```

**Testing Patterns**:
```typescript
// AIDEV-NOTE: React Testing Library best practices
import { render, screen, userEvent } from '@testing-library/react';

describe('LoginForm', () => {
  it('submits credentials on form submit', async () => {
    const handleSubmit = vi.fn();
    render(<LoginForm onSubmit={handleSubmit} />);

    await userEvent.type(screen.getByLabelText(/email/i), 'user@test.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'password123');
    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'user@test.com',
      password: 'password123',
    });
  });
});
```

**TDD Workflow**:
1. Write failing test first (Red)
2. Write minimum code to pass (Green)
3. Refactor while keeping tests passing (Refactor)
4. Commit with test coverage report

---

#### 5. ERROR-HANDLING.md
**Location**: `guidelines/development/`
**Topics**: Back-end Development, API Development
**Technology Stack**: TRPCError, Error Boundaries, Sentry, toast notifications, loguru

**Description**:
Defines error handling patterns across the Sumdnc.com stack:

**Frontend Error Handling**:
- **Error Boundaries**: React error boundaries for component failures
- **User Feedback**: Toast notifications with `sonner` or `react-hot-toast`
- **Form Validation**: Client-side validation with Zod + react-hook-form
- **Async Error States**: Loading, error, success states for data fetching
- **Retry Logic**: Exponential backoff for failed requests

**Backend Error Handling**:
- **tRPC Errors**: Standardized error codes (BAD_REQUEST, UNAUTHORIZED, etc.)
- **Custom Error Classes**: Domain-specific error types
- **Database Errors**: Prisma error mapping to user-friendly messages
- **Validation Errors**: Zod validation error formatting

**Error Logging**:
- **Sentry Integration**: Error tracking and performance monitoring
- **Structured Logging**: JSON logs with context (user ID, request ID, etc.)
- **Error Aggregation**: Group similar errors for prioritization
- **Alert Thresholds**: Notify team when error rates spike

**Error Response Format**:
```typescript
// AIDEV-NOTE: Standardized error response structure
interface ErrorResponse {
  error: {
    code: string;           // 'VALIDATION_ERROR', 'UNAUTHORIZED', etc.
    message: string;        // User-friendly message
    details?: unknown;      // Additional context (dev only)
    timestamp: string;      // ISO 8601 timestamp
    requestId: string;      // For support debugging
  }
}
```

**Exception Hierarchy**:
```typescript
// AIDEV-NOTE: Custom error classes with proper inheritance
class AppError extends Error {
  constructor(
    public code: string,
    public statusCode: number,
    message: string
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}

class ValidationError extends AppError {
  constructor(message: string, public fields: Record<string, string>) {
    super('VALIDATION_ERROR', 400, message);
  }
}
```

---

#### 6. SECURITY-CHECKLIST.md
**Location**: `guidelines/quality/`
**Topics**: Security Best Practices, API Development
**Technology Stack**: NextAuth.js, helmet.js, Zod, CORS, CSP, OAuth 2.0

**Description**:
Enumerates security patterns and OWASP top 10 mitigations for Sumdnc.com:

**Authentication & Authorization**:
- **NextAuth.js Setup**: OAuth providers, credentials, session management
- **Role-Based Access Control (RBAC)**: Permission checks in API routes
- **JWT Security**: Short expiry, secure signing, HttpOnly cookies
- **Password Hashing**: bcrypt with proper salt rounds (10+)
- **2FA Implementation**: TOTP with QR code generation

**Input Validation & Sanitization**:
- **Zod Schema Validation**: All user inputs validated at runtime
- **SQL Injection Prevention**: Prisma parameterized queries only
- **XSS Prevention**: React's built-in escaping + CSP headers
- **CSRF Protection**: SameSite cookies + CSRF tokens for mutations
- **File Upload Validation**: MIME type checking, size limits, virus scanning

**Security Headers (Next.js middleware)**:
```typescript
// AIDEV-NOTE: Security headers configuration
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Content Security Policy
  response.headers.set('Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
  );

  // Other security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  return response;
}
```

**Environment Variables**:
- **Never Commit Secrets**: `.env` in `.gitignore`
- **Different Envs**: `.env.local`, `.env.production`
- **Rotation Policy**: Regular secret rotation schedule
- **Access Control**: Limit who can view production secrets

**API Rate Limiting**:
- **Upstash Rate Limit**: Redis-backed rate limiting
- **Per-Route Limits**: Different limits for different endpoints
- **User vs IP**: Rate limit by user ID when authenticated

**Security Audit Checklist**:
- [ ] All dependencies up to date (Dependabot)
- [ ] No hardcoded secrets in codebase
- [ ] HTTPS enforced (HSTS header)
- [ ] Input validation on all API endpoints
- [ ] SQL injection prevention verified
- [ ] XSS prevention with CSP
- [ ] Authentication on protected routes
- [ ] Rate limiting on public endpoints
- [ ] Security headers configured
- [ ] Error messages don't leak sensitive info

---

#### 7. PYTHON-STYLE.md
**Location**: `guidelines/development/`
**Topics**: Back-end Development, Data Processing
**Technology Stack**: Python 3.13, ruff, loguru, pydantic, type hints, uv

**Description**:
Extends ruff configuration with Python style guidelines for Sumdnc.com's data pipelines and ML services:

**Code Style Standards**:
- **Line Length**: 88 characters (Black default)
- **Imports**: Absolute imports, sorted with `ruff`
- **String Formatting**: f-strings preferred over `.format()` and `%`
- **Type Hints**: All function signatures, optional for variables
- **Docstrings**: NumPy style for all public functions/classes

**Type Hints Examples**:
```python
# AIDEV-NOTE: Comprehensive type hints for clarity
from typing import Optional, Union, List, Dict, Any
from datetime import datetime

def process_user_data(
    user_id: int,
    start_date: datetime,
    filters: Optional[Dict[str, Any]] = None
) -> List[Dict[str, Union[str, int, float]]]:
    """Process user activity data with optional filters.

    Parameters
    ----------
    user_id : int
        Unique identifier for the user
    start_date : datetime
        Start date for data processing
    filters : dict, optional
        Additional filter criteria

    Returns
    -------
    list of dict
        Processed user activity records
    """
    ...
```

**Logging with Loguru**:
```python
# AIDEV-NOTE: Structured logging with context
from loguru import logger

logger.add(
    "logs/app_{time}.log",
    rotation="500 MB",
    retention="10 days",
    format="{time:YYYY-MM-DD HH:mm:ss} | {level} | {name}:{function}:{line} | {message}"
)

def fetch_data(query: str) -> pd.DataFrame:
    logger.info(f"Executing query", query_length=len(query))
    try:
        result = execute_query(query)
        logger.success(f"Query successful", rows=len(result))
        return result
    except Exception as e:
        logger.exception(f"Query failed: {e}")
        raise
```

**Pydantic Models**:
```python
# AIDEV-NOTE: Data validation with Pydantic
from pydantic import BaseModel, EmailStr, Field, validator

class UserProfile(BaseModel):
    id: int
    email: EmailStr
    age: int = Field(ge=18, le=120)
    full_name: str = Field(min_length=2, max_length=100)

    @validator('full_name')
    def validate_name(cls, v):
        if not v.replace(' ', '').isalpha():
            raise ValueError('Name must contain only letters')
        return v.title()
```

**Ruff Configuration** (`pyproject.toml`):
```toml
[tool.ruff]
line-length = 88
select = ["E", "F", "I", "N", "W", "B", "C90"]
ignore = ["E501"]  # Line too long (handled by formatter)

[tool.ruff.lint]
fixable = ["ALL"]
```

---

#### 8. PROJECT-SETUP.md
**Location**: `guidelines/core/`
**Topics**: Project Management, Documentation Practices
**Technology Stack**: uv, npm, pnpm, pyproject.toml, package.json, Next.js, Vite

**Description**:
Step-by-step guide for initializing new projects in the Sumdnc.com monorepo:

**Python Project Setup**:
```bash
# AIDEV-NOTE: Python project initialization workflow

# 1. Navigate to projects directory
cd projects/

# 2. Create new project directory
mkdir my-data-pipeline
cd my-data-pipeline

# 3. Initialize with uv
uv init

# 4. Edit pyproject.toml with dependencies
cat > pyproject.toml << EOF
[project]
name = "my-data-pipeline"
version = "0.1.0"
dependencies = [
    "pandas>=2.0.0",
    "pydantic>=2.0.0",
    "loguru>=0.7.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=7.0.0",
    "pytest-cov>=4.0.0",
    "ruff>=0.1.0",
]
EOF

# 5. Create virtual environment and install
uv venv
source .venv/bin/activate
uv pip install -e ".[dev]"

# 6. Create directory structure
mkdir -p src/my_data_pipeline tests docs
touch src/my_data_pipeline/__init__.py
touch tests/__init__.py
```

**Next.js/React Project Setup**:
```bash
# AIDEV-NOTE: Next.js project initialization

# 1. Create new Next.js project with TypeScript and Tailwind
cd projects/
pnpm create next-app@latest my-app \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*"

# 2. Install additional dependencies
cd my-app
pnpm add @trpc/server @trpc/client @trpc/react-query @trpc/next \
  @tanstack/react-query \
  zod \
  next-auth \
  @prisma/client

pnpm add -D prisma \
  @types/node \
  @testing-library/react \
  @testing-library/jest-dom \
  vitest \
  @vitejs/plugin-react

# 3. Initialize Prisma
pnpm prisma init

# 4. Create directory structure
mkdir -p src/server/routers \
  src/components/ui \
  src/lib/utils \
  src/hooks \
  src/types
```

**Integration with `projects/utils`**:
```typescript
// AIDEV-NOTE: Import shared utilities
import { formatDate, validateEmail } from '@/utils/helpers';
import { useAuth } from '@/utils/hooks/useAuth';
```

**Initial Test Setup**:
```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      exclude: ['node_modules/', 'src/__tests__/'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

---

#### 9. COMMON-PATTERNS.md
**Location**: `guidelines/core/`
**Topics**: Front-end Development, Back-end Development
**Technology Stack**: React hooks, utility functions, pandas, MLflow, Plotly, pathlib

**Description**:
Library of battle-tested, reusable code patterns for Sumdnc.com:

**React Patterns**:

```typescript
// AIDEV-NOTE: Custom hook for data fetching with SWR
import useSWR from 'swr';

export function useUser(userId: string) {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/users/${userId}`,
    fetcher
  );

  return {
    user: data,
    isLoading,
    isError: error,
    refresh: mutate,
  };
}

// AIDEV-NOTE: Compound component pattern
export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg border bg-card">{children}</div>;
}

Card.Header = function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="p-6 pb-0">{children}</div>;
};

Card.Content = function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-6">{children}</div>;
};

// Usage:
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Content>Content here</Card.Content>
</Card>
```

**Data Processing Patterns**:

```python
# AIDEV-NOTE: Pandas data pipeline pattern
import pandas as pd
from pathlib import Path
from loguru import logger

def process_user_analytics(
    input_path: Path,
    output_path: Path,
    filters: Optional[Dict[str, Any]] = None
) -> pd.DataFrame:
    """Standard ETL pattern for user analytics."""

    # Extract
    logger.info(f"Reading data from {input_path}")
    df = pd.read_csv(input_path)

    # Transform
    df = (df
        .pipe(clean_column_names)
        .pipe(remove_duplicates)
        .pipe(apply_filters, filters)
        .pipe(calculate_metrics)
    )

    # Load
    logger.info(f"Writing results to {output_path}")
    df.to_parquet(output_path, index=False)

    return df

# AIDEV-NOTE: Reusable transformation functions
def clean_column_names(df: pd.DataFrame) -> pd.DataFrame:
    df.columns = df.columns.str.lower().str.replace(' ', '_')
    return df
```

**Visualization Patterns**:

```python
# AIDEV-NOTE: Plotly visualization template
import plotly.express as px
import plotly.graph_objects as go

def create_time_series_chart(
    df: pd.DataFrame,
    x_col: str,
    y_col: str,
    title: str
) -> go.Figure:
    """Standard time series visualization."""

    fig = px.line(
        df,
        x=x_col,
        y=y_col,
        title=title,
        template='plotly_white'
    )

    fig.update_layout(
        hovermode='x unified',
        xaxis_title=x_col.replace('_', ' ').title(),
        yaxis_title=y_col.replace('_', ' ').title(),
    )

    return fig
```

**MLflow Experiment Tracking**:

```python
# AIDEV-NOTE: MLflow experiment logging pattern
import mlflow
from sklearn.ensemble import RandomForestClassifier

def train_model(X_train, y_train, X_test, y_test):
    with mlflow.start_run():
        # Log parameters
        params = {'n_estimators': 100, 'max_depth': 10}
        mlflow.log_params(params)

        # Train model
        model = RandomForestClassifier(**params)
        model.fit(X_train, y_train)

        # Log metrics
        train_score = model.score(X_train, y_train)
        test_score = model.score(X_test, y_test)
        mlflow.log_metrics({
            'train_accuracy': train_score,
            'test_accuracy': test_score,
        })

        # Log model
        mlflow.sklearn.log_model(model, 'model')

    return model
```

---

#### 10. TROUBLESHOOTING.md
**Location**: `guidelines/quality/`
**Topics**: Testing and Debugging
**Technology Stack**: Chrome DevTools, React DevTools, Sentry, LogRocket, uv, Prisma

**Description**:
Comprehensive guide to common issues and their solutions for Sumdnc.com:

**Common Issues by Category**:

**1. Dependency Issues**:
```bash
# AIDEV-NOTE: Common uv/npm issues and fixes

# Issue: uv lock file conflict
Solution:
rm uv.lock
uv sync

# Issue: npm peer dependency warnings
Solution:
pnpm install --legacy-peer-deps

# Issue: TypeScript module not found
Solution:
# Check tsconfig.json paths configuration
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**2. Next.js Issues**:
```typescript
// AIDEV-NOTE: Common Next.js errors

// Issue: "Error: Text content does not match server-rendered HTML"
// Solution: Ensure consistent rendering between server and client
function MyComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <div>{new Date().toString()}</div>;
}

// Issue: "Cannot read properties of undefined (reading 'map')"
// Solution: Add proper loading states and null checks
function UserList() {
  const { data: users, isLoading } = trpc.user.list.useQuery();

  if (isLoading) return <Skeleton />;
  if (!users?.length) return <EmptyState />;

  return users.map(user => <UserCard key={user.id} user={user} />);
}
```

**3. Prisma Issues**:
```bash
# AIDEV-NOTE: Prisma troubleshooting

# Issue: "Error: P1001 - Can't reach database server"
Solution:
# Check DATABASE_URL in .env
# Ensure database is running
docker-compose up -d postgres

# Issue: "Migration failed to apply"
Solution:
# Reset development database
pnpm prisma migrate reset
pnpm prisma generate

# Issue: "Type error: Property doesn't exist on type"
Solution:
# Regenerate Prisma Client
pnpm prisma generate
```

**4. tRPC Issues**:
```typescript
// AIDEV-NOTE: tRPC debugging patterns

// Issue: "TRPCClientError: No procedure found"
// Solution: Ensure procedure is exported and router is included in appRouter

// Check procedure definition:
export const userRouter = router({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      // Implementation
    }),
});

// Check appRouter includes this router:
export const appRouter = router({
  user: userRouter,
  // ... other routers
});
```

**Debugging Strategies**:

```typescript
// AIDEV-NOTE: Comprehensive logging for debugging
import { logger } from '@/lib/logger';

async function debuggableFunction(userId: string) {
  logger.info('Starting operation', { userId });

  try {
    const user = await fetchUser(userId);
    logger.debug('User fetched', { user });

    const result = await processUser(user);
    logger.info('Operation completed', { result });

    return result;
  } catch (error) {
    logger.error('Operation failed', {
      userId,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    throw error;
  }
}
```

**Performance Debugging**:
```typescript
// AIDEV-NOTE: Performance monitoring with React DevTools Profiler
import { Profiler } from 'react';

function onRenderCallback(
  id: string,
  phase: 'mount' | 'update',
  actualDuration: number,
) {
  console.log(`${id} ${phase} took ${actualDuration}ms`);
}

<Profiler id="UserList" onRender={onRenderCallback}>
  <UserList />
</Profiler>
```

---

### Additional Specialized Guides

#### 11. FRONTEND-STANDARDS.md
**Location**: `guidelines/development/`
**Topics**: Front-end Development, Responsive Design
**Technology Stack**: React 18+, Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Zustand, Framer Motion

**Description**:
Comprehensive React/Next.js patterns and standards for Sumdnc.com frontend:

**Component Architecture**:
```typescript
// AIDEV-NOTE: Standard functional component structure
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
  className?: string;
}

export function UserCard({ user, onEdit, className }: UserCardProps) {
  // 1. Hooks at the top
  const [isExpanded, setIsExpanded] = useState(false);

  // 2. Derived state and computations
  const displayName = user.firstName + ' ' + user.lastName;

  // 3. Event handlers
  const handleEdit = () => {
    onEdit?.(user);
  };

  // 4. Effects
  useEffect(() => {
    // Side effects here
  }, [user.id]);

  // 5. Early returns for edge cases
  if (!user) return null;

  // 6. JSX return
  return (
    <div className={cn('rounded-lg border p-4', className)}>
      <h3>{displayName}</h3>
      <Button onClick={handleEdit}>Edit</Button>
    </div>
  );
}
```

**Server Components vs Client Components**:
```typescript
// AIDEV-NOTE: Server Component (default in Next.js App Router)
// app/users/page.tsx
import { db } from '@/lib/db';
import { UserList } from '@/components/UserList';

export default async function UsersPage() {
  // Fetch data directly in Server Component
  const users = await db.user.findMany();

  return (
    <div>
      <h1>Users</h1>
      <UserList users={users} />
    </div>
  );
}

// AIDEV-NOTE: Client Component (use 'use client' directive)
// components/UserList.tsx
'use client';

import { useState } from 'react';
import { User } from '@/types';

interface UserListProps {
  users: User[];
}

export function UserList({ users }: UserListProps) {
  const [filter, setFilter] = useState('');

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <input value={filter} onChange={e => setFilter(e.target.value)} />
      {filteredUsers.map(user => <UserCard key={user.id} user={user} />)}
    </>
  );
}
```

**State Management with Zustand**:
```typescript
// AIDEV-NOTE: Zustand store for global state
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => set((state) => ({
        items: [...state.items, item]
      })),
      removeItem: (id) => set((state) => ({
        items: state.items.filter(i => i.id !== id)
      })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
    }
  )
);
```

**Tailwind CSS Patterns**:
```typescript
// AIDEV-NOTE: Reusable Tailwind component variants
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
```

**Animation with Framer Motion**:
```typescript
// AIDEV-NOTE: Reusable animation variants
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export function AnimatedCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
```

**Folder Structure**:
```
src/
  app/                      # Next.js App Router
    (auth)/                 # Route groups
      login/
        page.tsx
    (dashboard)/
      users/
        page.tsx
        [id]/
          page.tsx
    api/                    # API routes
      trpc/
        [trpc]/
          route.ts
    layout.tsx
    page.tsx
  components/
    ui/                     # shadcn/ui components
      button.tsx
      card.tsx
    features/               # Feature-specific components
      user/
        UserCard.tsx
        UserForm.tsx
    shared/                 # Shared components
      Header.tsx
      Footer.tsx
  lib/
    utils.ts                # Utility functions
    trpc.ts                 # tRPC client
    db.ts                   # Database client
  hooks/                    # Custom React hooks
    useUser.ts
    useAuth.ts
  types/                    # TypeScript types
    user.ts
    api.ts
  styles/
    globals.css
```

---

#### 12. VERSION-CONTROL.md
**Location**: `guidelines/deployment/`
**Topics**: Version Control, Collaboration Tools
**Technology Stack**: Git, GitHub, GitHub Actions, Conventional Commits

**Description**:
Git workflow standards and best practices for Sumdnc.com team collaboration:

**Branch Naming Conventions**:
```bash
# AIDEV-NOTE: Branch naming patterns
feature/user-authentication
feature/dashboard-analytics
bugfix/login-redirect-loop
hotfix/critical-security-patch
refactor/database-queries
docs/api-documentation
chore/update-dependencies
```

**Conventional Commits**:
```bash
# AIDEV-NOTE: Commit message format
# <type>(<scope>): <subject>
#
# <body>
#
# <footer>

# Examples:
feat(auth): add OAuth2 login flow

- Implement Google and GitHub OAuth providers
- Add callback handlers and token management
- Update authentication middleware

Closes #123

fix(api): resolve race condition in user creation

The previous implementation had a race condition when
multiple requests tried to create the same user simultaneously.
Added database transaction with unique constraint check.

BREAKING CHANGE: UserCreateInput now requires email verification

refactor(db): optimize user queries with select statements

- Reduced data transfer by selecting only needed fields
- Added indexes for frequently queried columns
- Improved query performance by 60%

docs(readme): update installation instructions

chore(deps): upgrade Next.js to 14.1.0
```

**Commit Types**:
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code restructuring without behavior change
- `perf`: Performance improvement
- `style`: Code style changes (formatting, etc.)
- `test`: Adding or updating tests
- `docs`: Documentation changes
- `build`: Build system changes
- `ci`: CI/CD changes
- `chore`: Maintenance tasks

**Git Flow Workflow**:
```bash
# AIDEV-NOTE: Standard Git Flow process

# 1. Start new feature
git checkout develop
git pull origin develop
git checkout -b feature/new-dashboard

# 2. Make commits following conventional commits
git add .
git commit -m "feat(dashboard): add user analytics widget"

# 3. Keep feature branch updated
git fetch origin
git rebase origin/develop

# 4. Push feature branch
git push origin feature/new-dashboard

# 5. Create Pull Request on GitHub
# - Fill in PR template
# - Request reviews from team
# - Link related issues

# 6. After approval, merge to develop
# - Squash and merge for clean history
# - Delete feature branch after merge

# 7. Release process
git checkout develop
git pull origin develop
git checkout -b release/1.2.0
# Update version numbers, CHANGELOG
git commit -m "chore(release): prepare v1.2.0"
git push origin release/1.2.0
# Create PR to main, then tag release
```

**Pull Request Template**:
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix (non-breaking change fixing an issue)
- [ ] New feature (non-breaking change adding functionality)
- [ ] Breaking change (fix or feature causing existing functionality to break)
- [ ] Documentation update

## Testing
- [ ] Unit tests pass locally
- [ ] Integration tests pass
- [ ] Manual testing completed
- [ ] Added new tests for changes

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Related issues linked

## Related Issues
Closes #123
Relates to #456
```

**Code Review Checklist**:
- [ ] Code is readable and maintainable
- [ ] No unnecessary complexity
- [ ] Proper error handling implemented
- [ ] Security considerations addressed
- [ ] Performance implications considered
- [ ] Tests cover new code
- [ ] Documentation is clear and accurate
- [ ] No console.log or debugging code
- [ ] Accessibility standards met
- [ ] Responsive design verified

**Git Hooks** (Husky configuration):
```json
// AIDEV-NOTE: Automated quality checks
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-push": "npm run test"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md}": [
      "prettier --write"
    ]
  }
}
```

---

#### 13. DEPLOYMENT-GUIDE.md
**Location**: `guidelines/deployment/`
**Topics**: Deployment and Hosting, Security Best Practices
**Technology Stack**: Vercel, Docker, AWS, environment configs, PostgreSQL, Redis

**Description**:
Comprehensive deployment strategies for Sumdnc.com across environments:

**Vercel Deployment (Primary)**:
```bash
# AIDEV-NOTE: Vercel deployment configuration

# vercel.json
{
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "regions": ["iad1", "sfo1"],  # East and West US
  "env": {
    "DATABASE_URL": "@database-url",
    "NEXTAUTH_SECRET": "@nextauth-secret",
    "REDIS_URL": "@redis-url"
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

**Environment Configuration**:
```bash
# AIDEV-NOTE: Environment variable management

# .env.local (development)
DATABASE_URL="postgresql://localhost:5432/sumdnc_dev"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="dev-secret-change-in-production"
REDIS_URL="redis://localhost:6379"

# .env.production (Vercel environment variables)
DATABASE_URL="postgresql://prod-db.supabase.co/sumdnc"
NEXTAUTH_URL="https://sumdnc.com"
NEXTAUTH_SECRET="${NEXTAUTH_SECRET}"  # Set in Vercel dashboard
REDIS_URL="${REDIS_URL}"              # Upstash Redis URL
NEXT_PUBLIC_API_URL="https://api.sumdnc.com"

# Environment validation (src/lib/env.ts)
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(32),
  REDIS_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'production', 'test']),
});

export const env = envSchema.parse(process.env);
```

**Docker Configuration** (for self-hosted):
```dockerfile
# AIDEV-NOTE: Multi-stage Docker build for Next.js

# Dockerfile
FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@latest --activate

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

**Docker Compose** (full stack):
```yaml
# AIDEV-NOTE: Local development environment
# docker-compose.yml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: sumdnc_dev
      POSTGRES_USER: sumdnc
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://sumdnc:password@postgres:5432/sumdnc_dev
      REDIS_URL: redis://redis:6379
    depends_on:
      - postgres
      - redis

volumes:
  postgres_data:
  redis_data:
```

**Deployment Checklist**:

**Pre-Deployment**:
- [ ] All tests passing (unit, integration, E2E)
- [ ] Code linting passed
- [ ] Security audit completed (`npm audit`, Snyk)
- [ ] Environment variables configured
- [ ] Database migrations ready
- [ ] Build successful locally
- [ ] Performance tested (Lighthouse score > 90)
- [ ] Accessibility audit passed
- [ ] Security headers configured
- [ ] Error tracking configured (Sentry)

**Deployment Steps**:
1. **Staging Deployment**:
   ```bash
   # Deploy to staging (Vercel preview)
   git push origin develop
   # Vercel automatically deploys preview
   # Test staging deployment at preview URL
   ```

2. **Production Deployment**:
   ```bash
   # Merge to main branch
   git checkout main
   git merge develop
   git push origin main
   # Vercel automatically deploys to production
   ```

3. **Database Migration**:
   ```bash
   # Run migrations on production database
   pnpm prisma migrate deploy
   ```

4. **Cache Invalidation**:
   ```bash
   # Clear Redis cache if needed
   redis-cli FLUSHALL
   ```

5. **Smoke Tests**:
   - [ ] Homepage loads correctly
   - [ ] Authentication works
   - [ ] API endpoints respond
   - [ ] Database queries execute
   - [ ] External integrations work

**Rollback Procedure**:
```bash
# AIDEV-NOTE: Quick rollback steps

# Option 1: Vercel instant rollback
# Go to Vercel dashboard → Deployments → Click "..." → Rollback

# Option 2: Git revert
git revert HEAD
git push origin main
# Vercel redeploys automatically

# Option 3: Redeploy previous commit
git checkout <previous-commit-hash>
git push origin main --force
```

**Post-Deployment**:
- [ ] Monitor error rates (Sentry)
- [ ] Check performance metrics (Vercel Analytics)
- [ ] Verify all critical user flows
- [ ] Monitor database performance
- [ ] Check API response times
- [ ] Review server logs
- [ ] Update documentation if needed
- [ ] Notify team of deployment

---

#### 14. PERFORMANCE.md
**Location**: `guidelines/quality/`
**Topics**: Performance Optimization, Database Management
**Technology Stack**: Next.js Image, code splitting, Redis, CDN caching, Web Vitals, Lighthouse

**Description**:
Performance optimization strategies and benchmarks for Sumdnc.com:

**Core Web Vitals Targets**:
```typescript
// AIDEV-NOTE: Performance budgets and targets
const PERFORMANCE_TARGETS = {
  // Core Web Vitals
  LCP: 2.5,  // Largest Contentful Paint (seconds)
  FID: 100,  // First Input Delay (milliseconds)
  CLS: 0.1,  // Cumulative Layout Shift

  // Other metrics
  FCP: 1.8,  // First Contentful Paint (seconds)
  TTI: 3.8,  // Time to Interactive (seconds)
  TBT: 200,  // Total Blocking Time (milliseconds)

  // Bundle sizes
  firstLoadJS: 170,  // KB (Next.js default: 200KB)
  totalPageSize: 1500,  // KB
};
```

**Image Optimization**:
```typescript
// AIDEV-NOTE: Next.js Image component best practices
import Image from 'next/image';

// 1. Local images (imported)
import heroImage from '@/public/hero.jpg';

<Image
  src={heroImage}
  alt="Hero section"
  placeholder="blur"  // Automatic blur placeholder
  quality={85}        // 85 is good balance of quality/size
  priority            // Load above the fold images first
/>

// 2. Remote images
<Image
  src="https://cdn.example.com/image.jpg"
  alt="Product image"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  loading="lazy"
/>

// 3. Cloudinary optimization
<Image
  src="https://res.cloudinary.com/demo/image/upload/w_800,f_auto,q_auto/sample.jpg"
  alt="Optimized image"
  width={800}
  height={600}
/>
```

**Code Splitting Strategies**:
```typescript
// AIDEV-NOTE: Dynamic imports for code splitting
import dynamic from 'next/dynamic';
import { lazy, Suspense } from 'react';

// 1. Next.js dynamic import with loading state
const DynamicChart = dynamic(() => import('@/components/Chart'), {
  loading: () => <ChartSkeleton />,
  ssr: false,  // Disable SSR for client-only components
});

// 2. Route-based code splitting (automatic with Next.js App Router)
// Each page in app/ directory is automatically code-split

// 3. Component-based splitting for heavy libraries
const DynamicEditor = dynamic(() => import('@/components/RichTextEditor'), {
  loading: () => <div>Loading editor...</div>,
});

// 4. Conditional loading
function AdminPanel() {
  const { user } = useAuth();

  const AdminDashboard = dynamic(() => import('./AdminDashboard'));

  if (!user?.isAdmin) return <AccessDenied />;

  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <AdminDashboard />
    </Suspense>
  );
}
```

**Database Query Optimization**:
```typescript
// AIDEV-NOTE: Prisma query optimization patterns

// ❌ BAD: N+1 query problem
async function getPostsWithAuthors() {
  const posts = await prisma.post.findMany();

  // This creates N additional queries!
  const postsWithAuthors = await Promise.all(
    posts.map(async (post) => ({
      ...post,
      author: await prisma.user.findUnique({ where: { id: post.authorId } })
    }))
  );

  return postsWithAuthors;
}

// ✅ GOOD: Use include to fetch relations in single query
async function getPostsWithAuthors() {
  return await prisma.post.findMany({
    include: {
      author: {
        select: {
          id: true,
          name: true,
          avatar: true,
          // Only select needed fields
        }
      }
    }
  });
}

// ✅ EVEN BETTER: Use select to minimize data transfer
async function getPostsWithAuthors() {
  return await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      createdAt: true,
      author: {
        select: {
          id: true,
          name: true,
          avatar: true,
        }
      },
      _count: {
        select: { comments: true }
      }
    },
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: 20,  // Pagination
  });
}
```

**Caching Strategies**:
```typescript
// AIDEV-NOTE: Multi-layer caching approach

// 1. Next.js fetch cache (default 'force-cache')
async function getStaticData() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 }  // ISR: revalidate every hour
  });
  return res.json();
}

// 2. React cache for request deduplication
import { cache } from 'react';

export const getUser = cache(async (id: string) => {
  return await prisma.user.findUnique({ where: { id } });
});

// 3. Redis caching for expensive operations
import { redis } from '@/lib/redis';

async function getAnalytics(userId: string) {
  const cacheKey = `analytics:${userId}`;

  // Try cache first
  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached);

  // Compute if not cached
  const analytics = await computeExpensiveAnalytics(userId);

  // Cache for 15 minutes
  await redis.setex(cacheKey, 900, JSON.stringify(analytics));

  return analytics;
}

// 4. CDN caching with proper headers
export async function GET(request: Request) {
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
```

**Bundle Size Optimization**:
```javascript
// AIDEV-NOTE: webpack-bundle-analyzer configuration
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  experimental: {
    optimizePackageImports: ['lodash', 'react-icons'],
  },
  // Tree shaking
  webpack: (config) => {
    config.optimization.usedExports = true;
    return config;
  },
});

// Run analysis
// ANALYZE=true pnpm build
```

**Lazy Loading & Intersection Observer**:
```typescript
// AIDEV-NOTE: Lazy load components when visible
import { useInView } from 'react-intersection-observer';

function LazySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {inView ? <ExpensiveComponent /> : <div style={{ height: 400 }} />}
    </div>
  );
}
```

**Performance Monitoring**:
```typescript
// AIDEV-NOTE: Web Vitals tracking
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

// Custom performance tracking
export function reportWebVitals(metric) {
  const { id, name, label, value } = metric;

  // Send to analytics
  window.gtag?.('event', name, {
    event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    event_label: id,
    non_interaction: true,
  });

  // Log to console in dev
  if (process.env.NODE_ENV === 'development') {
    console.log(`${name}:`, value);
  }
}
```

**Font Optimization**:
```typescript
// AIDEV-NOTE: Next.js font optimization
import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export default function RootLayout({ children }) {
  return (
    <html className={`${inter.variable} ${robotoMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

**Performance Checklist**:
- [ ] Images optimized (WebP/AVIF format)
- [ ] Lazy loading for below-fold content
- [ ] Code splitting implemented
- [ ] Database queries optimized (no N+1)
- [ ] Redis caching for expensive operations
- [ ] CDN configured with proper cache headers
- [ ] Bundle size < 170KB first load
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] FID < 100ms
- [ ] Lighthouse score > 90

---

#### 15. RESPONSIVE-DESIGN.md
**Location**: `guidelines/design/`
**Topics**: Responsive Design, Front-end Development
**Technology Stack**: Tailwind CSS, mobile-first, container queries, CSS Grid, Flexbox

**Description**:
Responsive design implementation with Tailwind CSS for optimal Sumdnc.com UX across devices:

**Mobile-First Breakpoints**:
```typescript
// AIDEV-NOTE: Tailwind breakpoint system (mobile-first)
const breakpoints = {
  sm: '640px',   // Small devices (landscape phones)
  md: '768px',   // Medium devices (tablets)
  lg: '1024px',  // Large devices (laptops)
  xl: '1280px',  // Extra large devices (desktops)
  '2xl': '1536px', // 2X large devices (large desktops)
};

// Usage: Start with mobile styles, add breakpoints for larger screens
<div className="
  w-full           // Mobile: full width
  px-4             // Mobile: 16px padding
  md:w-3/4         // Tablet: 75% width
  md:px-6          // Tablet: 24px padding
  lg:w-1/2         // Desktop: 50% width
  lg:px-8          // Desktop: 32px padding
  xl:max-w-screen-xl // Large desktop: max width
  mx-auto          // Center on all screens
">
  Content
</div>
```

**Responsive Layout Patterns**:
```typescript
// AIDEV-NOTE: Common responsive layout patterns

// 1. Responsive Grid (auto-fit columns)
<div className="
  grid
  grid-cols-1        // Mobile: 1 column
  sm:grid-cols-2     // Small: 2 columns
  lg:grid-cols-3     // Large: 3 columns
  xl:grid-cols-4     // XL: 4 columns
  gap-4
  md:gap-6
">
  {items.map(item => <Card key={item.id} item={item} />)}
</div>

// 2. Responsive Flexbox (stack on mobile, row on desktop)
<div className="
  flex
  flex-col          // Mobile: vertical stack
  md:flex-row       // Desktop: horizontal row
  gap-4
  items-center      // Center items
  md:items-start    // Align top on desktop
">
  <div className="w-full md:w-1/3">Sidebar</div>
  <div className="w-full md:w-2/3">Main Content</div>
</div>

// 3. Responsive Typography
<h1 className="
  text-2xl          // Mobile: 24px
  md:text-3xl       // Tablet: 30px
  lg:text-4xl       // Desktop: 36px
  xl:text-5xl       // Large: 48px
  font-bold
  leading-tight
  md:leading-snug
">
  Responsive Heading
</h1>

// 4. Show/Hide based on screen size
<div className="
  block             // Show on mobile
  md:hidden         // Hide on tablet+
">
  Mobile Menu
</div>

<div className="
  hidden            // Hide on mobile
  md:block          // Show on tablet+
">
  Desktop Navigation
</div>
```

**Container Queries** (Modern CSS):
```typescript
// AIDEV-NOTE: Container queries for component-level responsiveness
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      containers: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
};

// Usage in components
<div className="@container">
  <div className="
    grid
    grid-cols-1
    @md:grid-cols-2    // When container is md width
    @lg:grid-cols-3    // When container is lg width
    gap-4
  ">
    {items.map(item => <Item key={item.id} />)}
  </div>
</div>
```

**Responsive Images**:
```typescript
// AIDEV-NOTE: Responsive image patterns
import Image from 'next/image';

// 1. Responsive with object-fit
<div className="relative w-full h-64 md:h-96 lg:h-[32rem]">
  <Image
    src="/hero.jpg"
    alt="Hero image"
    fill
    className="object-cover"
    sizes="100vw"
    priority
  />
</div>

// 2. Different aspect ratios per breakpoint
<div className="
  aspect-square      // Mobile: 1:1
  md:aspect-video    // Desktop: 16:9
  relative
  overflow-hidden
">
  <Image
    src="/product.jpg"
    alt="Product"
    fill
    className="object-cover"
  />
</div>

// 3. Art direction (different images per breakpoint)
<picture>
  <source
    media="(min-width: 1024px)"
    srcSet="/hero-desktop.jpg"
  />
  <source
    media="(min-width: 768px)"
    srcSet="/hero-tablet.jpg"
  />
  <img src="/hero-mobile.jpg" alt="Hero" />
</picture>
```

**Responsive Navigation**:
```typescript
// AIDEV-NOTE: Mobile-first navigation component
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLinks />
          </div>
        </div>
      )}
    </nav>
  );
}
```

**Responsive Spacing**:
```typescript
// AIDEV-NOTE: Consistent spacing scale
<div className="
  p-4              // Mobile: 16px padding
  md:p-6           // Tablet: 24px padding
  lg:p-8           // Desktop: 32px padding

  space-y-4        // Mobile: 16px vertical spacing
  md:space-y-6     // Tablet: 24px
  lg:space-y-8     // Desktop: 32px
">
  <Section />
  <Section />
  <Section />
</div>
```

**Responsive Tables**:
```typescript
// AIDEV-NOTE: Mobile-friendly table pattern
<div className="
  overflow-x-auto   // Horizontal scroll on mobile
  -mx-4             // Extend to screen edges on mobile
  sm:mx-0           // Reset on tablet+
">
  <table className="min-w-full divide-y">
    <thead className="bg-gray-50">
      <tr>
        <th className="
          px-3 py-3
          text-left text-xs
          md:px-6 md:text-sm    // Larger on desktop
        ">
          Name
        </th>
        {/* More headers */}
      </tr>
    </thead>
    <tbody>
      {/* Table rows */}
    </tbody>
  </table>
</div>

// Alternative: Card layout on mobile, table on desktop
<div className="
  block md:hidden    // Show on mobile
">
  {data.map(item => <MobileCard key={item.id} item={item} />)}
</div>

<div className="
  hidden md:block    // Show on desktop
">
  <DataTable data={data} />
</div>
```

**Testing Responsive Design**:
```typescript
// AIDEV-NOTE: Responsive testing checklist
const RESPONSIVE_TEST_VIEWPORTS = [
  { name: 'Mobile', width: 375, height: 667 },    // iPhone SE
  { name: 'Mobile L', width: 428, height: 926 },  // iPhone 14 Pro Max
  { name: 'Tablet', width: 768, height: 1024 },   // iPad
  { name: 'Laptop', width: 1366, height: 768 },   // Standard laptop
  { name: 'Desktop', width: 1920, height: 1080 }, // Full HD
];

// Playwright responsive tests
test.describe('Responsive Layout', () => {
  RESPONSIVE_TEST_VIEWPORTS.forEach(({ name, width, height }) => {
    test(`should render correctly on ${name}`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto('/');
      await expect(page).toHaveScreenshot(`${name.toLowerCase()}.png`);
    });
  });
});
```

---

#### 16. ACCESSIBILITY.md
**Location**: `guidelines/quality/`
**Topics**: Accessibility Standards, Front-end Development
**Technology Stack**: ARIA, semantic HTML, axe DevTools, NVDA, keyboard navigation, WCAG 2.1

**Description**:
WCAG 2.1 AA compliance guidelines ensuring Sumdnc.com is accessible to all users:

**Semantic HTML Structure**:
```typescript
// AIDEV-NOTE: Proper semantic HTML elements

// ❌ BAD: Non-semantic divs
<div onClick={handleClick}>Click me</div>
<div>Navigation items here</div>

// ✅ GOOD: Semantic elements with proper roles
<button onClick={handleClick}>Click me</button>
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/home">Home</a></li>
  </ul>
</nav>

// Proper heading hierarchy
<article>
  <h1>Page Title</h1>
  <section>
    <h2>Section Title</h2>
    <h3>Subsection</h3>
  </section>
  <section>
    <h2>Another Section</h2>
  </section>
</article>
```

**ARIA Attributes**:
```typescript
// AIDEV-NOTE: ARIA attributes for enhanced accessibility

// 1. Buttons and interactive elements
<button
  aria-label="Close dialog"
  aria-pressed={isPressed}
  onClick={handleClose}
>
  <X aria-hidden="true" /> {/* Hide icon from screen readers */}
</button>

// 2. Form inputs with labels
<div>
  <label htmlFor="email" className="sr-only">
    Email address
  </label>
  <input
    id="email"
    type="email"
    aria-required="true"
    aria-invalid={hasError}
    aria-describedby={hasError ? "email-error" : undefined}
    placeholder="Enter email"
  />
  {hasError && (
    <p id="email-error" className="text-red-600" role="alert">
      Please enter a valid email
    </p>
  )}
</div>

// 3. Loading states
<button disabled={isLoading} aria-busy={isLoading}>
  {isLoading ? (
    <>
      <Spinner aria-hidden="true" />
      <span className="sr-only">Loading...</span>
    </>
  ) : (
    'Submit'
  )}
</button>

// 4. Expandable sections
<div>
  <button
    aria-expanded={isOpen}
    aria-controls="details-panel"
    onClick={() => setIsOpen(!isOpen)}
  >
    Show details
  </button>
  {isOpen && (
    <div id="details-panel" role="region" aria-label="Additional details">
      Content here
    </div>
  )}
</div>

// 5. Modal dialogs
<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent
    role="dialog"
    aria-labelledby="dialog-title"
    aria-describedby="dialog-description"
    aria-modal="true"
  >
    <h2 id="dialog-title">Dialog Title</h2>
    <p id="dialog-description">Dialog description</p>
    {/* Dialog content */}
  </DialogContent>
</Dialog>
```

**Keyboard Navigation**:
```typescript
// AIDEV-NOTE: Full keyboard support patterns

// 1. Focus management
import { useEffect, useRef } from 'react';

function Modal({ isOpen, onClose }: ModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Focus close button when modal opens
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      onKeyDown={handleKeyDown}
    >
      <button ref={closeButtonRef} onClick={onClose}>
        Close
      </button>
      {/* Modal content */}
    </div>
  );
}

// 2. Skip links for keyboard users

  href="#main-content"
  className="
    sr-only
    focus:not-sr-only
    focus:absolute
    focus:top-4
    focus:left-4
    focus:z-50
    focus:px-4
    focus:py-2
    focus:bg-blue-600
    focus:text-white
  "
>
  Skip to main content
</a>

// 3. Focus visible styles
// globals.css
.focus-visible:focus-visible {
  outline: 2px solid theme('colors.blue.600');
  outline-offset: 2px;
}

// 4. Roving tabindex for component groups
function RadioGroup({ options }: RadioGroupProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (e: KeyboardEvent, index: number) => {
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        setActiveIndex((index + 1) % options.length);
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        setActiveIndex((index - 1 + options.length) % options.length);
        break;
    }
  };

  return (
    <div role="radiogroup" aria-label="Options">
      {options.map((option, index) => (
        <button
          key={option.id}
          role="radio"
          aria-checked={index === activeIndex}
          tabIndex={index === activeIndex ? 0 : -1}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onClick={() => setActiveIndex(index)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
```

**Color Contrast**:
```typescript
// AIDEV-NOTE: WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large)

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // All colors meet WCAG AA standards
        primary: {
          DEFAULT: '#2563eb', // Blue 600 - 4.52:1 on white
          dark: '#1e40af',    // Blue 700 - 7.07:1 on white
        },
        success: '#059669',   // Green 600 - 4.53:1 on white
        error: '#dc2626',     // Red 600 - 4.52:1 on white
        warning: '#d97706',   // Amber 600 - 4.51:1 on white
      },
    },
  },
};

// Component with accessible colors
<button className="
  bg-primary
  text-white           // High contrast
  hover:bg-primary-dark
  focus:ring-2
  focus:ring-primary
  focus:ring-offset-2
">
  Accessible Button
</button>
```

**Alt Text Best Practices**:
```typescript
// AIDEV-NOTE: Descriptive alt text guidelines

// ✅ GOOD: Descriptive alt text
<Image
  src="/product.jpg"
  alt="Red leather messenger bag with brass buckles and adjustable strap"
  width={400}
  height={400}
/>

// ✅ GOOD: Decorative images (empty alt)
<Image
  src="/decoration.svg"
  alt=""  // Empty alt for decorative images
  aria-hidden="true"
  width={100}
  height={100}
/>

// ✅ GOOD: Functional images
<button>
  <Image
    src="/search-icon.svg"
    alt="Search"  // Describes function, not appearance
    width={20}
    height={20}
  />
</button>

// ❌ BAD: Redundant or useless alt text
<Image src="/photo.jpg" alt="image" /> // Too generic
<Image src="/logo.jpg" alt="logo.jpg" /> // Filename
```

**Screen Reader Only Content**:
```css
/* AIDEV-NOTE: Screen reader only utility class */
/* globals.css */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

**Form Accessibility**:
```typescript
// AIDEV-NOTE: Accessible form patterns
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

function ContactForm() {
  const { register, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form aria-labelledby="form-title">
      <h2 id="form-title">Contact Us</h2>

      <div>
        <label htmlFor="name" className="block mb-2">
          Name <span className="text-red-600" aria-label="required">*</span>
        </label>
        <input
          id="name"
          type="text"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register('name')}
        />
        {errors.name && (
          <p
            id="name-error"
            className="text-red-600 mt-1"
            role="alert"
          >
            {errors.name.message}
          </p>
        )}
      </div>

      <button type="submit">
        Submit
      </button>
    </form>
  );
}
```

**Accessibility Testing**:
```typescript
// AIDEV-NOTE: Automated accessibility testing

// 1. Jest-axe for unit tests
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('should have no accessibility violations', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

// 2. Playwright accessibility tests
test('should be accessible', async ({ page }) => {
  await page.goto('/');

  // Check for accessibility violations
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

// 3. Manual testing checklist
const A11Y_TEST_CHECKLIST = [
  '[ ] Keyboard navigation works (Tab, Shift+Tab, Enter, Space, Arrows)',
  '[ ] Focus indicators visible on all interactive elements',
  '[ ] Screen reader announces content correctly (test with NVDA/JAWS)',
  '[ ] Color contrast meets WCAG AA (4.5:1 for text)',
  '[ ] All images have appropriate alt text',
  '[ ] Form labels properly associated with inputs',
  '[ ] Error messages are announced to screen readers',
  '[ ] Modals trap focus and can be dismissed with Escape',
  '[ ] Page title updates on route changes',
  '[ ] Skip links work for keyboard users',
  '[ ] No seizure-inducing animations (respect prefers-reduced-motion)',
];
```

**Reduced Motion**:
```css
/* AIDEV-NOTE: Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

#### 17. CI-CD-PIPELINE.md
**Location**: `guidelines/deployment/`
**Topics**: CI/CD Pipeline, Testing and Debugging
**Technology Stack**: GitHub Actions, Vercel, ESLint, Prettier, Jest, Playwright, Lighthouse CI

**Description**:
Continuous Integration/Continuous Deployment configuration for automated Sumdnc.com workflows:

**GitHub Actions Workflow**:
```yaml
# AIDEV-NOTE: Complete CI/CD pipeline
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

env:
  NODE_VERSION: '20'

jobs:
  lint:
    name: Lint Code
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'pnpm'

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Run ESLint
        run: pnpm lint

      - name: Run Prettier
        run: pnpm format:check

      - name: Type check
        run: pnpm type-check

  test:
    name: Run Tests
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16-alpine
        env:
          POSTGRES_USER: test
          POSTGRES_PASSWORD: test
          POSTGRES_DB: test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432

      redis:
        image: redis:7-alpine
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 6379:6379

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'pnpm'

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Run database migrations
        run: pnpm prisma migrate deploy
        env:
          DATABASE_URL: postgresql://test:test@localhost:5432/test

      - name: Run unit tests
        run: pnpm test:unit --coverage
        env:
          DATABASE_URL: postgresql://test:test@localhost:5432/test
          REDIS_URL: redis://localhost:6379

      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info
          flags: unittests

  e2e:
    name: E2E Tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'pnpm'

      - name: Install pnpm
        uses: pnpm/action-setup@v2

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Install Playwright Browsers
        run: pnpm playwright install --with-deps

      - name: Run Playwright tests
        run: pnpm test:e2e

      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30

  security:
    name: Security Scan
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Run Snyk Security Scan
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
        with:
          args: --severity-threshold=high

      - name: Run npm audit
        run: npm audit --audit-level=high

  lighthouse:
    name: Lighthouse CI
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build project
        run: pnpm build

      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            http://localhost:3000
            http://localhost:3000/about
            http://localhost:3000/contact
          budgetPath: ./lighthouserc.json
          temporaryPublicStorage: true

  deploy-preview:
    name: Deploy Preview
    if: github.event_name == 'pull_request'
    needs: [lint, test, e2e]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Deploy to Vercel Preview
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          scope: ${{ secrets.VERCEL_ORG_ID }}

  deploy-production:
    name: Deploy Production
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    needs: [lint, test, e2e, security, lighthouse]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Deploy to Vercel Production
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
          scope: ${{ secrets.VERCEL_ORG_ID}}

      - name: Notify Slack
        uses: 8398a7/action-slack@v3
        with:
          status: ${{ job.status }}
          text: 'Production deployment completed!'
          webhook_url: ${{ secrets.SLACK_WEBHOOK }}
        if: always()
```

**Lighthouse CI Budget**:
```json
// AIDEV-NOTE: Performance budgets
// lighthouserc.json
{
  "ci": {
    "collect": {
      "startServerCommand": "pnpm start",
      "url": [
        "http://localhost:3000",
        "http://localhost:3000/about"
      ]
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.95 }],
        "categories:best-practices": ["error", { "minScore": 0.9 }],
        "categories:seo": ["error", { "minScore": 0.95 }],
        "first-contentful-paint": ["error", { "maxNumericValue": 1800 }],
        "largest-contentful-paint": ["error", { "maxNumericValue": 2500 }],
        "cumulative-layout-shift": ["error", { "maxNumericValue": 0.1 }],
        "total-blocking-time": ["error", { "maxNumericValue": 200 }]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}
```

**Quality Gates Configuration**:
```yaml
# AIDEV-NOTE: Branch protection rules
# Configure on GitHub Settings > Branches > main

# Required status checks:
- lint
- test
- e2e
- security
- lighthouse

# Additional requirements:
- Require pull request reviews (1 approval minimum)
- Require conversation resolution before merging
- Require linear history
- Include administrators in restrictions
```

---

#### 18. DATA-PIPELINE.md
**Location**: `guidelines/development/`
**Topics**: Back-end Development, Database Management
**Technology Stack**: pandas, MLflow, Airflow, Pydantic, data validation, ETL

**Description**:
Data engineering patterns for ETL/ELT workflows in Sumdnc.com's analytics infrastructure:

**ETL Pipeline Pattern**:
```python
# AIDEV-NOTE: Standard ETL pipeline structure
from pathlib import Path
from typing import Dict, Any, Optional
import pandas as pd
from loguru import logger
from pydantic import BaseModel, validator
import mlflow

class ETLConfig(BaseModel):
    """Pipeline configuration with validation."""
    source_path: Path
    destination_path: Path
    chunk_size: int = 10000

    @validator('source_path', 'destination_path')
    def validate_paths(cls, v):
        if not v.exists():
            raise ValueError(f"Path does not exist: {v}")
        return v

class DataPipeline:
    """Reusable ETL pipeline with MLflow tracking."""

    def __init__(self, config: ETLConfig):
        self.config = config
        self.metrics = {}

    def extract(self) -> pd.DataFrame:
        """Extract data from source."""
        logger.info(f"Extracting data from {self.config.source_path}")

        df = pd.read_csv(
            self.config.source_path,
            chunksize=self.config.chunk_size
        )

        # Combine chunks
        df = pd.concat(df, ignore_index=True)

        logger.info(f"Extracted {len(df)} rows")
        self.metrics['rows_extracted'] = len(df)

        return df

    def transform(self, df: pd.DataFrame) -> pd.DataFrame:
        """Transform data with validation."""
        logger.info("Transforming data")

        initial_count = len(df)

        # Pipeline transformations
        df = (df
            .pipe(self._clean_columns)
            .pipe(self._remove_duplicates)
            .pipe(self._handle_missing_values)
            .pipe(self._validate_data_types)
            .pipe(self._add_derived_columns)
        )

        final_count = len(df)
        self.metrics['rows_transformed'] = final_count
        self.metrics['rows_dropped'] = initial_count - final_count

        logger.info(f"Transformed to {final_count} rows")

        return df

    def load(self, df: pd.DataFrame) -> None:
        """Load data to destination."""
        logger.info(f"Loading data to {self.config.destination_path}")

        df.to_parquet(
            self.config.destination_path,
            index=False,
            compression='snappy'
        )

        self.metrics['destination_size_mb'] = (
            self.config.destination_path.stat().st_size / 1024 / 1024
        )

        logger.success("Data loaded successfully")

    def run(self) -> Dict[str, Any]:
        """Execute complete ETL pipeline with MLflow tracking."""
        with mlflow.start_run(run_name="etl_pipeline"):
            # Log parameters
            mlflow.log_params({
                'source': str(self.config.source_path),
                'destination': str(self.config.destination_path),
                'chunk_size': self.config.chunk_size,
            })

            try:
                # Execute pipeline
                df = self.extract()
                df = self.transform(df)
                self.load(df)

                # Log metrics
                mlflow.log_metrics(self.metrics)

                # Log artifact
                mlflow.log_artifact(str(self.config.destination_path))

                logger.success("Pipeline completed successfully")
                return {'status': 'success', **self.metrics}

            except Exception as e:
                logger.exception(f"Pipeline failed: {e}")
                mlflow.log_param('error', str(e))
                raise

    # Transformation helper methods
    def _clean_columns(self, df: pd.DataFrame) -> pd.DataFrame:
        """Standardize column names."""
        df.columns = (df.columns
            .str.lower()
            .str.replace(' ', '_')
            .str.replace('[^a-z0-9_]', '', regex=True)
        )
        return df

    def _remove_duplicates(self, df: pd.DataFrame) -> pd.DataFrame:
        """Remove duplicate rows."""
        duplicates = df.duplicated().sum()
        if duplicates > 0:
            logger.warning(f"Removing {duplicates} duplicate rows")
            df = df.drop_duplicates()
        return df

    def _handle_missing_values(self, df: pd.DataFrame) -> pd.DataFrame:
        """Handle missing values based on data type."""
        for col in df.columns:
            missing = df[col].isna().sum()
            if missing > 0:
                if df[col].dtype in ['float64', 'int64']:
                    df[col] = df[col].fillna(df[col].median())
                else:
                    df[col] = df[col].fillna('unknown')
                logger.info(f"Filled {missing} missing values in {col}")
        return df

    def _validate_data_types(self, df: pd.DataFrame) -> pd.DataFrame:
        """Validate and convert data types."""
        # Example: Ensure email column is string
        if 'email' in df.columns:
            df['email'] = df['email'].astype(str)

        # Example: Ensure date columns are datetime
        date_columns = [col for col in df.columns if 'date' in col]
        for col in date_columns:
            df[col] = pd.to_datetime(df[col], errors='coerce')

        return df

    def _add_derived_columns(self, df: pd.DataFrame) -> pd.DataFrame:
        """Add calculated/derived columns."""
        # Example: Add age_group from age
        if 'age' in df.columns:
            df['age_group'] = pd.cut(
                df['age'],
                bins=[0, 18, 35, 50, 65, 100],
                labels=['0-18', '19-35', '36-50', '51-65', '65+']
            )

        return df
```

**Data Validation with Pydantic**:
```python
# AIDEV-NOTE: Schema validation for data quality
from pydantic import BaseModel, EmailStr, Field, validator
from datetime import datetime
from enum import Enum

class UserStatus(str, Enum):
    ACTIVE = 'active'
    INACTIVE = 'inactive'
    SUSPENDED = 'suspended'

class UserRecord(BaseModel):
    """Validated user record schema."""
    id: int = Field(gt=0)
    email: EmailStr
    age: int = Field(ge=18, le=120)
    status: UserStatus
    created_at: datetime
    last_login: Optional[datetime] = None

    @validator('last_login')
    def validate_last_login(cls, v, values):
        if v and v < values.get('created_at'):
            raise ValueError('last_login cannot be before created_at')
        return v

# Validate DataFrame rows
def validate_dataframe(df: pd.DataFrame) -> pd.DataFrame:
    """Validate all rows in DataFrame against schema."""
    valid_rows = []
    invalid_rows = []

    for idx, row in df.iterrows():
        try:
            validated = UserRecord(**row.to_dict())
            valid_rows.append(validated.dict())
        except Exception as e:
            logger.warning(f"Row {idx} validation failed: {e}")
            invalid_rows.append({'row': idx, 'error': str(e)})

    # Log validation results
    logger.info(f"Valid rows: {len(valid_rows)}")
    logger.warning(f"Invalid rows: {len(invalid_rows)}")

    # Save invalid rows for review
    if invalid_rows:
        pd.DataFrame(invalid_rows).to_csv('invalid_rows.csv', index=False)

    return pd.DataFrame(valid_rows)
```

**Incremental Loading Pattern**:
```python
# AIDEV-NOTE: Incremental data loading with state management
from datetime import datetime, timedelta
import json

class IncrementalLoader:
    """Load only new/changed data since last run."""

    def __init__(self, state_file: Path):
        self.state_file = state_file
        self.state = self._load_state()

    def _load_state(self) -> Dict[str, Any]:
        """Load last run state."""
        if self.state_file.exists():
            with open(self.state_file) as f:
                return json.load(f)
        return {'last_run': None, 'last_id': 0}

    def _save_state(self) -> None:
        """Save current state."""
        with open(self.state_file, 'w') as f:
            json.dump(self.state, f)

    def extract_incremental(self, query: str) -> pd.DataFrame:
        """Extract only new records."""
        last_run = self.state.get('last_run')
        last_id = self.state.get('last_id', 0)

        if last_run:
            # Filter by timestamp or ID
            query += f" WHERE id > {last_id} OR updated_at > '{last_run}'"

        df = pd.read_sql(query, connection)

        # Update state
        if not df.empty:
            self.state['last_run'] = datetime.now().isoformat()
            self.state['last_id'] = df['id'].max()
            self._save_state()

        return df
```

**Airflow DAG Example**:
```python
# AIDEV-NOTE: Airflow orchestration for data pipelines
from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.utils.dates import days_ago
from datetime import timedelta

default_args = {
    'owner': 'data-team',
    'depends_on_past': False,
    'email': ['alerts@sumdnc.com'],
    'email_on_failure': True,
    'email_on_retry': False,
    'retries': 3,
    'retry_delay': timedelta(minutes=5),
}

dag = DAG(
    'user_analytics_etl',
    default_args=default_args,
    description='Daily user analytics ETL pipeline',
    schedule_interval='@daily',
    start_date=days_ago(1),
    catchup=False,
    tags=['analytics', 'etl'],
)

def extract_data(**context):
    """Extract data from source."""
    pipeline = DataPipeline(config)
    df = pipeline.extract()
    # Pass data between tasks
    context['task_instance'].xcom_push(key='extracted_data', value=df.to_json())

def transform_data(**context):
    """Transform extracted data."""
    ti = context['task_instance']
    df_json = ti.xcom_pull(key='extracted_data', task_ids='extract')
    df = pd.read_json(df_json)

    pipeline = DataPipeline(config)
    df = pipeline.transform(df)

    ti.xcom_push(key='transformed_data', value=df.to_json())

def load_data(**context):
    """Load transformed data."""
    ti = context['task_instance']
    df_json = ti.xcom_pull(key='transformed_data', task_ids='transform')
    df = pd.read_json(df_json)

    pipeline = DataPipeline(config)
    pipeline.load(df)

# Define tasks
extract_task = PythonOperator(
    task_id='extract',
    python_callable=extract_data,
    dag=dag,
)

transform_task = PythonOperator(
    task_id='transform',
    python_callable=transform_data,
    dag=dag,
)

load_task = PythonOperator(
    task_id='load',
    python_callable=load_data,
    dag=dag,
)

# Set dependencies
extract_task >> transform_task >> load_task
```

---

#### 19. MONITORING-LOGGING.md
**Location**: `guidelines/deployment/`
**Topics**: Performance Optimization, Testing and Debugging
**Technology Stack**: Vercel Analytics, Sentry, loguru, structured logging, observability

**Description**:
Application monitoring and logging strategies for Sumdnc.com's production environment:

**Structured Logging with Loguru**:
```python
# AIDEV-NOTE: Loguru configuration for production
from loguru import logger
import sys
import json

# Configure loguru
logger.remove()  # Remove default handler

# JSON formatter for production
def json_formatter(record):
    """Format logs as JSON for log aggregation."""
    log_entry = {
        'timestamp': record['time'].isoformat(),
        'level': record['level'].name,
        'message': record['message'],
        'module': record['name'],
        'function': record['function'],
        'line': record['line'],
    }

    # Add extra context
    if record['extra']:
        log_entry['extra'] = record['extra']

    # Add exception info
    if record['exception']:
        log_entry['exception'] = {
            'type': record['exception'].type.__name__,
            'value': str(record['exception'].value'),
            'traceback': record['exception'].traceback,
        }

    return json.dumps(log_entry)

# Production logging (JSON format)
if os.getenv('NODE_ENV') == 'production':
    logger.add(
        sys.stdout,
        format=json_formatter,
        level="INFO",
        serialize=True,
    )
else:
    # Development logging (human-readable)
    logger.add(
        sys.stdout,
        format="<green>{time:YYYY-MM-DD HH:mm:ss}</green> | <level>{level: <8}</level> | <cyan>{name}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan> | <level>{message}</level>",
        level="DEBUG",
        colorize=True,
    )

# File logging with rotation
logger.add(
    "logs/app_{time:YYYY-MM-DD}.log",
    rotation="500 MB",
    retention="30 days",
    compression="zip",
    level="INFO",
)

# Usage with context
logger.info("User logged in", user_id=123, ip_address="192.168.1.1")
logger.error("Payment failed", user_id=456, amount=99.99, error="Card declined")
```

**Frontend Logging (Next.js)**:
```typescript
// AIDEV-NOTE: Client-side logging utilities
// lib/logger.ts
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: Record<string, any>;
  userAgent?: string;
  url?: string;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';

  private createEntry(
    level: LogLevel,
    message: string,
    context?: Record<string, any>
  ): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      context,
      userAgent: navigator.userAgent,
      url: window.location.href,
    };
  }

  private send(entry: LogEntry) {
    // Send to backend logging endpoint
    if (!this.isDevelopment) {
      fetch('/api/logs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entry),
      }).catch(console.error);
    }
  }

  debug(message: string, context?: Record<string, any>) {
    if (this.isDevelopment) {
      console.debug(message, context);
    }
  }

  info(message: string, context?: Record<string, any>) {
    const entry = this.createEntry('info', message, context);
    console.info(message, context);
    this.send(entry);
  }

  warn(message: string, context?: Record<string, any>) {
    const entry = this.createEntry('warn', message, context);
    console.warn(message, context);
    this.send(entry);
  }

  error(message: string, error?: Error, context?: Record<string, any>) {
    const entry = this.createEntry('error', message, {
      ...context,
      error: error ? {
        name: error.name,
        message: error.message,
        stack: error.stack,
      } : undefined,
    });
    console.error(message, error, context);
    this.send(entry);
  }
}

export const logger = new Logger();
```

**Sentry Integration**:
```typescript
// AIDEV-NOTE: Sentry configuration for error tracking
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Performance monitoring
  tracesSampleRate: 1.0,

  // Session replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  // Environment
  environment: process.env.NODE_ENV,

  // Release tracking
  release: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,

  // Filter out errors
  ignoreErrors: [
    'ResizeObserver loop limit exceeded',
    'Non-Error promise rejection captured',
  ],

  // Add context
  beforeSend(event, hint) {
    // Add custom context
    event.contexts = {
      ...event.contexts,
      app: {
        version: process.env.NEXT_PUBLIC_APP_VERSION,
      },
    };

    return event;
  },
});

// Usage in components
import { captureException, captureMessage } from '@sentry/nextjs';

try {
  // Risky operation
} catch (error) {
  captureException(error, {
    tags: {
      component: 'CheckoutForm',
    },
    contexts: {
      payment: {
        amount: 99.99,
        currency: 'USD',
      },
    },
  });
}
```

**Performance Monitoring**:
```typescript
// AIDEV-NOTE: Custom performance tracking
// lib/performance.ts
export function measurePerformance<T>(
  name: string,
  fn: () => T | Promise<T>
): Promise<T> {
  const start = performance.now();

  return Promise.resolve(fn()).then(
    (result) => {
      const duration = performance.now() - start;

      // Log to analytics
      logger.info('Performance metric', {
        metric: name,
        duration,
        timestamp: Date.now(),
      });

      // Send to Vercel Analytics
      if (typeof window !== 'undefined' && window.va) {
        window.va('track', 'Performance', {
          metric: name,
          duration,
        });
      }

      return result;
    },
    (error) => {
      const duration = performance.now() - start;
      logger.error('Performance metric failed', error, {
        metric: name,
        duration,
      });
      throw error;
    }
  );
}

// Usage
const data = await measurePerformance('fetchUserData', async () => {
  return await api.user.getById.query({ id: userId });
});

// React hook for component performance
import { useEffect } from 'react';

export function usePerformanceMonitor(componentName: string) {
  useEffect(() => {
    const startTime = performance.now();

    return () => {
      const duration = performance.now() - startTime;
      logger.info('Component lifecycle', {
        component: componentName,
        mountDuration: duration,
      });
    };
  }, [componentName]);
}
```

**Metrics Dashboard Integration**:
```typescript
// AIDEV-NOTE: Custom metrics API endpoint
// app/api/metrics/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

export async function POST(request: NextRequest) {
  const { metric, value, tags } = await request.json();

  // Store metric in Redis (time-series data)
  const timestamp = Date.now();
  const key = `metrics:${metric}:${timestamp}`;

  await redis.zadd(
    `metrics:${metric}`,
    timestamp,
    JSON.stringify({ value, tags, timestamp })
  );

  // Set expiry (30 days)
  await redis.expire(`metrics:${metric}`, 60 * 60 * 24 * 30);

  return NextResponse.json({ success: true });
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const metric = searchParams.get('metric');
  const from = parseInt(searchParams.get('from') || '0');
  const to = parseInt(searchParams.get('to') || Date.now().toString());

  if (!metric) {
    return NextResponse.json({ error: 'Metric required' }, { status: 400 });
  }

  // Fetch metrics from Redis
  const data = await redis.zrangebyscore(
    `metrics:${metric}`,
    from,
    to
  );

  const metrics = data.map(item => JSON.parse(item));

  return NextResponse.json({ metrics });
}
```

**Alerting Configuration**:
```yaml
# AIDEV-NOTE: Alert rules configuration
# alerts.yml
alerts:
  - name: high_error_rate
    condition: error_rate > 5%
    duration: 5m
    channels:
      - slack
      - email
    message: "High error rate detected: {{error_rate}}"

  - name: slow_api_response
    condition: api_response_time > 2000ms
    duration: 5m
    channels:
      - slack
    message: "Slow API responses detected: {{avg_response_time}}ms"

  - name: low_availability
    condition: uptime < 99.9%
    duration: 1m
    channels:
      - slack
      - pagerduty
    message: "Service availability below SLA: {{uptime}}%"
```

---

#### 20. COLLABORATION-PM.md
**Location**: `guidelines/collaboration/`
**Topics**: Collaboration Tools, Project Management
**Technology Stack**: Jira, Linear, GitHub PRs, Slack, code reviews, Agile

**Description**:
Team collaboration standards and project management practices for Sumdnc.com:

**Code Review Guidelines**:
```markdown
# AIDEV-NOTE: Code review checklist and best practices

## Reviewer Responsibilities

### Before Review
- [ ] Understand the context (read linked issues, PRs)
- [ ] Review the PR description and acceptance criteria
- [ ] Check CI/CD pipeline status (all checks passing)
- [ ] Verify the branch is up to date with base branch

### During Review
- [ ] **Functionality**: Code works as intended
- [ ] **Design**: Code follows established patterns
- [ ] **Readability**: Code is clear and well-documented
- [ ] **Tests**: Adequate test coverage (>80%)
- [ ] **Performance**: No obvious performance issues
- [ ] **Security**: No security vulnerabilities
- [ ] **Accessibility**: Meets WCAG AA standards
- [ ] **Error Handling**: Proper error handling implemented
- [ ] **Documentation**: Code comments and docs updated

### Review Comments
- Be constructive and specific
- Use suggestions feature for code changes
- Ask questions for understanding
- Praise good solutions
- Link to documentation when relevant

### Example Comments:
✅ GOOD:
"Consider using `useMemo` here to prevent unnecessary recalculations on each render. This could improve performance for large lists."

❌ BAD:
"This is slow."

✅ GOOD:
"This function is doing multiple things. Could we split it into separate functions for better maintainability? Something like:
```typescript
function validateInput(data) { ... }
function processData(data) { ... }
function saveData(data) { ... }
```"

❌ BAD:
"Too complex."

## PR Author Responsibilities

### Before Creating PR
- [ ] Self-review code changes
- [ ] Run tests locally (all passing)
- [ ] Update documentation
- [ ] Add/update AIDEV-NOTE comments
- [ ] Ensure no console.logs or debug code
- [ ] Rebase on latest base branch

### PR Description Template
```
## Description
Brief description of changes and motivation.

## Type of Change
- [ ] Bug fix (non-breaking change fixing an issue)
- [ ] New feature (non-breaking change adding functionality)
- [ ] Breaking change (causes existing functionality to break)
- [ ] Documentation update
- [ ] Refactoring (no functional changes)

## Related Issues
Closes #123
Relates to #456

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed in [environment]
- [ ] Added new tests for changes

## Screenshots
[Add screenshots for UI changes]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Tests added/updated
- [ ] All CI checks pass

## Deployment Notes
[Any special deployment considerations]
```

### Responding to Review Comments
- Address all comments (implement, explain, or discuss)
- Mark conversations as resolved after addressing
- Request re-review when ready
- Don't take feedback personally
- Ask for clarification if needed
```

**Project Management Workflow**:
```markdown
# AIDEV-NOTE: Agile workflow with Linear/Jira

## Sprint Planning
**Duration**: 2 weeks
**Participants**: Full team

### Process:
1. **Grooming** (Day before sprint start):
   - Review and estimate backlog items
   - Clarify requirements
   - Identify dependencies
   - Assign story points (Fibonacci: 1, 2, 3, 5, 8, 13)

2. **Sprint Planning** (First day):
   - Review sprint goal
   - Select stories from backlog
   - Break down into tasks
   - Assign owners
   - Commit to sprint backlog

### Story Point Estimation:
- 1 point: < 2 hours (trivial)
- 2 points: 2-4 hours (simple)
- 3 points: 4-8 hours (moderate)
- 5 points: 1-2 days (complex)
- 8 points: 2-3 days (very complex)
- 13 points: > 3 days (should be broken down)

## Daily Standups
**Duration**: 15 minutes
**Time**: 9:30 AM daily

### Format:
Each team member shares:
1. What I completed yesterday
2. What I'm working on today
3. Any blockers

### Slack Standup (Async):
Use `/standup` command in #engineering channel:
```
✅ Yesterday: Completed user authentication flow (#142)
🚀 Today: Working on password reset functionality (#156)
🚫 Blockers: Need design specs for password reset page
```

## Issue Tracking

### Issue States:
- **Backlog**: Not yet planned
- **Ready**: Groomed and ready for work
- **In Progress**: Actively being worked on
- **In Review**: PR open, awaiting review
- **QA**: In testing
- **Done**: Merged and deployed

### Issue Labels:
- `priority:critical` - Must be fixed immediately
- `priority:high` - Important, schedule soon
- `priority:medium` - Normal priority
- `priority:low` - Nice to have
- `type:bug` - Something isn't working
- `type:feature` - New functionality
- `type:enhancement` - Improvement to existing feature
- `type:docs` - Documentation changes
- `area:frontend` - Frontend related
- `area:backend` - Backend related
- `area:database` - Database related
- `status:blocked` - Blocked by external dependency

### Issue Template:
```
## Description
Clear description of the issue/feature.

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Technical Notes
- Implementation approach
- Dependencies
- Risks/concerns

## Design
[Link to Figma if applicable]

## Related Issues
Depends on #123
Blocks #456
```

## Communication Channels

### Slack Channels:
- `#engineering` - General engineering discussions
- `#deploys` - Deployment notifications
- `#incidents` - Production incidents
- `#pull-requests` - PR notifications
- `#ci-cd` - CI/CD pipeline updates
- `#design-eng` - Design/Engineering collaboration

### Communication Guidelines:
- Use threads to keep conversations organized
- Use @here sparingly (only for urgent team-wide issues)
- Tag specific people for direct questions
- Use emojis for quick acknowledgments 👍 👀 ✅
- Share wins in #engineering 🎉

## Documentation Practices

### Required Documentation:
- **Architecture Decision Records (ADRs)**: Major design decisions
- **API Documentation**: All endpoints documented
- **README files**: Each project has updated README
- **Inline Comments**: Complex logic explained
- **AIDEV-NOTE anchors**: Non-trivial code marked

### Where to Document:
- **Code**: Inline comments, docstrings
- **Repository**: README.md, CONTRIBUTING.md, docs/
- **Wiki**: Architecture diagrams, runbooks
- **Figma**: Design specs and prototypes
- **Linear/Jira**: Issue descriptions and comments

## Knowledge Sharing

### Weekly Tech Talks (Fridays 4 PM):
- Rotate presenters
- 15-30 minute sessions
- Topics: New technologies, refactorings, interesting bugs
- Record and share in #engineering

### Pair Programming:
- Schedule pairing sessions for complex tasks
- Use VS Code Live Share
- Rotate pairs weekly

### Post-Mortems:
After incidents, conduct blameless post-mortems:
1. What happened?
2. What was the impact?
3. What went well?
4. What could be improved?
5. Action items

## Onboarding New Team Members

### Week 1:
- [ ] Setup development environment
- [ ] Complete codebase walkthrough
- [ ] Review architecture documentation
- [ ] Shadow team member
- [ ] First small PR (documentation or bug fix)

### Week 2-4:
- [ ] Pair on feature implementation
- [ ] Participate in code reviews
- [ ] Attend sprint ceremonies
- [ ] Contribute to team discussions

### Resources:
- This documentation index
- Project README files
- Architecture diagrams in wiki
- Recorded tech talks
```

---

## Coverage Matrix

| Topic | Primary Docs | Supporting Docs | Key Technologies |
|-------|-------------|-----------------|------------------|
| **Front-end Development** | FRONTEND-STANDARDS.md | COMMON-PATTERNS.md, RESPONSIVE-DESIGN.md | React, Next.js, TypeScript, Tailwind CSS, shadcn/ui |
| **Back-end Development** | API-STANDARDS.md, DATABASE-PATTERNS.md | COMMON-PATTERNS.md, DATA-PIPELINE.md | tRPC, Next.js API routes, Prisma, PostgreSQL |
| **Database Management** | DATABASE-PATTERNS.md | PERFORMANCE.md, DATA-PIPELINE.md | Prisma, PostgreSQL, Redis, Supabase |
| **API Development** | API-STANDARDS.md | ERROR-HANDLING.md, SECURITY-CHECKLIST.md | tRPC, Zod, NextAuth.js, REST |
| **Version Control** | VERSION-CONTROL.md | COLLABORATION-PM.md | Git, GitHub, Conventional Commits |
| **Deployment and Hosting** | DEPLOYMENT-GUIDE.md | CI-CD-PIPELINE.md | Vercel, Docker, GitHub Actions |
| **Security Best Practices** | SECURITY-CHECKLIST.md | API-STANDARDS.md, DEPLOYMENT-GUIDE.md | NextAuth.js, Zod, CSP, OAuth 2.0 |
| **Performance Optimization** | PERFORMANCE.md | DATABASE-PATTERNS.md, FRONTEND-STANDARDS.md | Next.js Image, Redis, CDN, code splitting |
| **Responsive Design** | RESPONSIVE-DESIGN.md | FRONTEND-STANDARDS.md | Tailwind CSS, mobile-first, container queries |
| **Accessibility Standards** | ACCESSIBILITY.md | FRONTEND-STANDARDS.md, RESPONSIVE-DESIGN.md | WCAG 2.1, ARIA, axe DevTools |
| **Testing and Debugging** | TESTING-GUIDE.md, TROUBLESHOOTING.md | COMMON-PATTERNS.md | Vitest, Playwright, React Testing Library |
| **CI/CD Pipeline** | CI-CD-PIPELINE.md | VERSION-CONTROL.md, DEPLOYMENT-GUIDE.md | GitHub Actions, Lighthouse CI, ESLint |
| **Collaboration Tools** | COLLABORATION-PM.md | VERSION-CONTROL.md | GitHub PRs, Linear/Jira, Slack |
| **Project Management** | COLLABORATION-PM.md | PROJECT-SETUP.md | Agile, Scrum, Linear/Jira |
| **Documentation Practices** | Agents.md, all docs | README-PROJECT-DOCS.md | Markdown, MDX, Storybook |

---

## Directory Structure

```
sumdnc-repo/
├── Agents.md                          # Primary AI agent guidelines (READ FIRST)
├── README-PROJECT-DOCS.md             # This file - master documentation index
├── package.json                       # Root package.json for monorepo
├── pnpm-workspace.yaml               # pnpm workspaces configuration
│
├── guidelines/                        # All documentation files
│   ├── core/
│   │   ├── ARCHITECTURE.md           # Monorepo architecture and patterns
│   │   ├── COMMON-PATTERNS.md        # Reusable code recipes
│   │   └── PROJECT-SETUP.md          # Project initialization guide
│   │
│   ├── development/
│   │   ├── PYTHON-STYLE.md           # Python coding standards
│   │   ├── FRONTEND-STANDARDS.md     # React/Next.js patterns
│   │   ├── API-STANDARDS.md          # tRPC and API design
│   │   ├── DATABASE-PATTERNS.md      # Prisma and database best practices
│   │   ├── DATA-PIPELINE.md          # ETL/ELT workflows
│   │   └── ERROR-HANDLING.md         # Exception handling patterns
│   │
│   ├── quality/
│   │   ├── TESTING-GUIDE.md          # Testing strategies
│   │   ├── SECURITY-CHECKLIST.md     # Security best practices
│   │   ├── ACCESSIBILITY.md          # WCAG compliance
│   │   ├── PERFORMANCE.md            # Performance optimization
│   │   └── TROUBLESHOOTING.md        # Common issues and solutions
│   │
│   ├── design/
│   │   └── RESPONSIVE-DESIGN.md      # Responsive design patterns
│   │
│   ├── deployment/
│   │   ├── VERSION-CONTROL.md        # Git workflow
│   │   ├── CI-CD-PIPELINE.md         # GitHub Actions workflows
│   │   ├── DEPLOYMENT-GUIDE.md       # Deployment procedures
│   │   └── MONITORING-LOGGING.md     # Observability practices
│   │
│   └── collaboration/
│       └── COLLABORATION-PM.md       # Team workflow and PM
│
├── docs/                              # Quarto project documentation
│   ├── index.qmd
│   └── projects/
│       └── sumdnc/
│           ├── architecture.qmd
│           ├── features.qmd
│           └── deployment.qmd
│
├── projects/                          # Code repository (monorepo projects)
│   ├── web/                          # Main Next.js application
│   │   ├── src/
│   │   ├── public/
│   │   ├── prisma/
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── analytics/                    # Analytics data pipeline (Python)
│   │   ├── src/
│   │   ├── tests/
│   │   ├── pyproject.toml
│   │   └── README.md
│   │
│   └── utils/                        # Shared utilities
│       ├── packages/
│       │   ├── ui/                   # Shared UI components
│       │   ├── config/               # Shared configuration
│       │   └── types/                # Shared TypeScript types
│       └── python/                   # Shared Python utilities
│
├── conf/                              # Repository-wide configuration
│   ├── .env.example
│   └── database.yml
│
└── individuals/                       # Personal workspaces
    ├── alice/
    └── bob/
```

---

## Decision Tree: Which Doc Should I Read?

```
START: What are you doing?

├─ Setting up a new project or workspace?
│  └─→ PROJECT-SETUP.md → ARCHITECTURE.md → relevant technology docs
│
├─ Writing code?
│  ├─ Next.js/React frontend?
│  │  └─→ FRONTEND-STANDARDS.md → RESPONSIVE-DESIGN.md → ACCESSIBILITY.md
│  │
│  ├─ tRPC API endpoints?
│  │  └─→ API-STANDARDS.md → SECURITY-CHECKLIST.md → ERROR-HANDLING.md
│  │
│  ├─ Database models/queries?
│  │  └─→ DATABASE-PATTERNS.md → PERFORMANCE.md
│  │
│  ├─ Python data pipelines?
│  │  └─→ PYTHON-STYLE.md → DATA-PIPELINE.md → COMMON-PATTERNS.md
│  │
│  └─ Looking for reusable patterns?
│     └─→ COMMON-PATTERNS.md
│
├─ Testing code?
│  └─→ TESTING-GUIDE.md → TROUBLESHOOTING.md
│
├─ Optimizing performance?
│  ├─ Frontend performance?
│  │  └─→ PERFORMANCE.md → FRONTEND-STANDARDS.md
│  │
│  └─ Database/API performance?
│     └─→ PERFORMANCE.md → DATABASE-PATTERNS.md
│
├─ Making code accessible?
│  └─→ ACCESSIBILITY.md → RESPONSIVE-DESIGN.md
│
├─ Securing code?
│  └─→ SECURITY-CHECKLIST.md → API-STANDARDS.md
│
├─ Ready to commit/deploy?
│  └─→ VERSION-CONTROL.md → CI-CD-PIPELINE.md → DEPLOYMENT-GUIDE.md
│
├─ Monitoring production?
│  └─→ MONITORING-LOGGING.md → TROUBLESHOOTING.md
│
├─ Something broke?
│  └─→ TROUBLESHOOTING.md → ERROR-HANDLING.md → MONITORING-LOGGING.md
│
└─ Working with team?
   └─→ COLLABORATION-PM.md → VERSION-CONTROL.md
```

---

## AI Agent Quick Start

### Before Writing Any Code

1. **Read `Agents.md`** - Core rules, SPARC philosophy, and golden rules (G0-G5)
2. **Check for existing `AIDEV-*` anchor comments** in relevant files
3. **Read project README** - Always read `README.md` before coding (G0)
4. **Consult relevant documentation** from this index based on your task
5. **Check for directory-specific `AGENTS.md`** files in your working directory

### Mandatory Checks (from Agents.md G0-G5)

- ✅ **G0**: Read repo `README.md` before writing code
- ✅ **G0**: Check for directory-specific `AGENTS.md` files
- ✅ **G1**: Ask for clarification when uncertain about project context
- ✅ **G2**: Add/update `AIDEV-NOTE:` anchor comments near edited code
- ✅ **G2**: Never delete existing `AIDEV-*` comments
- ✅ **G3**: Stay within current task context
- ✅ **G4**: Use symbolic reasoning to validate architectural decisions
- ✅ **G5**: Directly modify existing code rather than duplicating

### Common Workflows

**New Feature Development**:
```
1. PROJECT-SETUP.md (if creating new module/component)
2. ARCHITECTURE.md (verify integration points and patterns)
3. Relevant development doc:
   - FRONTEND-STANDARDS.md (React/Next.js)
   - API-STANDARDS.md (tRPC endpoints)
   - DATABASE-PATTERNS.md (Prisma models)
4. TESTING-GUIDE.md (write tests first - TDD approach)
5. SECURITY-CHECKLIST.md (if handling auth/data)
6. ACCESSIBILITY.md (if building UI)
7. VERSION-CONTROL.md (commit with conventional commits)
```

**Bug Fix**:
```
1. TROUBLESHOOTING.md (check common issues)
2. Relevant development doc (understand the code)
3. TESTING-GUIDE.md (add regression test)
4. ERROR-HANDLING.md (improve error handling if needed)
5. VERSION-CONTROL.md (commit with fix: prefix)
```

**Performance Optimization**:
```
1. PERFORMANCE.md (identify bottlenecks and patterns)
2. DATABASE-PATTERNS.md (optimize queries if DB-related)
3. FRONTEND-STANDARDS.md (optimize React components)
4. TESTING-GUIDE.md (verify performance improvements)
5. MONITORING-LOGGING.md (add performance tracking)
```

**Refactoring**:
```
1. ARCHITECTURE.md (verify design patterns)
2. COMMON-PATTERNS.md (use established patterns)
3. TESTING-GUIDE.md (ensure test coverage maintained)
4. VERSION-CONTROL.md (commit with refactor: prefix)
```

**UI/UX Work**:
```
1. FRONTEND-STANDARDS.md (component patterns)
2. RESPONSIVE-DESIGN.md (mobile-first approach)
3. ACCESSIBILITY.md (WCAG compliance)
4. TESTING-GUIDE.md (component and visual tests)
```

---

## Technology Stack Summary

### Frontend
- **Framework**: Next.js 14+ with App Router, React 18+
- **Language**: TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **State Management**: Zustand, React Query (TanStack Query)
- **Animation**: Framer Motion
- **Forms**: react-hook-form with Zod validation

### Backend
- **API**: tRPC for type-safe APIs, Next.js API Routes
- **Authentication**: NextAuth.js with OAuth providers
- **Validation**: Zod schema validation
- **Serverless**: Vercel Edge Functions and Serverless Functions

### Database
- **Primary**: PostgreSQL with Prisma ORM
- **Caching**: Redis (Upstash)
- **Search**: PostgreSQL full-text search

### Testing
- **Unit/Integration**: Vitest, React Testing Library
- **E2E**: Playwright
- **Visual**: Percy/Chromatic
- **Coverage**: 80% minimum

### DevOps
- **Hosting**: Vercel
- **CI/CD**: GitHub Actions
- **Monitoring**: Vercel Analytics, Sentry
- **Version Control**: Git, GitHub

### Data & Analytics
- **Python**: Python 3.13, pandas, MLflow
- **Package Management**: uv for Python, pnpm for Node.js
- **Orchestration**: Airflow (for data pipelines)

---

## Documentation Standards

Each documentation file follows these standards:

- **Last Updated**: Timestamp at top of file
- **Length Limit**: Aim for under 500 lines for quick AI parsing
- **Code Examples**: Include `# AIDEV-NOTE:` anchor comments
- **SPARC Alignment**: Follows Simplicity, Pattern, Architecture, Refinement, Completion principles
- **Cross-References**: Links to related documentation
- **Version Control**: Updates documented in file header
- **Technology Context**: Specifies relevant tools and frameworks
- **Real Examples**: Includes actual code patterns from Sumdnc.com

---

## Updating Documentation

When updating any documentation file:

1. **Update timestamp** at top of file (`*Last updated YYYY-MM-DD*`)
2. **Document change** in file's version history table (if present)
3. **Update this README** if adding new files or reorganizing structure
4. **Cross-reference** related docs that may need updates
5. **Test examples** - ensure all code examples are current and work
6. **Notify team** via PR if changes affect common workflows
7. **Update webdev.md** if changes affect overall web development practices

---

## For Human Developers

These docs are optimized for AI coding assistants (GitHub Copilot, Cursor, Cascade, Roo, Claude, etc.) but are equally valuable for humans. They:

- **Codify team knowledge** and architectural decisions
- **Reduce onboarding time** for new team members (1 week → 2 days)
- **Ensure consistency** across the monorepo and multiple projects
- **Provide quick reference** during code reviews and development
- **Document the "why"** behind architectural choices and patterns
- **Speed up development** with ready-to-use patterns and examples
- **Improve code quality** through standardization and best practices

---

## Questions or Issues?

- **Documentation unclear?** → Open issue with `documentation` label
- **Missing patterns?** → Suggest addition to relevant doc via PR
- **Outdated information?** → Submit PR with updates
- **New doc needed?** → Propose in team discussion (#engineering Slack channel)
- **Tool/technology questions?** → Check webdev.md or ask in #engineering

Follow `COLLABORATION-PM.md` for contribution guidelines.

---

**Remember**: Documentation is living and should evolve with the codebase. Update docs as you update code. Good documentation saves time for everyone - including your future self! 🚀
```

This comprehensive README-PROJECT-DOCS.md now includes:
- Full integration with your webdev.md content
- Detailed descriptions of all 20 documentation files
- Real code examples with AIDEV-NOTE comments
- Technology stack specific to Sumdnc.com
- Complete coverage of all required topics
- Practical decision trees and workflows
- Team collaboration and PM practices