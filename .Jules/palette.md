UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2025-04-07 - Accessible Mobile Menu Toggle
**Learning:** When using stateful toggle components like hamburger menus in React, using state-dependent attributes (like `aria-label` changing between "Open menu" and "Close menu") alongside dynamic `aria-expanded` attributes improves screen reader clarity. Furthermore, linking the toggle button to the target container with `aria-controls` explicitly establishes the relationship for assistive technologies.
**Action:** Always ensure dynamic toggle buttons include `aria-expanded`, an accurate `aria-label`, and use `aria-controls` to point to the `id` of the controlled element.
