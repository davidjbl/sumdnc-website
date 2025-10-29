# Analytics Project

Python data pipeline and analytics for Sumdnc.com.

## Tech Stack

- Python 3.13
- pandas
- MLflow
- Pydantic
- pytest

## Setup

```powershell
# Install uv if not already installed
pip install uv

# Create virtual environment and install dependencies
uv sync

# Run the application
uv run python src/main.py
```

## Project Structure

```
src/
├── pipelines/    # Data pipelines
├── models/       # Data models
└── utils/        # Utility functions

tests/            # Test files
```

## Available Scripts

- `uv run pytest` - Run tests
- `uv run ruff check` - Lint code
- `uv run ruff format` - Format code

## Documentation

See `/guidelines/development/PYTHON-STYLE.md` for coding standards.
