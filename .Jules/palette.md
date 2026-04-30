UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-14 - Accessible State-Driven Toggle Components
**Learning:** When making state-driven toggle components accessible, testing via Playwright becomes difficult if selectors rely on dynamic attributes like `aria-label` which change upon interaction. Playwright will timeout waiting for the locator that matches the previous state.
**Action:** Use resilient locators like `aria-controls` for UI components that toggle their state, to ensure tests don't break when properties like `aria-label` dynamically change based on component state.
