UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-10-24 - [Stateful Toggle Accessibility]
**Learning:** For state-driven toggle components (like hamburger menus) in this application, it's critical to dynamically set `aria-expanded` and link the toggle to its container via `aria-controls` with an explicit ID. Furthermore, inner SVGs (from lucide-react) should have `aria-hidden="true"` to stop screen readers from redundantly announcing the graphic when the parent button already has a descriptive `aria-label`.
**Action:** Always verify that interactive icon-only toggles have `aria-label`, `aria-expanded`, and an explicit ID for `aria-controls`, and hide the inner SVGs. Test focus visibility carefully for custom colors (e.g., `focus-visible:ring-[#c5a059]`).
