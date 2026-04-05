UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2025-05-18 - Mobile Menu Toggle Accessibility & Icon-Only Links
**Learning:** Stateful toggle components like mobile hamburger menus need resilient accessibility. Using `aria-expanded` and explicit `aria-controls` linked to the target's ID is essential. For icon-only links, inner SVGs should be marked with `aria-hidden="true"` to prevent redundant screen reader announcements while `aria-label` provides context on the parent.
**Action:** Always implement `aria-expanded`, `aria-label`, `aria-controls`, and `focus-visible:ring-2` on toggle components, and hide inner decorative icons (`aria-hidden="true"`) for icon-only buttons or links.
