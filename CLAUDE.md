# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a monorepo containing multiple Astro-based applications organized using npm workspaces:

- **Root package.json**: Contains workspace configuration and convenience scripts
- **apps/**: Independent Astro applications
  - `imsirevic`: CV/portfolio site (eslint, prettier configured)
  - `microcement-web`: Production website with full linting setup
  - `playground`: Development/testing environment for UI components
  - `tailwind-sandbox`: Tailwind CSS testing environment
- **packages/**: Shared components and utilities
  - `ui`: Shared Astro components exported as `@imsirevic/ui`

## Development Commands

### Root Level
- `npm run imsirevic`: Start imsirevic app dev server
- `npm run playground`: Start playground app dev server
- `npm install`: Install all workspace dependencies

### App-Specific Commands
Navigate to specific app directory (e.g., `cd apps/imsirevic`) and run:

**All apps**:
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

**microcement-web** (full tooling):
- `npm run lint`: Run ESLint
- `npm run lint:fix`: Auto-fix ESLint issues
- `npm run format`: Format with Prettier
- `npm run format:check`: Check Prettier formatting
- `npm run check`: Run Astro type checking
- `npm run check:all`: Run all checks (format, lint, typecheck)

**imsirevic** (has linting):
- `npm run eslint .`: Run ESLint (manual command)
- `npm run prettier -w .`: Format with Prettier (manual command)

### UI Package
In `packages/ui/`:
- `npm run build`: Build shared components with type checking
- `npm run dev`: Start development server

## Architecture Notes

### Shared UI Components
- Located in `packages/ui/src/`
- Exported through `packages/ui/src/index.js`
- Imported in apps as `import { ComponentName } from '@imsirevic/ui'`
- Currently exports: `Button`, `GalleryWithNavAndSearch`

### Workspace Dependencies
- Apps can depend on `@imsirevic/ui: "*"` for local shared components
- All apps use Astro as the primary framework
- Tailwind CSS is used consistently across apps via `@tailwindcss/vite`

### Tooling Standards
- **microcement-web**: Full production setup with ESLint, Prettier, TypeScript
- **imsirevic**: Basic linting with ESLint and Prettier
- **playground**: Minimal setup for component testing
- Icon libraries: Uses `@iconify-json/*` packages and `astro-icon`

## Key Configuration Files
- Each app has its own `astro.config.mjs`
- Workspace configuration in root `package.json`
- VS Code debugging configurations available in individual apps