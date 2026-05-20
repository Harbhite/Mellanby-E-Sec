UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-18 - Mobile Menu Toggle Accessibility
**Learning:** State-driven toggle components like hamburger menus must dynamically link their control button to the target container using `aria-controls` matching the target's ID, and dynamically update `aria-expanded`.
**Action:** Always include `aria-controls`, `aria-expanded`, and descriptive dynamic `aria-label`s on mobile menu toggle buttons. Additionally, add `aria-hidden="true"` on inner SVG icons and provide visible focus indicators matching the brand color.
