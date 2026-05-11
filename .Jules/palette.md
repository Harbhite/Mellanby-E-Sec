UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-11-20 - Ensure hamburger menus have correct accessible states
**Learning:** State-driven toggle components like hamburger menus need resilient accessibility attributes linked to their state.
**Action:** When creating or modifying dynamic toggles, explicitly add `aria-expanded` and conditionally render `aria-label` based on state, along with `aria-controls` explicitly linked to the target container's ID. Ensure inner SVG icons are explicitly marked with `aria-hidden="true"`.
