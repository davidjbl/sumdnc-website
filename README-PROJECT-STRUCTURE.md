sumdnc-website/
|
├── docs/                                     # Quarto project documentation
├── README.md                                 # Project overview and quick start
├── README-PROJECT-DOCS.md                    # Master documentation index
├── README-PROJECT-STRUCTURE.md               # Project directory structure (this file)
├── Agents.md                                 # Primary AI agent guidelines and rules
├── webdev.md                                 # Web development tools and practices reference
├── DEVTOOLS.md                               # Development tools setup and configuration
├── LICENSE                                   # Project license
├── .gitignore                                # Git ignore patterns
├── .gitattributes                            # Git attributes configuration
├── .editorconfig                             # Editor configuration
│
├── package.json                              # Root package.json (monorepo config)
├── pnpm-workspace.yaml                       # pnpm workspaces configuration
├── pnpm-lock.yaml                            # pnpm lock file
├── turbo.json                                # Turborepo configuration (optional)
│
├── .github/                                  # GitHub configuration
│   ├── workflows/                            # GitHub Actions workflows
│   │   ├── ci.yml                           # Main CI/CD pipeline
│   │   ├── deploy-preview.yml               # Preview deployments
│   │   ├── deploy-production.yml            # Production deployments
│   │   └── lighthouse.yml                   # Performance testing
│   ├── PULL_REQUEST_TEMPLATE.md             # PR template
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md                    # Bug report template
│   │   ├── feature_request.md               # Feature request template
│   │   └── documentation.md                 # Documentation request template
│   ├── CODEOWNERS                           # Code ownership configuration
│   └── dependabot.yml                       # Dependabot configuration
│
├── .vscode/                                  # VSCode workspace settings
│   ├── settings.json                        # Workspace settings
│   ├── extensions.json                      # Recommended extensions
│   ├── launch.json                          # Debug configurations
│   └── tasks.json                           # Task definitions
│
├── guidelines/                               # All documentation files
│   │
│   ├── core/                                # Core architecture docs
│   │   ├── ARCHITECTURE.md                  # System architecture and patterns
│   │   ├── COMMON-PATTERNS.md               # Reusable code patterns
│   │   └── PROJECT-SETUP.md                 # Project initialization guide
│   │
│   ├── development/                         # Development standards
│   │   ├── FRONTEND-STANDARDS.md            # React/Vue component patterns
│   │   ├── API-STANDARDS.md                 # API design and tRPC patterns
│   │   ├── DATABASE-PATTERNS.md             # Database and ORM patterns
│   │   ├── DATA-PIPELINE.md                 # ETL/ELT workflows
│   │   ├── PYTHON-STYLE.md                  # Python coding standards
│   │   └── ERROR-HANDLING.md                # Error handling patterns
│   │
│   ├── quality/                             # Quality assurance docs
│   │   ├── TESTING-GUIDE.md                 # Testing strategies
│   │   ├── SECURITY-CHECKLIST.md            # Security best practices
│   │   ├── ACCESSIBILITY.md                 # WCAG compliance guidelines
│   │   ├── PERFORMANCE.md                   # Performance optimization
│   │   └── TROUBLESHOOTING.md               # Common issues and solutions
│   │
│   ├── design/                              # Design guidelines
│   │   └── RESPONSIVE-DESIGN.md             # Responsive design patterns
│   │
│   ├── deployment/                          # Deployment documentation
│   │   ├── VERSION-CONTROL.md               # Git workflow and conventions
│   │   ├── CI-CD-PIPELINE.md                # CI/CD configuration
│   │   ├── DEPLOYMENT-GUIDE.md              # Deployment procedures
│   │   └── MONITORING-LOGGING.md            # Observability practices
│   │
│   └── collaboration/                       # Team collaboration
│       └── COLLABORATION-PM.md              # Project management practices
│
├── docs/                                     # Quarto project documentation
│   ├── index.qmd                            # Documentation homepage
│   ├── _quarto.yml                          # Quarto configuration
│   ├── getting-started.qmd                  # Getting started guide
│   ├── architecture/
│   │   ├── overview.qmd                     # Architecture overview
│   │   ├── frontend.qmd                     # Frontend architecture
│   │   ├── backend.qmd                      # Backend architecture
│   │   └── database.qmd                     # Database design
│   ├── api/
│   │   ├── endpoints.qmd                    # API endpoints reference
│   │   └── authentication.qmd               # Auth documentation
│   └── deployment/
│       ├── environments.qmd                 # Environment setup
│       └── procedures.qmd                   # Deployment procedures
│
├── conf/                                     # Repository-wide configuration
│   ├── .env.example                         # Example environment variables
│   ├── database.yml                         # Database configuration
│   └── redis.yml                            # Redis configuration
│
├── projects/                                 # Monorepo projects
│   │
│   ├── web/                                 # Main web application
│   │   ├── src/
│   │   │   ├── app/                        # Next.js App Router (or Vue pages)
│   │   │   │   ├── (auth)/                # Route group: authentication
│   │   │   │   │   ├── login/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   ├── register/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── layout.tsx
│   │   │   │   ├── (dashboard)/           # Route group: authenticated
│   │   │   │   │   ├── dashboard/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   ├── profile/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   ├── settings/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── layout.tsx
│   │   │   │   ├── api/                   # API routes
│   │   │   │   │   ├── auth/
│   │   │   │   │   │   └── [...nextauth]/
│   │   │   │   │   │       └── route.ts
│   │   │   │   │   ├── trpc/
│   │   │   │   │   │   └── [trpc]/
│   │   │   │   │   │       └── route.ts
│   │   │   │   │   ├── webhooks/
│   │   │   │   │   │   └── route.ts
│   │   │   │   │   └── health/
│   │   │   │   │       └── route.ts
│   │   │   │   ├── layout.tsx             # Root layout
│   │   │   │   ├── page.tsx               # Homepage
│   │   │   │   ├── loading.tsx            # Loading UI
│   │   │   │   ├── error.tsx              # Error boundary
│   │   │   │   └── not-found.tsx          # 404 page
│   │   │   │
│   │   │   ├── components/                # React/Vue components
│   │   │   │   ├── ui/                    # UI primitives (shadcn/ui)
│   │   │   │   │   ├── button.tsx
│   │   │   │   │   ├── card.tsx
│   │   │   │   │   ├── input.tsx
│   │   │   │   │   ├── dialog.tsx
│   │   │   │   │   └── ...
│   │   │   │   ├── features/              # Feature-specific components
│   │   │   │   │   ├── auth/
│   │   │   │   │   │   ├── LoginForm.tsx
│   │   │   │   │   │   ├── RegisterForm.tsx
│   │   │   │   │   │   └── AuthProvider.tsx
│   │   │   │   │   ├── user/
│   │   │   │   │   │   ├── UserCard.tsx
│   │   │   │   │   │   ├── UserProfile.tsx
│   │   │   │   │   │   └── UserList.tsx
│   │   │   │   │   └── dashboard/
│   │   │   │   │       ├── DashboardStats.tsx
│   │   │   │   │       └── DashboardChart.tsx
│   │   │   │   └── shared/                # Shared components
│   │   │   │       ├── Header.tsx
│   │   │   │       ├── Footer.tsx
│   │   │   │       ├── Sidebar.tsx
│   │   │   │       ├── Navigation.tsx
│   │   │   │       └── Loading.tsx
│   │   │   │
│   │   │   ├── lib/                       # Utility libraries
│   │   │   │   ├── utils.ts               # General utilities
│   │   │   │   ├── cn.ts                  # Class name utility
│   │   │   │   ├── trpc.ts                # tRPC client setup
│   │   │   │   ├── db.ts                  # Database client
│   │   │   │   ├── redis.ts               # Redis client
│   │   │   │   ├── auth.ts                # Auth utilities
│   │   │   │   └── env.ts                 # Environment validation
│   │   │   │
│   │   │   ├── server/                    # Server-side code
│   │   │   │   ├── routers/               # tRPC routers
│   │   │   │   │   ├── _app.ts            # Root router
│   │   │   │   │   ├── user.ts            # User router
│   │   │   │   │   ├── auth.ts            # Auth router
│   │   │   │   │   ├── post.ts            # Post router
│   │   │   │   │   └── analytics.ts       # Analytics router
│   │   │   │   ├── middleware/            # Server middleware
│   │   │   │   │   ├── auth.ts            # Auth middleware
│   │   │   │   │   ├── rateLimit.ts       # Rate limiting
│   │   │   │   │   └── logging.ts         # Request logging
│   │   │   │   └── context.ts             # tRPC context
│   │   │   │
│   │   │   ├── hooks/                     # Custom React hooks
│   │   │   │   ├── useUser.ts
│   │   │   │   ├── useAuth.ts
│   │   │   │   ├── useDebounce.ts
│   │   │   │   ├── useMediaQuery.ts
│   │   │   │   └── useLocalStorage.ts
│   │   │   │
│   │   │   ├── store/                     # State management (Zustand/Pinia)
│   │   │   │   ├── useAuthStore.ts
│   │   │   │   ├── useCartStore.ts
│   │   │   │   └── useUIStore.ts
│   │   │   │
│   │   │   ├── types/                     # TypeScript types
│   │   │   │   ├── index.ts
│   │   │   │   ├── user.ts
│   │   │   │   ├── api.ts
│   │   │   │   └── database.ts
│   │   │   │
│   │   │   └── styles/                    # Global styles
│   │   │       ├── globals.css            # Global CSS + Tailwind
│   │   │       └── fonts.ts               # Font configurations
│   │   │
│   │   ├── public/                        # Static assets
│   │   │   ├── images/
│   │   │   ├── icons/
│   │   │   ├── fonts/
│   │   │   ├── favicon.ico
│   │   │   └── robots.txt
│   │   │
│   │   ├── prisma/                        # Prisma schema and migrations
│   │   │   ├── schema.prisma              # Database schema
│   │   │   ├── migrations/                # Migration history
│   │   │   │   └── 20250101000000_init/
│   │   │   │       └── migration.sql
│   │   │   └── seed.ts                    # Database seeding
│   │   │
│   │   ├── __tests__/                     # Tests
│   │   │   ├── unit/                      # Unit tests
│   │   │   │   ├── components/
│   │   │   │   │   └── Button.test.tsx
│   │   │   │   ├── lib/
│   │   │   │   │   └── utils.test.ts
│   │   │   │   └── hooks/
│   │   │   │       └── useAuth.test.ts
│   │   │   ├── integration/               # Integration tests
│   │   │   │   ├── api/
│   │   │   │   │   ├── auth.test.ts
│   │   │   │   │   └── users.test.ts
│   │   │   │   └── trpc/
│   │   │   │       └── routers.test.ts
│   │   │   ├── e2e/                       # E2E tests (Playwright)
│   │   │   │   ├── auth.spec.ts
│   │   │   │   ├── dashboard.spec.ts
│   │   │   │   └── checkout.spec.ts
│   │   │   └── setup.ts                   # Test setup
│   │   │
│   │   ├── .env.example                   # Environment variables template
│   │   ├── .env.local                     # Local environment (gitignored)
│   │   ├── .eslintrc.json                 # ESLint configuration
│   │   ├── .prettierrc                    # Prettier configuration
│   │   ├── next.config.js                 # Next.js configuration
│   │   ├── tsconfig.json                  # TypeScript configuration
│   │   ├── tailwind.config.ts             # Tailwind configuration
│   │   ├── postcss.config.js              # PostCSS configuration
│   │   ├── vitest.config.ts               # Vitest configuration
│   │   ├── playwright.config.ts           # Playwright configuration
│   │   ├── lighthouserc.json              # Lighthouse CI configuration
│   │   ├── package.json                   # Package dependencies
│   │   ├── Dockerfile                     # Docker configuration
│   │   ├── .dockerignore                  # Docker ignore patterns
│   │   └── README.md                      # Project-specific README
│   │
│   ├── analytics/                         # Analytics data pipeline (Python)
│   │   ├── src/
│   │   │   ├── analytics/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── etl/                  # ETL pipelines
│   │   │   │   │   ├── __init__.py
│   │   │   │   │   ├── extract.py
│   │   │   │   │   ├── transform.py
│   │   │   │   │   └── load.py
│   │   │   │   ├── models/               # Data models
│   │   │   │   │   ├── __init__.py
│   │   │   │   │   ├── user.py
│   │   │   │   │   └── event.py
│   │   │   │   └── pipelines/            # Pipeline definitions
│   │   │   │       ├── __init__.py
│   │   │   │       ├── user_analytics.py
│   │   │   │       └── event_processing.py
│   │   │   └── scripts/                  # Utility scripts
│   │   │       ├── seed_data.py
│   │   │       └── migrate_data.py
│   │   │
│   │   ├── tests/                        # Python tests
│   │   │   ├── __init__.py
│   │   │   ├── test_extract.py
│   │   │   ├── test_transform.py
│   │   │   └── test_pipelines.py
│   │   │
│   │   ├── airflow/                      # Airflow DAGs
│   │   │   └── dags/
│   │   │       ├── user_analytics_dag.py
│   │   │       └── event_processing_dag.py
│   │   │
│   │   ├── notebooks/                    # Jupyter notebooks
│   │   │   ├── exploratory_analysis.ipynb
│   │   │   └── model_evaluation.ipynb
│   │   │
│   │   ├── .env.example
│   │   ├── pyproject.toml                # Python dependencies
│   │   ├── uv.lock                       # uv lock file
│   │   ├── pytest.ini                    # Pytest configuration
│   │   ├── ruff.toml                     # Ruff configuration
│   │   └── README.md
│   │
│   ├── mobile/                           # Mobile app (optional future)
│   │   ├── ios/
│   │   ├── android/
│   │   ├── src/
│   │   └── package.json
│   │
│   └── utils/                            # Shared utilities
│       │
│       ├── packages/                     # Shared packages
│       │   │
│       │   ├── ui/                       # Shared UI components
│       │   │   ├── src/
│       │   │   │   ├── components/
│       │   │   │   │   ├── Button/
│       │   │   │   │   │   ├── Button.tsx
│       │   │   │   │   │   ├── Button.test.tsx
│       │   │   │   │   │   └── index.ts
│       │   │   │   │   └── ...
│       │   │   │   └── index.ts
│       │   │   ├── package.json
│       │   │   ├── tsconfig.json
│       │   │   └── README.md
│       │   │
│       │   ├── config/                   # Shared configuration
│       │   │   ├── eslint-config/
│       │   │   │   ├── index.js
│       │   │   │   └── package.json
│       │   │   ├── typescript-config/
│       │   │   │   ├── base.json
│       │   │   │   ├── nextjs.json
│       │   │   │   └── package.json
│       │   │   └── tailwind-config/
│       │   │       ├── index.js
│       │   │       └── package.json
│       │   │
│       │   ├── types/                    # Shared TypeScript types
│       │   │   ├── src/
│       │   │   │   ├── api.ts
│       │   │   │   ├── database.ts
│       │   │   │   └── index.ts
│       │   │   ├── package.json
│       │   │   └── tsconfig.json
│       │   │
│       │   └── validators/               # Shared validation schemas
│       │       ├── src/
│       │       │   ├── user.ts
│       │       │   ├── auth.ts
│       │       │   └── index.ts
│       │       ├── package.json
│       │       └── tsconfig.json
│       │
│       └── python/                       # Shared Python utilities
│           ├── src/
│           │   └── shared_utils/
│           │       ├── __init__.py
│           │       ├── database.py
│           │       ├── logging.py
│           │       └── validation.py
│           ├── tests/
│           │   └── test_utils.py
│           ├── pyproject.toml
│           └── README.md
│
├── individuals/                          # Personal workspaces
│   ├── alice/                           # Alice's experimental work
│   │   ├── experiments/
│   │   ├── scripts/
│   │   └── notes.md
│   ├── bob/                             # Bob's experimental work
│   │   ├── prototypes/
│   │   └── README.md
│   └── README.md                        # Guidelines for individuals/ folder
│
├── scripts/                             # Repository-wide scripts
│   ├── setup.sh                         # Initial setup script
│   ├── dev.sh                           # Start development environment
│   ├── build.sh                         # Build all projects
│   ├── test.sh                          # Run all tests
│   ├── deploy.sh                        # Deployment script
│   ├── db-reset.sh                      # Reset database
│   ├── db-seed.sh                       # Seed database
│   └── check-deps.sh                    # Check dependency updates
│
└── tools/                               # Development tools
    ├── generators/                      # Code generators
    │   ├── component.js                 # Generate component
    │   ├── page.js                      # Generate page
    │   └── api-route.js                 # Generate API route
    └── validators/                      # Validation tools
        └── env-validator.js             # Validate environment variables
