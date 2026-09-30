# Positioning

This example demonstrates the CSS `position` property and its five values.

### Concepts Covered

- `position: static` — the default, normal document flow
- `position: relative` — stays in flow but can be shifted with top/left/right/bottom
- `position: absolute` — removed from flow, positioned inside a `relative` parent
- `position: fixed` — stays in the same place on the **screen** while scrolling
- `position: sticky` — scrolls normally, then sticks when you scroll past it
- `z-index` — controls which element appears on top when they overlap

### Key idea

`position: absolute` and `position: fixed` need a **reference point**:

- **absolute** → looks for the nearest ancestor with `position: relative`
- **fixed** → always uses the viewport (the screen)

### Common mistake to avoid

A `position: fixed` navbar or button will cover your content.
Always add bottom padding to the page:

```css
body {
    padding-bottom: 100px;
}
```

### How to view it

Open `index.html` in your browser, then **scroll down** to see the `fixed` and `sticky` examples working.
