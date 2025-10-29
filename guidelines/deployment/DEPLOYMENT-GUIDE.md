# DEPLOYMENT-GUIDE.md
*Last updated 2025-10-29*

> Deployment procedures and environment management.

## Environments

- **Development**: Local development
- **Staging**: Pre-production testing
- **Production**: Live environment

## Vercel Deployment

```powershell
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Environment Variables

- Store secrets in Vercel dashboard
- Never commit `.env` files
- Use `.env.example` for documentation

---

*See DEPLOYMENT-GUIDE.md in README-PROJECT-DOCS.md for full deployment procedures*
