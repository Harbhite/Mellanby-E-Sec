UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-04-27 - Icon-only Toggle Accessibility
**Learning:** Icon-only navigation and toggle components (like the hamburger menu) in this app frequently omit ARIA linkages (`aria-expanded`, `aria-controls`) and visible focus states, hindering accessibility for screen readers and keyboard users.
**Action:** When working on similar navigation components, always ensure dynamic `aria-expanded` attributes reflect the state, use `aria-controls` to link the toggle to its container, add `focus-visible` styles matching the brand's primary color (`#c5a059`), and hide decorative icons with `aria-hidden="true"`.
