# setup-project.ps1
# PowerShell script to create complete Sumdnc.com project structure using npm workspaces
# Run with: .\setup-project.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Sumdnc.com Project Structure Setup" -ForegroundColor Cyan
Write-Host "Using npm workspaces (no Turborepo)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Function to create directory
function New-Directory {
    param([string]$path)
    if (!(Test-Path $path)) {
        New-Item -ItemType Directory -Path $path -Force | Out-Null
        Write-Host "✓ Created directory: $path" -ForegroundColor Green
    }
}

# Function to create file with content
function New-FileWithContent {
    param(
        [string]$path,
        [string]$content
    )
    $dir = Split-Path $path
    if ($dir -and !(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
    Set-Content -Path $path -Value $content -Force
    Write-Host "✓ Created file: $path" -ForegroundColor Gray
}

Write-Host "Creating root structure..." -ForegroundColor Yellow
Write-Host ""

# ============================================================================
# ROOT LEVEL FILES
# ============================================================================

New-FileWithContent "README.md" @"
# Sumdnc.com

Modern full-stack web application built with Next.js/Vue, TypeScript, and Prisma.

## Quick Start
``````bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env.local

# Run migrations
npm run prisma:migrate

# Start development server
npm run dev
``````

## Documentation

See [README-PROJECT-DOCS.md](./README-PROJECT-DOCS.md) for complete documentation index.

## Monorepo Structure

This project uses npm workspaces for monorepo management.

### Available Scripts

- ``npm run dev`` - Start all development servers
- ``npm run build`` - Build all projects
- ``npm run test`` - Run all tests
- ``npm run lint`` - Lint all projects
"@

New-FileWithContent "README-PROJECT-DOCS.md" @"
# README-PROJECT-DOCS.md

Master documentation index and quick reference guide.

See full documentation in /guidelines/ directory.

## Quick Links
- [Agents.md](./Agents.md) - AI agent guidelines
- [DEVTOOLS.md](./DEVTOOLS.md) - Development tools
- [webdev.md](./webdev.md) - Web development reference
"@

New-FileWithContent "Agents.md" @"
# Agents.md

AI coding agent rules and guidelines for the project.

## Golden Rules
- G0: Always read README.md before writing code
- G1: Ask for clarification when unsure
- G2: Add/update AIDEV-NOTE comments
- G3: Stay within task context
- G4: Use symbolic reasoning
- G5: Directly modify existing code

See full content in guidelines/
"@

New-FileWithContent "webdev.md" @"
# Web Dev Documentation

Comprehensive guide to web development tools, practices, and technologies.

Covers: Frontend, Backend, Database, API Development, Testing, Deployment, Security, Performance, Accessibility.
"@

New-FileWithContent "DEVTOOLS.md" @"
# Development Tools Reference

Essential development tools for Sumdnc.com project.

## Core Tools
- VSCode with extensions
- GitHub Copilot
- Git + GitHub
- Browser DevTools
- Terminal tools
"@

New-FileWithContent "LICENSE" @"
MIT License

Copyright (c) 2025 Sumdnc.com

Permission is hereby granted, free of charge, to any person obtaining a copy...
"@

New-FileWithContent ".gitignore" @"
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/
*.lcov

# Next.js
.next/
out/
build/
dist/

# Environment
.env
.env*.local

# Python
__pycache__/
*.py[cod]
*$py.class
.venv/
venv/
*.egg-info/

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
logs/
*.log
npm-debug.log*

# Misc
.vercel/
"@

New-FileWithContent ".gitattributes" @"
# Line endings
* text=auto eol=lf
*.bat text eol=crlf
*.ps1 text eol=crlf
"@

New-FileWithContent ".editorconfig" @"
root = true

[*]
charset = utf-8
end_of_line = lf
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

[*.py]
indent_size = 4
"@

New-FileWithContent "package.json" @"
{
  "name": "sumdnc-monorepo",
  "version": "1.0.0",
  "private": true,
  "description": "Sumdnc.com monorepo using npm workspaces",
  "workspaces": [
    "projects/web",
    "projects/utils/packages/*"
  ],
  "scripts": {
    "dev": "npm run dev --workspace=projects/web",
    "dev:all": "npm run dev --workspaces --if-present",
    "build": "npm run build --workspaces --if-present",
    "test": "npm run test --workspaces --if-present",
    "lint": "npm run lint --workspaces --if-present",
    "format": "prettier --write \"**/*.{ts,tsx,js,jsx,md,json}\"",
    "prisma:migrate": "npm run prisma:migrate --workspace=projects/web",
    "prisma:studio": "npm run prisma:studio --workspace=projects/web",
    "clean": "npm run clean --workspaces --if-present && rm -rf node_modules"
  },
  "devDependencies": {
    "prettier": "^3.1.0"
  },
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  }
}
"@

New-FileWithContent ".npmrc" @"
# npm configuration
save-exact=true
package-lock=true
legacy-peer-deps=false
"@

# ============================================================================
# .GITHUB DIRECTORY
# ============================================================================

Write-Host "Creating .github structure..." -ForegroundColor Yellow

New-Directory ".github/workflows"
New-Directory ".github/ISSUE_TEMPLATE"

New-FileWithContent ".github/workflows/ci.yml" @"
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linting
        run: npm run lint

  test:
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
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm run test
        env:
          DATABASE_URL: postgresql://test:test@localhost:5432/test
          REDIS_URL: redis://localhost:6379

  build:
    runs-on: ubuntu-latest
    needs: [lint, test]
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build projects
        run: npm run build
"@

New-FileWithContent ".github/workflows/deploy-preview.yml" @"
name: Deploy Preview

on:
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Vercel Preview
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
"@

New-FileWithContent ".github/workflows/deploy-production.yml" @"
name: Deploy Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Vercel Production
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
"@

New-FileWithContent ".github/workflows/lighthouse.yml" @"
name: Lighthouse CI

on:
  pull_request:
    branches: [main, develop]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            http://localhost:3000
          budgetPath: ./lighthouserc.json
          temporaryPublicStorage: true
"@

New-FileWithContent ".github/PULL_REQUEST_TEMPLATE.md" @"
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
"@

New-FileWithContent ".github/ISSUE_TEMPLATE/bug_report.md" @"
---
name: Bug Report
about: Create a report to help us improve
title: '[BUG] '
labels: bug
---

## Description
A clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What you expected to happen

## Actual Behavior
What actually happened
"@

New-FileWithContent ".github/ISSUE_TEMPLATE/feature_request.md" @"
---
name: Feature Request
about: Suggest an idea for this project
title: '[FEATURE] '
labels: enhancement
---

## Problem
Description of the problem this feature solves

## Proposed Solution
How you envision this feature working

## Alternatives Considered
Any alternative solutions you've considered
"@

New-FileWithContent ".github/ISSUE_TEMPLATE/documentation.md" @"
---
name: Documentation Request
about: Suggest improvements to documentation
title: '[DOCS] '
labels: documentation
---

## Documentation Area
Which documentation needs improvement?

## Suggestion
What should be added or changed?
"@

New-FileWithContent ".github/CODEOWNERS" @"
# Default owners for everything
* @team-leads

# Frontend
/projects/web/src/ @frontend-team

# Backend
/projects/web/src/server/ @backend-team

# Documentation
/docs/ @docs-team
/guidelines/ @docs-team
"@

New-FileWithContent ".github/dependabot.yml" @"
version: 2
updates:
  - package-ecosystem: npm
    directory: "/"
    schedule:
      interval: weekly
    open-pull-requests-limit: 10

  - package-ecosystem: npm
    directory: "/projects/web"
    schedule:
      interval: weekly
"@

# ============================================================================
# .VSCODE DIRECTORY
# ============================================================================

Write-Host "Creating .vscode structure..." -ForegroundColor Yellow

New-Directory ".vscode"

New-FileWithContent ".vscode/settings.json" @"
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "editor.tabSize": 2,
  "typescript.tsdk": "node_modules/typescript/lib",
  "files.eol": "\n",
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/.next": true,
    "**/coverage": true
  }
}
"@

