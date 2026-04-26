UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-23 - Dynamic Toggle Accessibility and Playwright Testing
**Learning:** For stateful toggle components (like hamburger menus), accessibility standards require dynamic `aria-expanded` tied to the state, and `aria-controls` pointing to the target container's ID. When using Playwright to test these stateful components, use resilient selectors like `[aria-controls="mobile-menu"]` instead of state-dependent attributes like `aria-label` which may change dynamically during interaction. Also, decorative inner SVG icons must be explicitly marked with `aria-hidden="true"` to prevent redundant screen reader announcements.
**Action:** Always include `aria-expanded`, `aria-controls`, and `aria-label` for toggle buttons, and mark inner icons with `aria-hidden="true"`. Use robust selectors (`aria-controls`) in UI automation tests to avoid flakiness when attributes change.
