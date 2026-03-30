UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-10-25 - State-driven Toggle Components Accessibility
**Learning:** For state-driven toggle components (like hamburger menus), accessibility standards require dynamic `aria-expanded` attributes, an explicit `aria-controls` attribute linking to the target container's ID, and `aria-label` attributes.
**Action:** Always ensure that interactive toggle buttons have `aria-expanded` bound to their state, point to their respective containers using `aria-controls`, provide descriptive `aria-label` attributes, and use resilient selectors when writing E2E tests for them.
