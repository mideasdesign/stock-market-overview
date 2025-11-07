# Copilot Instructions for Stock Project

## Project Overview
This is a Vue 3 + TypeScript + Vite application. The project uses the Composition API with `<script setup>` syntax and is configured for strict type checking with `vue-tsc`.

## Tech Stack & Configuration
- **Framework**: Vue 3.5+ with TypeScript
- **Build Tool**: Vite 7.x with Hot Module Replacement (HMR)
- **Type Checking**: `vue-tsc` replaces standard `tsc` for `.vue` file type awareness
- **Node Version**: Requires Node.js ^20.19.0 or >=22.12.0 (see `package.json` engines)
- **Dev Tools**: Vue DevTools plugin enabled via `vite-plugin-vue-devtools`

## Project Structure
```
src/
  ├── App.vue           # Root component (currently has broken HelloWorld import)
  ├── main.ts           # Application entry point
  ├── assets/           # CSS and static assets
  │   ├── main.css      # Main styles with responsive grid layout
  │   └── base.css      # Base CSS variables and resets
  └── components/
      └── icons/        # SVG icon components (template-only .vue files)
```

## Code Conventions

### Vue Component Style
- **Always use `<script setup lang="ts">`** - This is the standard for all components
- **Template-only components** (like icons) can omit the `<script>` block entirely
- **Global styles** in `App.vue` target `body` and `#app` directly, not scoped styles
- **Icon components** use inline SVG with `currentColor` for theme-able colors

### TypeScript & Imports
- **Path alias**: Use `@/` to reference `src/` (e.g., `import Foo from '@/components/Foo.vue'`)
- **Type imports**: `.vue` imports are typed automatically via Volar/vue-tsc
- **No default exports**: Vue SFC components don't need explicit exports with `<script setup>`

### Styling Approach
- Uses CSS custom properties (see `assets/base.css`)
- Responsive design with `@media (min-width: 1024px)` breakpoint
- Grid-based layout for desktop (2-column grid in `App.vue`)
- No CSS preprocessor or utility framework

## Development Workflow

### Essential Commands
```bash
npm run dev          # Start dev server with HMR
npm run build        # Type-check + build for production (runs in parallel)
npm run preview      # Preview production build
npm run type-check   # Run vue-tsc without building
```

### Development Notes
- **Build process**: `npm run build` uses `npm-run-all2` to run `type-check` and `build-only` in parallel
- **Type checking**: Always runs before production builds - fix TS errors to build successfully
- **HMR**: Vite provides instant updates without full page reload during development

## Known Issues
- `App.vue` references `<HelloWorld>` component that doesn't exist in the codebase
- This will cause type errors but may not immediately break HMR

## When Adding New Features
1. **New components**: Create in `src/components/` with `<script setup lang="ts">`
2. **New routes**: No router configured yet - add Vue Router if navigation is needed
3. **State management**: No store configured - add Pinia if needed
4. **API calls**: No HTTP client configured - add axios or use native fetch
5. **New dependencies**: Ensure Node.js version compatibility (check `package.json` engines)

## IDE Setup
- **Required**: Volar extension for `.vue` file support in VS Code
- **Disable**: Vetur (conflicts with Volar)
- Browser DevTools: Enable Custom Object Formatters for better Vue debugging
