# Adaptive Fitness - Web Frontend (ReactJS)

This is the ReactJS web frontend for the Adaptive Fitness application. It provides modules for registration and authentication, personalized dashboard, workout logging, analytics, exercise library, adaptive recommendations, and user profile management.

## Tech
- React 18 + Vite
- TypeScript
- React Router v6
- Zustand (auth store)
- Axios (API client)
- react-hook-form (forms)

## Getting Started
1. Copy `.env.example` to `.env` and set:
   - `VITE_API_BASE_URL` to your backend base URL (e.g., `http://localhost:8000`).
2. Install dependencies:
   - `npm install`
3. Run dev server:
   - `npm run dev`

The app will open at http://localhost:5173 by default.

## Structure
- `src/components` - Reusable UI, layout, routing helpers
- `src/pages` - Feature pages
- `src/services` - API clients (with placeholder fallbacks)
- `src/store` - Client-side stores (auth)
- `src/utils` - App initialization
- `src/styles` - Global styles

## Accessibility and Responsiveness
- Semantic landmarks (header, main, footer, nav)
- Skip link in index.html
- Keyboard focus styles and aria-* attributes
- Responsive layout with CSS grid

## Security Notes
- Auth token attached via Authorization header (Bearer) using interceptor.
- Store session is persisted in sessionStorage and cleared on logout.
- Do not commit real `.env` values to version control.

