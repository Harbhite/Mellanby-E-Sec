UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-25 - Dynamic ARIA attributes on Hamburger Menu
**Learning:** For a state-driven toggle like a mobile hamburger menu, standard ARIA practices require explicitly defining dynamic properties (`aria-expanded` and `aria-label`) on the trigger `<button>`, mapping `aria-controls` to the conditional `<div>`'s `id`, and hiding interior decorative icons (`<Menu>`, `<X>`) with `aria-hidden="true"` so that screen readers don't read the icon names on top of the button label.
**Action:** When working on navigation components or dialogs, always ensure toggle controls define state explicitly and map perfectly to their controlled elements. Apply `focus-visible` styling (`focus-visible:ring-2`) to keep focus styles visible to keyboard users even when the button hides normal focus (`focus:outline-none`).
