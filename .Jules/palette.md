UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-17 - Hamburger Menu Accessibility
**Learning:** State-driven toggle components like hamburger menus require dynamic `aria-expanded` and explicit `aria-controls` linking to their target dropdown container to be properly understood by screen readers, in addition to visible focus states.
**Action:** Always ensure that any `<button>` used to toggle a visual component has `aria-expanded` mapped to the state, `aria-controls` pointing to the target's ID, and `aria-hidden="true"` applied to its internal decorative SVG (like Lucide icons) to avoid redundant announcements.
