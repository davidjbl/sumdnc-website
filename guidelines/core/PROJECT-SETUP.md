# PROJECT-SETUP.md
*Last updated 2025-10-29*
*Project: Sumdnc.com - Modern Responsive Web Platform*

> **Purpose** – Guide for initializing new projects and modules within the Sumdnc.com monorepo.

## Initial Setup

### Prerequisites

- Node.js 18.17.0 or higher
- pnpm 8.0.0 or higher
- Python 3.13 (for analytics projects)
- Git

### Repository Setup

```powershell
# Clone repository
git clone https://github.com/davidjbl/sumdnc-website.git
cd sumdnc-website

# Install dependencies
pnpm install

# Setup environment variables
cp conf/.env.example projects/web/.env.local
```

## Creating New Modules

### Frontend Module

```powershell
# Create new Next.js app in projects/
cd projects
npx create-next-app@latest my-app --typescript --tailwind --app
```

### Python Module

```powershell
# Create new Python project
cd projects
mkdir my-analytics
cd my-analytics
uv init
```

## Development Workflow

1. Create feature branch from `develop`
2. Make changes
3. Write tests
4. Run lint and format
5. Commit with conventional commits
6. Create pull request

---

*For detailed development standards, see FRONTEND-STANDARDS.md and PYTHON-STYLE.md*
