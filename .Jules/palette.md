UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2023-10-24 - Accessible Mobile Menu Toggle
**Learning:** State-driven toggle components like hamburger menus require dynamic `aria-expanded` attributes, a descriptive `aria-label` that changes based on state, and `aria-controls` to explicitly link the toggle to the dropdown container. Additionally, nested SVG icons must be marked with `aria-hidden="true"` to prevent redundant screen reader announcements.
**Action:** When creating or reviewing toggle buttons, always verify the presence of `aria-expanded`, dynamic `aria-label`, `aria-controls`, and `aria-hidden` on child icons, alongside visible focus states (`focus-visible`).
