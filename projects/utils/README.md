# Shared Utilities

Shared packages and utilities used across all projects.

## Structure

```
packages/
├── ui/           # Shared UI components
├── config/       # Shared configuration
└── types/        # Shared TypeScript types

python/           # Shared Python utilities
```

## Usage

### TypeScript Packages

```typescript
import { Button } from '@sumdnc/ui';
import type { User } from '@sumdnc/types';
```

### Python Utilities

```python
from sumdnc_utils import logger, config
```

## Documentation

See individual package READMEs for specific usage instructions.
