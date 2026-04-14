UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-04-14 - Mobile Menu Toggle Accessibility
**Learning:** Found that a state-driven toggle component like the hamburger menu lacked `aria-expanded`, `aria-label`, and explicit linking `aria-controls` to its dropdown, making it inaccessible for screen readers. It also lacked a proper focus ring (`focus-visible`).
**Action:** Always add dynamic `aria-expanded`, `aria-label`, `aria-controls`, and `focus-visible` to state-driven menu toggles, and use `aria-hidden="true"` on inner icons.
