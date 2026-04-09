UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-03-11 - Mobile Menu Button Accessibility
**Learning:** React state-driven components (like hamburger menus) require dynamic `aria-expanded` attributes and dynamic `aria-label` values to keep screen readers synchronized with visual changes. The `aria-controls` attribute is essential to explicitly link a toggle button with the menu container it shows/hides.
**Action:** Always add `aria-expanded`, dynamic `aria-label`, and `aria-controls` to toggle buttons alongside visual indicators, and ensure child icons have `aria-hidden="true"`.
