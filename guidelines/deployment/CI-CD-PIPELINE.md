# CI-CD-PIPELINE.md
*Last updated 2025-10-29*

> CI/CD pipeline configuration and best practices.

## GitHub Actions

- Automated testing on PR
- Lint and format checks
- Build verification
- Deployment automation

## Quality Gates

- All tests must pass
- Code coverage minimum 80%
- No linting errors
- Successful build

## Deployment Pipeline

1. Push to branch
2. Run CI checks
3. Deploy preview (PRs)
4. Manual approval
5. Deploy to production

---

*See CI-CD-PIPELINE.md in README-PROJECT-DOCS.md for full pipeline config*
