UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-18 - [Accessibility on State-Driven Toggles]
**Learning:** Found multiple mobile toggle buttons (hamburger menu, admin sidebar) lacking screen reader state visibility. When state toggles exist, just adding `aria-label` isn't enough; `aria-expanded` and `aria-controls` are crucial for screen readers to understand the link between the button and the content container.
**Action:** When adding ARIA to stateful toggle components, always include the trio: dynamic `aria-label`, dynamic `aria-expanded`, and static `aria-controls` linked to the target's `id`.
