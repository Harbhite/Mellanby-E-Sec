UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2023-10-24 - Mobile Menu Toggle Accessibility
**Learning:** State-driven toggle components like the mobile hamburger menu require dynamic `aria-expanded` attributes, an explicit `aria-controls` linking to the dropdown's ID, and `aria-hidden="true"` on the decorative internal SVG icons to ensure screen readers correctly interpret the element's state and purpose.
**Action:** Always include `aria-controls`, dynamic `aria-expanded`, dynamic `aria-label` (if icon-only), and `aria-hidden` on internal SVGs when building or modifying stateful toggle components. Also ensure keyboard users have visible focus indicators (`focus-visible:ring-2`).
