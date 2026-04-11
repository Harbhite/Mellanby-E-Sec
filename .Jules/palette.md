UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-18 - Navbar Accessibility
**Learning:** Adding accessibility attributes (`aria-label`, `aria-hidden`, `aria-controls`, `aria-expanded`) and visible focus styles (`focus-visible:ring-2`) to navigation elements (both desktop icon links and mobile hamburger menus) significantly improves keyboard and screen reader navigation without altering visual design for mouse users.
**Action:** Always ensure stateful toggle buttons have `aria-expanded` and `aria-controls`, and icon-only interactive elements have clear `aria-label` and `aria-hidden` on inner decorative SVGs.