New-FileWithContent ".vscode/extensions.json" @"
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "prisma.prisma",
    "github.copilot",
    "github.copilot-chat",
    "eamodio.gitlens",
    "ms-python.python",
    "usernamehw.errorlens"
  ]
}
"@

New-FileWithContent ".vscode/launch.json" @"
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev --workspace=projects/web"
    }
  ]
}
"@

New-FileWithContent ".vscode/tasks.json" @"
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Dev Server",
      "type": "shell",
      "command": "npm run dev",
      "problemMatcher": [],
      "isBackground": true
    },
    {
      "label": "Build All",
      "type": "shell",
      "command": "npm run build",
      "problemMatcher": []
    }
  ]
}
"@

# ============================================================================
# GUIDELINES DIRECTORY (keeping same structure)
# ============================================================================

Write-Host "Creating guidelines structure..." -ForegroundColor Yellow

New-Directory "guidelines/core"
New-Directory "guidelines/development"
New-Directory "guidelines/quality"
New-Directory "guidelines/design"
New-Directory "guidelines/deployment"
New-Directory "guidelines/collaboration"

# Core
New-FileWithContent "guidelines/core/ARCHITECTURE.md" @"
# ARCHITECTURE.md

Monorepo architecture patterns using npm workspaces, module boundaries, and integration points.

