UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-04-12 - Accessible Mobile and Secondary Navigation
**Learning:** For hamburger menus and secondary icon-only navigation, it's critical to add explicit `aria-expanded`, `aria-controls` for menus, `aria-label` for icon-only buttons, inner icon `aria-hidden="true"`, and visible focus rings `focus-visible:ring-2` to support screen readers and keyboard navigation.
**Action:** Always add ARIA roles, controls, expanded state, explicitly hide decorative icons, and provide visible focus rings to non-text interactive elements like hamburger menus and secondary navigation links.
