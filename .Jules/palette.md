UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-18 - Stateful Toggle Accessibility & Focus States
**Learning:** For state-driven toggle components like mobile hamburger menus, standard structural accessibility (like `aria-label`) is insufficient. They critically require dynamic `aria-expanded` properties to communicate state changes to screen readers, and `aria-controls` explicitly linking to the target container's ID. Additionally, explicit `focus-visible:ring-2` styles must be applied, as default browser outlines are often suppressed or invisible against the app's dark `#1a2a40` background.
**Action:** When creating or reviewing toggle buttons (menus, accordions, modals), strictly enforce the presence of `aria-expanded`, `aria-controls` referencing a valid ID, and high-contrast `focus-visible` styling matching the brand gold (`#c5a059`).
