UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2025-03-08 - Stateful Toggle Accessibility
**Learning:** Hamburger menus and sidebars require robust ARIA relationships (`aria-expanded`, `aria-controls`, and `aria-label`). Inner SVG icons in these buttons must also use `aria-hidden="true"` to avoid redundant screen reader announcements. Using resilient selectors like `aria-controls` is more reliable for state-dependent toggles than `aria-label` when verifying with Playwright.
**Action:** When implementing or modifying any toggleable UI component (like a dropdown menu, sidebar, or accordion), ensure it correctly sets and updates `aria-expanded` while referencing the content container using `aria-controls`. Ensure inner icon-only SVG files are hidden from screen readers.
