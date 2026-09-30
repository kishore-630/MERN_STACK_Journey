# DOM Manipulation

This example shows how JavaScript finds elements on a page and changes them.

### Concepts Covered

**Selecting elements**
- `document.getElementById("id")`
- `document.querySelector(".class")` — returns the first match
- `document.querySelectorAll("li")` — returns all matches

**Changing content**
- `element.textContent = "..."` — safe, plain text only
- `element.innerHTML = "..."` — also renders HTML tags

**Changing styles and classes**
- `element.style.color = "red"` — direct inline style
- `element.classList.add("highlight")` — better, keeps CSS in the stylesheet
- `element.classList.remove(...)` and `classList.toggle(...)`

**Creating and removing elements**
- `document.createElement("li")`
- `parent.appendChild(newElement)`
- `element.remove()`

**Reading form values**
- `input.value` — reads what the user typed

### textContent vs innerHTML

| | `textContent` | `innerHTML` |
|---|---|---|
| Plain text | ✅ safe | ✅ |
| HTML tags | ❌ shown as text | ✅ rendered |
| Risk | none | unsafe with user input |

**Always use `textContent` when the text comes from a user.**
It prevents a user from injecting HTML or scripts into your page (XSS).

### How to view it

Open `index.html` and click the buttons one by one.
Open the console (`F12`) to see each action logged.

### Try it yourself

- Add a button that changes the paragraph to `display: none` (hides it).
- Use `querySelectorAll` to count the list items and print the count.
