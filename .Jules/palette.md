UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-15 - Interactive Custom Toggles Need Aria
**Learning:** For custom menu toggles (e.g. mobile menu buttons or sidebar open/close buttons) in this app's components, missing `aria-label`, `aria-expanded` and visible focus states (e.g. `focus-visible:ring-2`) degrade keyboard navigation and screen reader experience.
**Action:** Always add `aria-expanded`, `aria-label`, and `focus-visible:ring-2` alongside standard `hover` states when implementing or refactoring custom toggle buttons.
