UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2023-10-25 - State-Driven Toggle Accessibility Pattern
**Learning:** For mobile menu toggles and other state-driven components, it's not enough to just add `aria-label`. We must explicitly connect the state to screen readers using dynamic attributes like `aria-expanded={isOpen}` and explicitly link the control to the target using `aria-controls="target-id"`.
**Action:** When implementing hamburger menus or accordions, ensure `aria-expanded` and `aria-controls` are paired, and add a corresponding `id` to the toggled container.
