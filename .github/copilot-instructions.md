# Copilot Instructions for imsirevic-dev

## Project Overview
This repository contains multiple Astro-based projects organized into `apps` and `packages`. The `apps` folder includes individual applications, while the `packages` folder contains shared components like `ui`. Astro is used as the primary framework, and Tailwind CSS is integrated for styling.

### Key Components
- **Apps**: Each app (e.g., `imsirevic`, `microcement-web`, `playground`) is an independent Astro project with its own configuration and dependencies.
- **Packages**: Shared components, such as `ui`, are located in the `packages` folder and can be imported into apps.

### Build and Development
- **Install Dependencies**: Run `npm install` from the root directory to install dependencies for all workspaces.
- **Development Server**: Use `npm run dev` in the respective app directory to start the local development server.
- **Build**: Run `npm run build` in the app directory to generate production-ready files.
- **Preview**: Use `npm run preview` to preview the build locally.

### Debugging
- **Launch Configurations**: The `.vscode/launch.json` file in each app provides configurations for debugging. For example, `astro dev` can be launched directly from VS Code.

## Project-Specific Conventions
- **File Structure**: Astro pages are located in `src/pages/`, and components are in `src/components/`. Shared styles are in `src/styles/`.
- **Styling**: Tailwind CSS is used for styling. Global styles are defined in `src/styles/global.css`.
- **Shared Components**: Shared UI components, like `Button`, are located in `packages/ui` and imported into apps.

## Integration Points
- **External Dependencies**: Tailwind CSS and Astro are the primary dependencies. Tailwind is configured via `astro.config.mjs`.
- **Cross-Component Communication**: Shared components in `packages/ui` are imported into apps using workspace aliases.

## Examples
### Importing Shared Components
```astro
---
import { Button } from 'ui';
---

<Button>Hello from shared UI</Button>
```

### Tailwind CSS Usage
```html
<h1 class="text-4xl bg-amber-200">Hello Tailwind</h1>
```

## Recommended Extensions
- **Astro VS Code Extension**: Install `astro-build.astro-vscode` for syntax highlighting and IntelliSense.

## Notes
- Ensure all dependencies are installed before running commands.
- Follow the file structure conventions for consistency.

Feel free to update this document as the project evolves.
