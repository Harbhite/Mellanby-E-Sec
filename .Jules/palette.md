UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-18 - State-driven Toggle Components and Accessibility
**Learning:** State-driven toggle components (like hamburger menus) require dynamic `aria-expanded` attributes, an explicit `aria-controls` linking to the container's ID, and `aria-hidden="true"` on inner `lucide-react` icons to prevent redundant screen reader announcements.
**Action:** Always verify `aria-expanded`, `aria-controls`, and `aria-hidden` attributes when adding or modifying toggle components or icon buttons.
