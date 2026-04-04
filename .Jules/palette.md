UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2025-02-28 - Hamburger Menu Accessibility
**Learning:** State-driven toggle components like hamburger menus require a specific combination of ARIA attributes (`aria-expanded`, `aria-controls`) and visually hidden elements (`aria-hidden="true"` on inner icons) to be fully accessible to screen readers, preventing redundant announcements while accurately conveying state.
**Action:** Always ensure that when implementing or updating toggle buttons, especially those using icon-only representations (e.g., from `lucide-react`), to include `aria-expanded` tied to the state, an `aria-controls` referencing the target container's ID, a descriptive `aria-label`, and `aria-hidden="true"` on the inner SVG components.
