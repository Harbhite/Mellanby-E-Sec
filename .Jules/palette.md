UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2025-04-20 - Accessible Mobile Menu Toggle
**Learning:** State-driven toggle components like hamburger menus must have dynamic `aria-expanded` reflecting their state, an `aria-controls` linking them to the target container's ID, and their inner decorative icons explicitly hidden using `aria-hidden="true"`.
**Action:** Always include `aria-expanded`, `aria-controls`, and `aria-hidden` on SVGs when implementing interactive toggles that show/hide content to ensure correct screen reader announcements.
