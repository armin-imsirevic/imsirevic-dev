# Copilot Instructions for microcement-web (Titan Core Astro Theme)

## Project Overview
- This is a modern Astro-based website theme, optimized for performance, SEO, and modularity. It features content collections, dynamic theming, and a rich set of UI components for blogs, portfolios, and business sites.
- The codebase is organized for extensibility: major content types (blog, projekti, team, usluge) are managed via Astro content collections in `src/content/`, with configuration in `src/data/`.

## Key Architectural Patterns
- **Component-Driven**: All UI is built from reusable `.astro` components in `src/components/`, grouped by domain (e.g., `blog/`, `projekti/`, `sections/`, `ui/`).
- **Content Collections**: Content is stored in Markdown files under `src/content/`, with frontmatter for metadata (e.g., categories, publish flags, SEO info). Use Astro's `getCollection` to query/filter content.
- **Config-Driven**: Site-wide settings, navigation, features, and theming are managed in TypeScript files in `src/data/` (e.g., `config.ts`, `categories.ts`).
- **Dynamic Theming**: The theme is set via `themeSetting` in `src/data/config.ts`. Theme switching is handled by the `ThemeSwitcher.astro` component, which can be removed for single-theme sites.
- **Search & Filtering**: Project/category search is implemented client-side in `ProjektList.astro` using a dropdown with suggestions from both categories and project titles.

## Developer Workflows
- **Local Development**: Use `npm run dev` to start the Astro dev server (default: `localhost:4321`).
- **Build & Preview**: Use `npm run build` to generate the production site in `./dist/`, and `npm run preview` to serve the built site locally.
- **Content Updates**: Add/edit Markdown files in `src/content/` for new posts, projects, or team members. Use frontmatter fields for metadata.
- **Configuration**: Update site settings, navigation, and theme in `src/data/config.ts` and related files.
- **Component Extension**: Add new UI features by creating `.astro` components in the appropriate subfolder of `src/components/`.

## Project-Specific Conventions
- **Category Usage**: Categories are defined in `src/data/categories.ts` and referenced by name in content frontmatter. Category frequency is used for sorting/filtering in UI.
- **Publish Control**: Content items can be hidden from production by setting `publish: false` in frontmatter. In dev mode, all items are shown.
- **Search UX**: The search dropdown in `ProjektList.astro` limits suggestions to 5, mixing categories and project titles, and supports keyboard navigation.
- **AOS Animations**: Animate On Scroll (AOS) is used for UI transitions; initialization is handled in layout scripts.

## Integration Points
- **Astro Content API**: Use `getCollection` for querying content collections.
- **External Libraries**: AOS for animations, Lucide for icons.
- **No backend/server code**: All logic is static or client-side; no API endpoints or serverless functions are present.

## Example: Filtering Projects by Category
- See `src/components/projekti/ProjektList.astro` for logic that:
  - Loads all projects via `getCollection('projekti')`
  - Counts category usage for sorting
  - Filters categories to those with projects, then displays the top 5
  - Implements a search dropdown for quick navigation

## Key Files & Directories
- `src/components/` — UI components (by domain)
- `src/content/` — Markdown content collections
- `src/data/` — Configuration and data
- `src/layouts/` — Page layouts
- `src/pages/` — Route definitions

---

## Guidance for Copilot and Contributors

### Confirmation and Repetition
- Copilot must NOT ask for confirmation or repeat requests when the user's intent is clear and explicit. If the user asks for a specific action (e.g., fragment a component, refactor code), Copilot should analyze, propose, and execute the solution immediately, without unnecessary prompts or questions.
- Only request clarification if the user's instructions are ambiguous or contradict existing conventions. Otherwise, proceed directly with the requested task.

### Folder Exclusion
- Ignore the `.astro` folder for all code checks, edits, and searches. There is nothing for Copilot or contributors to review or modify inside this folder.

### What NOT to Do
Do NOT use placeholder comments such as `// ...existing code...` or similar in code changes. When making edits, always provide only the minimum necessary code context for clarity. Avoid unnecessary comments or repeated code. Contributors should focus on concise, clear diffs that show only what is required for understanding the change.
- Do **NOT** add Node.js backend, APIs, or serverless functions.
- Do **NOT** fetch data at runtime; all logic must be static or client-side.
- Do **NOT** run `npm install`, `npm update`, or any package install/update commands unless the user specifically requests or approves it. If parsing errors or dependency issues occur, only suggest the fix and wait for user approval before running such commands.

### Page Folder Naming Convention
- Always name folders in `src/pages/` to match the intended route and language of the site. For Croatian-language sites, use `kontakt` for the contact page (route `/kontakt`). Never create English-named folders like `contact` unless explicitly requested for an English route.
- If any English-named folders (e.g., `contact`) exist for Croatian pages, delete them immediately and verify cleanup after any request.
- Do not ask the user what folder name to use for standard pages (e.g., kontakt, projekti, blog, usluge). Follow the language and route conventions already present in the codebase. Never create duplicate or English-named folders for Croatian pages.

### Handling Unclear Conventions
- For questions about unclear conventions or missing documentation, ask the user for clarification or examples from their workflow. Avoid asking about folder names for standard pages; follow the established pattern.

---

## Keeping These Instructions Up To Date  <!-- NEW SECTION -->

**This document is "living documentation". To ensure that both Copilot and human contributors benefit from improving workflows and growing project knowledge, please adhere to these practices:**

- Whenever you (Copilot or a human developer) discover a new convention, pattern, or “gotcha” in the codebase that is not already documented here, prompt the user to update this instruction document.
- If a workaround, architectural exception, or undocumented style appears (e.g., a new directory appears, a new frontmatter field is introduced, a process is changed), suggest adding an entry or updating the relevant section.
- If you (Copilot) see repeated code patterns in the codebase that differ from what is described here, mention this and ask if the instructions should be updated to reflect new conventions.
- Whenever a significant code change is made, encourage reviewing and updating this `COPILOT_INSTRUCTIONS.md` (or wherever these instructions live) to capture new conventions, content types, or workflows.
- After generating code or reviewing changes, Copilot should briefly check if any new patterns, APIs, or exceptions are used that are not in these instructions. If so, notify the user (“New convention/feature detected: [XYZ]. Do you want to update the instructions?”).

## CLEANUP REMINDER

- After any major change (e.g., renaming a page, moving content, refactoring), Copilot must immediately and automatically clean up obsolete files, folders, and code (such as old page folders, unused components, or duplicate routes) before moving on to new tasks. Never ask for permission to clean up—just do it.
- Do not leave old or unused files in the codebase. Always prioritize cleanup and removal of obsolete code as part of your workflow, without asking for approval.
- If you detect any leftover files, folders, or code that are no longer needed, delete or refactor them right away, without prompting the user.
- Treat this instruction file as "living documentation". When something new is learned about the project or its structure, document it here.
- Developers: Please update this file during pull requests when adding new content types, workflows, or conventions.

---

# NOTE: If you (Copilot) detect undocumented conventions, patterns, or repeated workflow questions, recommend updating this file or request a new example from the user.

---