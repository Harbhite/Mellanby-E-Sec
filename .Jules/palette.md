UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2026-03-28 - Mobile Menu ARIA Controls
**Learning:** When using conditional rendering for dropdown menus (like the mobile menu), `aria-controls` on the toggle button will temporarily point to an invalid ID when the menu is closed. While using CSS `display: none` is strictly more compliant for ARIA, conditional rendering is a common React pattern and is acceptable, as long as `aria-expanded` and `aria-label` are dynamically updated.
**Action:** Continue using conditional rendering for performance/cleanliness, but ensure that `aria-expanded` and `aria-label` accurately reflect the state, and use `aria-hidden="true"` on inner SVG icons to prevent redundant screen reader announcements.
