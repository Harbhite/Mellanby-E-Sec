UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-11-20 - Dynamic ARIA attributes for state-driven toggles
**Learning:** For state-driven toggle components (like hamburger menus), it's crucial to use resilient ARIA attributes. Hardcoding `aria-label` is insufficient because the state changes.
**Action:** Use dynamic `aria-expanded` and `aria-label` attributes, and link the toggle button to the target container's ID using `aria-controls`. Also, ensure inner SVG icons are marked `aria-hidden="true"` to avoid redundant screen reader announcements.
