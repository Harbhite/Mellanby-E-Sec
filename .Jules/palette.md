UX and Accessibility Learnings: Documented usage of lucide-react, Tailwind CSS, and HashRouter.

## 2024-05-07 - [Mobile Menu Accessibility]
**Learning:** For mobile menu toggles to be fully accessible, it is critical to dynamically update `aria-expanded` and `aria-label`, as well as properly link the button to the mobile menu container using `aria-controls` with a matching `id`. This ensures screen readers can announce state changes and understand the relationship between the toggle and the dropdown. Also, icons inside accessible buttons should be explicitly hidden from screen readers using `aria-hidden="true"`.
**Action:** When implementing interactive toggle components, always ensure `aria-expanded` accurately reflects state, add an explanatory `aria-label`, explicitly link controls via `aria-controls`, provide visible focus states (`focus-visible:ring-2`), and hide purely decorative inner elements (`aria-hidden="true"`).
