UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2026-05-10 - Dynamic ARIA Attributes for Toggles
**Learning:** Screen readers require dynamic `aria-expanded` on toggle buttons, explicit `aria-controls` pointing to container IDs, and `aria-hidden="true"` on inner SVGs within icon-only buttons to prevent redundant announcements.
**Action:** Always pair stateful UI components (e.g., hamburger menus) with these ARIA attributes and add `focus-visible` classes to improve keyboard navigation.
