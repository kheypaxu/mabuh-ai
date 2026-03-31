# Copilot Instructions for MabuhAi

This project is **MabuhAi**, a mental health and emotional wellness app built with **Tauri**, **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Preferred Frontend Stack

When adding or updating app features, use the following technologies by default:

- **Animations:** `framer-motion`
- **Authentication:** `Supabase Auth`
- **State Management:** `Zustand`
- **Data Fetching / Server State:** `TanStack Query`

## Implementation Guidance

- Prefer **functional React components** and **TypeScript-first** code.
- Use **Framer Motion** for page transitions, micro-interactions, onboarding flows, modal animations, and mood-feedback interactions.
- Use **Supabase Auth** for sign in, sign up, session persistence, and protected experiences.
- Use **Zustand** for lightweight client-side state such as UI preferences, onboarding flow state, mood draft state, and session-adjacent app state.
- Use **TanStack Query** for API requests, caching, background refetching, optimistic updates, and loading/error states.

## Architectural Preferences

- Keep server state and client state separate:
  - **TanStack Query** = remote/server data
  - **Zustand** = local UI/global app state
- Avoid introducing alternative tools like **Redux**, **Context-heavy global state**, or other auth/data libraries unless explicitly requested.
- Reuse the existing design language in `DESIGN.md` and maintain the calm, editorial, sanctuary-style UI.
- Favor small, reusable components and clear folder organization.

## Suggested Structure

- `src/components/` for UI and feature components
- `src/store/` for Zustand stores
- `src/lib/` for shared utilities and Supabase setup
- `src/hooks/` for TanStack Query hooks and reusable logic

When unsure, choose the simplest implementation that fits this stack and keeps the codebase consistent.
