UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2025-02-20 - Dynamic Accessibility for State-Driven Toggles
**Learning:** State-driven toggle components (like a hamburger menu) require explicit dynamic attributes (`aria-expanded`, `aria-controls`) and hidden inner decorative icons (`aria-hidden="true"`) to prevent redundant screen reader announcements while providing an intuitive, keyboard-navigable experience.
**Action:** Always link a toggle button explicitly to its target container using `id` and `aria-controls`, and dynamically update `aria-expanded` and `aria-label` based on state.
