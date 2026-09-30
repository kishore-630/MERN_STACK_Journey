# Responsive Design

This example demonstrates how to make a page adapt to different screen sizes.

### Concepts Covered

- The **viewport meta tag** (required for mobile)
- Relative units — `%`, `vw`, `vh`, `rem`, `em`
- `clamp(min, preferred, max)` — smooth resizing without media queries
- `min()` and `max()` — cap a value automatically
- `max-width` — stop content from stretching too wide
- Responsive images — `max-width: 100%; height: auto`
- **Media queries** — `@media (max-width: 768px)`
- Flexbox that wraps on its own — `flex: 1 1 200px`
- Grid layout that stacks on mobile

### Mobile-first approach

Write the styles for a **small screen first**, then add extra rules for bigger screens.
This is why most examples here use `max-width` instead of `min-width`.

```css
/* base styles for mobile */
.card { width: 100%; }

/* then improve it on larger screens */
@media (min-width: 768px) {
    .card { width: 50%; }
}
```

### How to test it

Open `index.html` in your browser, then **drag the browser window narrower**
(or use the browser's device toolbar). Watch the media query box change color.

### Try it yourself

- Change the `480px` breakpoint to `700px` and see what happens.
- Add `flex: 1 1 150px` to the cards and compare.
