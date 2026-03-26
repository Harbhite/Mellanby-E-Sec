UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-15 - Add ARIA attributes to stateful toggle components
**Learning:** Stateful toggle components like hamburger menus must include `aria-expanded` and `aria-label` to communicate their current state, and `aria-controls` explicitly linking the toggle to the target container's ID. Icon-only buttons should also have inner icons marked `aria-hidden="true"`.
**Action:** Always add state-dependent ARIA properties and focus rings to toggle elements for keyboard and screen-reader accessibility.
