# Projects Directory

This directory contains all monorepo projects for Sumdnc.com.

## Structure

- **web/**: Main Next.js web application
- **analytics/**: Python data pipeline and analytics
- **utils/**: Shared utilities and packages

## Getting Started

Each project has its own README with setup instructions.

### Web Application

```powershell
cd projects/web
pnpm install
pnpm dev
```

### Analytics

```powershell
cd projects/analytics
uv sync
uv run python src/main.py
```

## Documentation

See the guidelines/ directory for development standards and best practices.