## Monorepo Structure
This project uses npm workspaces for monorepo management.

## Topics
- Module organization with npm workspaces
- Dependency management
- Integration patterns
- Server vs Client components
"@

New-FileWithContent "guidelines/core/COMMON-PATTERNS.md" @"
# COMMON-PATTERNS.md

Reusable code patterns and battle-tested recipes.

## Topics
- React/Vue patterns
- Data processing patterns
- Visualization patterns
- Shared utilities in workspaces
"@

New-FileWithContent "guidelines/core/PROJECT-SETUP.md" @"
# PROJECT-SETUP.md

Step-by-step guide for initializing new projects in npm workspaces.

## Topics
- Python project setup with uv
- JavaScript/TypeScript project setup
- Adding new workspace packages
- Environment configuration
"@

# (Continue with same guidelines structure as before...)
# Development
New-FileWithContent "guidelines/development/FRONTEND-STANDARDS.md" @"
# FRONTEND-STANDARDS.md

React/Next.js or Vue component patterns and standards.
"@

New-FileWithContent "guidelines/development/API-STANDARDS.md" @"
# API-STANDARDS.md

API design patterns including tRPC procedures and REST endpoints.
"@

New-FileWithContent "guidelines/development/DATABASE-PATTERNS.md" @"
# DATABASE-PATTERNS.md

Prisma ORM patterns and PostgreSQL best practices.
"@

New-FileWithContent "guidelines/development/DATA-PIPELINE.md" @"
# DATA-PIPELINE.md

ETL/ELT workflows and data validation patterns.
"@

New-FileWithContent "guidelines/development/PYTHON-STYLE.md" @"
# PYTHON-STYLE.md

Python 3.13 coding standards and best practices.
"@

New-FileWithContent "guidelines/development/ERROR-HANDLING.md" @"
# ERROR-HANDLING.md

Exception handling, error boundaries, and logging patterns.
"@

# Quality
New-FileWithContent "guidelines/quality/TESTING-GUIDE.md" @"
# TESTING-GUIDE.md

Unit, integration, and E2E testing strategies.
"@

New-FileWithContent "guidelines/quality/SECURITY-CHECKLIST.md" @"
# SECURITY-CHECKLIST.md

Security best practices and OWASP mitigations.
"@

New-FileWithContent "guidelines/quality/ACCESSIBILITY.md" @"
# ACCESSIBILITY.md

WCAG 2.1 AA compliance guidelines.
"@

New-FileWithContent "guidelines/quality/PERFORMANCE.md" @"
# PERFORMANCE.md

Performance optimization strategies and benchmarks.
"@

New-FileWithContent "guidelines/quality/TROUBLESHOOTING.md" @"
# TROUBLESHOOTING.md

Common issues and debugging strategies.
"@

# Design
New-FileWithContent "guidelines/design/RESPONSIVE-DESIGN.md" @"
# RESPONSIVE-DESIGN.md

Mobile-first responsive design patterns.
"@

# Deployment
New-FileWithContent "guidelines/deployment/VERSION-CONTROL.md" @"
# VERSION-CONTROL.md

Git workflow, branch naming, and commit conventions.
"@

New-FileWithContent "guidelines/deployment/CI-CD-PIPELINE.md" @"
# CI-CD-PIPELINE.md

GitHub Actions workflows with npm workspaces and quality gates.
"@

New-FileWithContent "guidelines/deployment/DEPLOYMENT-GUIDE.md" @"
# DEPLOYMENT-GUIDE.md

Deployment procedures and environment configuration.
"@

New-FileWithContent "guidelines/deployment/MONITORING-LOGGING.md" @"
# MONITORING-LOGGING.md

Observability practices and logging strategies.
"@

# Collaboration
New-FileWithContent "guidelines/collaboration/COLLABORATION-PM.md" @"
# COLLABORATION-PM.md

Team collaboration and project management practices.
"@

# ============================================================================
# DOCS DIRECTORY (same as before)
# ============================================================================

Write-Host "Creating docs structure..." -ForegroundColor Yellow

New-Directory "docs/architecture"
New-Directory "docs/api"
New-Directory "docs/deployment"

