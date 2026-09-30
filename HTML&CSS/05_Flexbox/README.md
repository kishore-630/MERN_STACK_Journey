# Flexbox

This example demonstrates how to arrange elements in a row or a column using **CSS Flexbox**.

### Concepts Covered

- `display: flex` and `display: inline-flex`
- `flex-direction` — `row`, `column`, `row-reverse`
- `justify-content` — `flex-start`, `center`, `space-between`, `space-around`, `space-evenly`
- `align-items` — `flex-start`, `center`, `stretch`
- `gap` — spacing between items without using margins
- `flex-wrap` — move items to the next line when there is not enough space
- `flex-grow`, `flex-shrink`, `flex-basis`
- `flex: 1` — let an item fill the remaining space

### The Two Most Important Ideas

1. **Main axis** — controlled by `flex-direction`.
   For a row it is horizontal (use `justify-content`).
   For a column it is vertical (use `justify-content`).
2. **Cross axis** — always the opposite direction. Controlled by `align-items`.

### How to view it

Open `index.html` in your browser. Each demo has a label showing which property it tests.

### Try it yourself

- Change `flex-direction: row` to `column` on the first demo. What changes?
- Set `justify-content: space-between` on the profile example.
- Add `flex-wrap: wrap` to the profile and shrink your browser window.
