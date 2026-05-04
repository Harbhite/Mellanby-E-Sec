UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-18 - Stateful Toggle Accessibility
**Learning:** For stateful toggle components like the mobile hamburger menu, dynamic `aria-expanded` and `aria-label` attributes, as well as an `aria-controls` attribute linking to the target container's ID, are essential for screen reader users to understand the current state and what the button controls. Additionally, inner SVG icons like `<X />` and `<Menu />` must have `aria-hidden="true"` to prevent redundant announcements.
**Action:** Always ensure toggle buttons include `aria-expanded`, `aria-controls`, a dynamic `aria-label`, and `aria-hidden="true"` on inner icons. Also ensure `focus-visible:ring` is used for keyboard navigation visibility.
