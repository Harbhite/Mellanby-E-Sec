UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-15 - Hamburger Menu Accessibility
**Learning:** State-driven toggle components like hamburger menus require dynamic `aria-expanded` and `aria-label` attributes, as well as an `aria-controls` attribute explicitly linking the toggle button to the target container's ID. Inner SVG icons must be marked `aria-hidden="true"` to avoid redundant announcements.
**Action:** When adding accessibility to mobile menus, ensure these 4 things are always present: dynamic aria-label, aria-expanded reflecting state, aria-controls linking to the target ID, and focus-visible classes for keyboard navigation.
