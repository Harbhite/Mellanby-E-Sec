UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.
## 2024-05-19 - Mobile Menu Toggle Accessibility
**Learning:** Icon-only stateful toggle buttons require robust ARIA attributes (aria-expanded, aria-controls, aria-label) and focus states, and their child SVG icons should be hidden (aria-hidden="true") to prevent redundant screen reader announcements.
**Action:** Always add aria-expanded, aria-controls (with a corresponding ID on the target container), aria-label, and focus-visible styling to custom toggle buttons, and hide inner decorative SVGs.
