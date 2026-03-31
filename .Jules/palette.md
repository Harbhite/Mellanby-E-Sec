UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2026-03-31 - Stateful Toggles Accessibility
**Learning:** Stateful toggle components like hamburger menus require specific ARIA attributes to be fully accessible. They must use dynamic `aria-expanded` and `aria-label`, explicitly link to their target containers via `aria-controls` with a matching `id`, and explicitly hide inner SVGs (like `lucide-react` icons) from screen readers using `aria-hidden="true"`.
**Action:** Always implement `aria-expanded`, `aria-label`, `aria-controls`, and `aria-hidden` on inner icons for toggle buttons. Also ensure there's a visible focus state for keyboard navigation.
