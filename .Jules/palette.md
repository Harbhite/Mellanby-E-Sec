UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-17 - Dynamic Accessibility for Mobile Menus
**Learning:** For mobile menu toggles and dynamic UI sections, it is crucial to link the toggle button to the expanding container using `aria-controls="[id]"` and dynamically update `aria-expanded` (true/false) alongside managing keyboard focus visible rings. Without this, screen readers cannot associate the toggle action with the content that appears. Also, static selectors are much safer for visual verification tests since `aria-expanded` values change continuously.
**Action:** Always ensure dynamic toggle components manage both `aria-expanded` and `aria-controls` simultaneously, and update standard `focus-visible:ring-2 focus-visible:ring-[#c5a059]` for keyboard navigation.
