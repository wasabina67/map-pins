# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # tsc -b && vite build (outputs to docs/)
npm run lint      # ESLint
npm run preview   # Preview production build locally
```

No test framework is configured.

## Architecture

**Stack:** React 19 + TypeScript + Vite + react-leaflet (Leaflet maps)

**Data flow:**
1. `src/main.tsx` → renders `<App />`
2. `src/App.tsx` → renders `<Map />`
3. `src/components/Map.tsx` fetches `public/data.json` on mount, renders a full-screen Leaflet map centered on Japan with emoji marker icons and popups

**Key files:**
- `src/types.ts` — `Category`, `Location`, `MapData` types
- `src/components/icons.ts` — category-to-emoji icon mapping (⛰️ hiking, ♨️ onsen, 🗺️ sightseeing, 🍴 food)
- `public/data.json` — location data source (`{ categories[], locations[] }`)

**Build output:** `docs/` directory with base path `/map-pins/` for GitHub Pages deployment.