```

---

## Key Directory Explanations

### Root Level
- **Core docs** at root for easy AI agent access
- **Monorepo config** (pnpm-workspace.yaml, turbo.json)
- **GitHub workflows** for CI/CD automation

### `/guidelines/` - All Documentation
- **Organized by category** (core, development, quality, design, deployment, collaboration)
- **21 documentation files** covering all aspects of development
- **Easy navigation** with clear folder structure

### `/docs/` - Quarto Documentation
- **User-facing documentation** built with Quarto
- **Architecture diagrams**, API reference, deployment guides
- **Published** as static site or wiki

### `/projects/web/` - Main Application
- **Next.js App Router** structure (can be adapted for Vue)
- **Route groups** for organization `(auth)`, `(dashboard)`
- **Feature-based components** in `components/features/`
- **Shared UI components** in `components/ui/`
- **tRPC routers** in `server/routers/`
- **Comprehensive testing** structure

### `/projects/analytics/` - Python Data Pipeline
- **ETL pipelines** for data processing
- **Airflow DAGs** for orchestration
- **Jupyter notebooks** for analysis
- **Follows Python best practices** (pyproject.toml, uv)

### `/projects/utils/` - Shared Code
- **Shared packages** used across projects
- **UI components**, types, validators, configs
- **Both TypeScript and Python** utilities

### `/individuals/` - Personal Workspaces
- **Experimental work** that doesn't affect main codebase
- **Each developer** has their own folder
- **Not reviewed** unless explicitly requested

---

## Alternative: Vue 3 + Vite Structure

If using Vue instead of Next.js, the `/projects/web/` structure would change to:
```
projects/web/                            # Vue 3 + Vite application
├── src/
│   ├── main.ts                         # App entry point
│   ├── App.vue                         # Root component
│   ├── router/                         # Vue Router
│   │   ├── index.ts
│   │   └── routes.ts
│   ├── views/                          # Page components
│   │   ├── Home.vue
│   │   ├── Dashboard.vue
│   │   └── Login.vue
│   ├── components/                     # Vue components
│   │   ├── ui/                        # Base components
│   │   ├── features/                  # Feature components
│   │   └── shared/                    # Shared components
│   ├── composables/                    # Vue composables
│   │   ├── useAuth.ts
│   │   ├── useUser.ts
│   │   └── useApi.ts
│   ├── stores/                         # Pinia stores
│   │   ├── auth.ts
│   │   └── user.ts
│   ├── api/                           # API client
│   │   ├── trpc.ts
│   │   └── client.ts
│   └── assets/                        # Static assets
├── vite.config.ts                     # Vite configuration
└── ...