UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-18 - Navbar Accessibility Enhancements
**Learning:** State-driven toggle components like hamburger menus require `aria-expanded` and `aria-controls` explicitly linking the toggle button to the target container's ID. Icon-only buttons or links need explicit `aria-label`s, and internal SVG icons should have `aria-hidden="true"` to prevent redundant screen reader announcements.
**Action:** Always verify keyboard accessibility (`focus-visible` styles) and proper ARIA states on all interactive toggle components and icon-only links across the application.