New-FileWithContent "docs/index.qmd" @"
---
title: "Sumdnc.com Documentation"
format: html
---

# Welcome

Comprehensive documentation for Sumdnc.com project using npm workspaces.
"@

New-FileWithContent "docs/_quarto.yml" @"
project:
  type: website
  output-dir: _site

website:
  title: "Sumdnc.com Docs"
  navbar:
    left:
      - text: "Home"
        file: index.qmd
"@

New-FileWithContent "docs/getting-started.qmd" @"
---
title: "Getting Started"
---

# Getting Started

Quick start guide using npm workspaces.
"@

# ============================================================================
# CONF DIRECTORY (same as before)
# ============================================================================

Write-Host "Creating conf structure..." -ForegroundColor Yellow

New-Directory "conf"

New-FileWithContent "conf/.env.example" @"
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/sumdnc"
REDIS_URL="redis://localhost:6379"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-here"
"@

# ============================================================================
# PROJECTS/WEB DIRECTORY
# ============================================================================

Write-Host "Creating projects/web structure..." -ForegroundColor Yellow

# Create all directories (same structure as before)
New-Directory "projects/web/src/app/(auth)/login"
New-Directory "projects/web/src/app/(auth)/register"
New-Directory "projects/web/src/app/(dashboard)/dashboard"
New-Directory "projects/web/src/components/ui"
New-Directory "projects/web/src/lib"
New-Directory "projects/web/prisma"
New-Directory "projects/web/__tests__"

# Key files with updated package.json for npm workspaces
New-FileWithContent "projects/web/package.json" @"
{
  "name": "@sumdnc/web",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "vitest",
    "test:e2e": "playwright test",
    "prisma:migrate": "prisma migrate dev",
    "prisma:studio": "prisma studio",
    "prisma:generate": "prisma generate",
    "clean": "rm -rf .next node_modules"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@prisma/client": "^5.0.0",
    "zod": "^3.22.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "eslint": "^8.50.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.0.0",
    "prisma": "^5.0.0",
    "vitest": "^1.0.0",
    "@vitejs/plugin-react": "^4.2.0",
    "@playwright/test": "^1.40.0"
  }
}
"@

# Add essential files
New-FileWithContent "projects/web/src/app/layout.tsx" @"
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
"@

New-FileWithContent "projects/web/src/app/page.tsx" @"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Welcome to Sumdnc.com</h1>
      <p className="mt-4">Built with Next.js and npm workspaces</p>
    </main>
  )
}
"@

New-FileWithContent "projects/web/src/styles/globals.css" @"
@tailwind base;
@tailwind components;
@tailwind utilities;
"@

New-FileWithContent "projects/web/tsconfig.json" @"
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
"@

New-FileWithContent "projects/web/next.config.js" @"
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@sumdnc/ui', '@sumdnc/types'],
}

module.exports = nextConfig
"@

New-FileWithContent "projects/web/tailwind.config.ts" @"
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
"@

New-FileWithContent "projects/web/.eslintrc.json" @"
{
  "extends": "next/core-web-vitals"
}
"@

New-FileWithContent "projects/web/README.md" @"
# @sumdnc/web

Main web application using npm workspaces.

## Getting Started
``````bash
# From root
npm install
npm run dev

# Or from this directory
npm run dev
``````

## Shared Packages

This app can import from:
- ``@sumdnc/ui`` - Shared UI components
- ``@sumdnc/types`` - Shared TypeScript types
- ``@sumdnc/validators`` - Shared validation schemas
"@

# ============================================================================
# PROJECTS/UTILS DIRECTORY
# ============================================================================

Write-Host "Creating projects/utils structure..." -ForegroundColor Yellow

New-Directory "projects/utils/packages/ui/src"
New-Directory "projects/utils/packages/types/src"
New-Directory "projects/utils/packages/validators/src"

# UI Package
New-FileWithContent "projects/utils/packages/ui/package.json" @"
{
  "name": "@sumdnc/ui",
  "version": "1.0.0",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": {
    "lint": "eslint .",
    "clean": "rm -rf node_modules"
  },
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "typescript": "^5.0.0"
  }
}
"@

New-FileWithContent "projects/utils/packages/ui/src/index.ts" @"
// Shared UI components
export * from './Button'
"@

New-FileWithContent "projects/utils/packages/ui/src/Button.tsx" @"
// Shared Button component
export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded">
      {children}
    </button>
  )
}
"@

