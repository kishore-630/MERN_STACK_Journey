# Mini Projects

Three small projects that put several JavaScript concepts together.
Each one is a **single HTML file** &mdash; no setup, no libraries, no build step.
Just open the file in a browser.

| File | What it practises | Concepts used |
|---|---|---|
| `counter.html` | Increase, decrease and reset a number | `let` variables, `addEventListener`, `textContent`, keyboard events |
| `calculator.html` | Full working calculator | `querySelectorAll`, `parseFloat`, `switch`, state variables, Grid CSS, keyboard support |
| `todo.html` | Add, complete and delete tasks | Arrays of objects, `push()`, `filter()`, `forEach()`, `createElement`, event delegation pattern |

### How to run

Double-click any `.html` file, or drag it into your browser. That is all.

### What to study in each project

**`counter.html`** — start here if you are a beginner.
Read `updateDisplay()`. Notice how a JavaScript variable and a piece of HTML text
are kept in sync.

**`calculator.html`** — the important idea is **state**.
`currentInput`, `previousValue` and `operator` are three variables that
describe "where the calculator is right now". Every button click changes
that state and then calls `updateDisplay()`.

**`todo.html`** — the important idea is the **render function**.
All the HTML is rebuilt from the `tasks` array every time something changes.
This is called "re-render from state", and it is one of the most important
patterns in Front-End development.

### Try it yourself

- **Counter** &mdash; add a "Reset to 10" button, or stop the count going below 0.
- **Calculator** &mdash; add a "×" for multiply, or keyboard numbers.
- **To-do** &mdash; save the list with `localStorage` so it survives a refresh,
  then edit a task by double clicking its text.

### Next step

These three use only `var`-free modern JavaScript and the DOM.
When you are comfortable, the next thing to learn is **React**,
where you describe what the page should look like and the framework handles the updates for you.
