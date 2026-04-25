UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2026-04-25 - Dynamic Accessibility Attributes for Stateful Toggles
**Learning:** When implementing stateful toggle components like a hamburger menu, static `aria-label` attributes are insufficient. The attributes must dynamically reflect the state (e.g., `aria-expanded`) and the action (e.g., `aria-label` switching between 'Open' and 'Close').
**Action:** Always bind `aria-expanded` to the toggle state boolean and use a ternary for `aria-label` to clearly communicate the current action to screen readers. Ensure `aria-controls` maps to the `id` of the toggled container.
