UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2026-04-18 - Accessible Mobile Menu Toggle
**Learning:** For state-driven toggle components (like hamburger menus), dynamic `aria-expanded` and `aria-label` are critical. Additionally, `aria-controls` should explicitly link the toggle button to the target container's ID, and inner SVG icons must have `aria-hidden="true"` to prevent redundant screen reader announcements.
**Action:** When creating or modifying stateful toggle buttons, ensure `aria-expanded`, dynamic `aria-label`, and `aria-controls` are present, and hide inner SVG icons from assistive technologies.