New-FileWithContent "projects/utils/packages/ui/tsconfig.json" @"
{
  "extends": "../../../tsconfig.base.json",
  "compilerOptions": {
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
"@

New-FileWithContent "projects/utils/packages/ui/README.md" @"
# @sumdnc/ui

Shared UI components for Sumdnc.com projects.

## Usage
``````tsx
import { Button } from '@sumdnc/ui'

function App() {
  return <Button>Click me</Button>
}
``````
"@

# Types Package
New-FileWithContent "projects/utils/packages/types/package.json" @"
{
  "name": "@sumdnc/types",
  "version": "1.0.0",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": {
    "lint": "eslint .",
    "clean": "rm -rf node_modules"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
"@

New-FileWithContent "projects/utils/packages/types/src/index.ts" @"
// Shared TypeScript types
export interface User {
  id: string
  email: string
  name: string
}

export interface ApiResponse<T> {
  data: T
  error?: string
}
"@

New-FileWithContent "projects/utils/packages/types/tsconfig.json" @"
{
  "extends": "../../../tsconfig.base.json",
  "include": ["src"]
}
"@

# Validators Package
New-FileWithContent "projects/utils/packages/validators/package.json" @"
{
  "name": "@sumdnc/validators",
  "version": "1.0.0",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": {
    "lint": "eslint .",
    "clean": "rm -rf node_modules"
  },
  "dependencies": {
    "zod": "^3.22.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
"@

New-FileWithContent "projects/utils/packages/validators/src/index.ts" @"
// Shared Zod validation schemas
import { z } from 'zod'

export const userSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(100),
})

export const apiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    data: dataSchema,
    error: z.string().optional(),
  })
"@

# Base TypeScript config
New-FileWithContent "tsconfig.base.json" @"
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["ES2017"],
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true
  }
}
"@

# ============================================================================
# PYTHON ANALYTICS (same as before)
# ============================================================================

Write-Host "Creating projects/analytics structure..." -ForegroundColor Yellow

New-Directory "projects/analytics/src/analytics"
New-Directory "projects/analytics/tests"

New-FileWithContent "projects/analytics/pyproject.toml" @"
[project]
name = "sumdnc-analytics"
version = "0.1.0"
description = "Analytics pipelines"
dependencies = [
    "pandas>=2.0.0",
    "pydantic>=2.0.0",
]
"@

New-FileWithContent "projects/analytics/README.md" @"
# Analytics Pipeline

Python data analytics (separate from npm workspaces).
"@

# ============================================================================
# INDIVIDUALS & SCRIPTS (same as before)
# ============================================================================

Write-Host "Creating individuals and scripts..." -ForegroundColor Yellow

New-Directory "individuals/alice"
New-Directory "individuals/bob"
New-Directory "scripts"

New-FileWithContent "individuals/README.md" @"
# Individuals Workspace

Personal workspaces for experimental work.
"@

New-FileWithContent "scripts/setup.sh" @"
#!/bin/bash
# Initial project setup

echo "Setting up Sumdnc.com project with npm workspaces..."
npm install
cp .env.example .env.local
echo "Setup complete!"
"@

New-FileWithContent "scripts/dev.sh" @"
#!/bin/bash
# Start development
npm run dev
"@

New-FileWithContent "scripts/build.sh" @"
#!/bin/bash
# Build all projects
npm run build
"@

New-FileWithContent "scripts/test.sh" @"
#!/bin/bash
# Run all tests
npm run test
"@

# ============================================================================
# COMPLETION
# ============================================================================

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Project structure created successfully!" -ForegroundColor Green
Write-Host "Using npm workspaces (no Turborepo)" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Install dependencies: npm install" -ForegroundColor White
Write-Host "2. Setup environment: cp .env.example .env.local" -ForegroundColor White
Write-Host "3. Initialize Git: git init" -ForegroundColor White
Write-Host "4. Start development: npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "Workspace commands:" -ForegroundColor Yellow
Write-Host "- npm run dev              - Start web app" -ForegroundColor White
Write-Host "- npm run dev:all          - Start all workspaces" -ForegroundColor White
Write-Host "- npm run build            - Build all workspaces" -ForegroundColor White
Write-Host "- npm run test             - Test all workspaces" -ForegroundColor White
Write-Host ""
Write-Host "Documentation:" -ForegroundColor Yellow
Write-Host "- README.md - Quick start guide" -ForegroundColor White
Write-Host "- README-PROJECT-DOCS.md - Documentation index" -ForegroundColor White
Write-Host "- guidelines/ - All development guidelines" -ForegroundColor White
Write-Host ""
Write-Host "Happy coding! 🚀" -ForegroundColor Cyan