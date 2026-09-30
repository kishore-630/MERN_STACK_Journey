# Events

This example shows how JavaScript reacts to user actions on a page.

### Concepts Covered

- `element.addEventListener("eventName", function () { ... })`
- Reading input values with `input.value`
- `event.target` — the element where the event happened
- `event.preventDefault()` — stop the default browser behaviour
- `event.key` — which key was pressed
- Form validation on the `submit` event
- `return` inside a function to stop further code
- Mouse events — `mouseover`, `mouseout`, `click`, `dblclick`

### Common Events

| Event | Fires when |
|---|---|
| `click` | Element is clicked |
| `input` | User types in a text field (every keystroke) |
| `change` | Value of a dropdown/checkbox is finished changing |
| `submit` | Form is submitted |
| `keydown` | A key is pressed |
| `mouseover` / `mouseout` | Pointer enters / leaves an element |
| `focus` / `blur` | Input gains / loses focus |

### `input` vs `change`

- `input` fires on **every keystroke** &mdash; use it for live search or character counters.
- `change` fires **after** the value is finished &mdash; use it for dropdowns and checkboxes.

### The most important line in this example

```js
event.preventDefault();
```

Without it, submitting a form reloads the whole page and wipes out your JavaScript state.
Call it first inside any `submit` listener.

### How to view it

Open `index.html` and try each control. Watch the event log at the bottom.
