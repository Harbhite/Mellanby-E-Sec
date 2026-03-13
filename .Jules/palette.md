UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-15 - Dynamic ARIA for state-driven toggle components
**Learning:** State-driven toggle components like mobile hamburger menus require dynamic `aria-expanded` and `aria-label` attributes to properly communicate their state to screen readers, along with an `aria-controls` attribute linking to the target container's ID. Without these, screen reader users cannot tell if the menu is open or what it controls.
**Action:** Always add dynamic `aria-expanded`, dynamic `aria-label`, and `aria-controls` to toggle buttons, and ensure the target container has a matching `id`.
