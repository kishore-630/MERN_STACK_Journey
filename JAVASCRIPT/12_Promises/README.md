# Promises and Async/Await

This example explains how JavaScript handles work that takes time, such as loading data from a server.

### Concepts Covered

- The three Promise states — `pending`, `fulfilled`, `rejected`
- Creating a promise — `new Promise(function (resolve, reject) { ... })`
- `resolve()` vs `reject()`
- `.then()`, `.catch()`, `.finally()`
- Callbacks vs Promises
- Chaining — `.then().then().then()`
- `Promise.all()` — wait for all
- `Promise.race()` — first one to finish wins
- `async` / `await` and `try` / `catch`

### The core idea

JavaScript runs one line at a time. If a line takes 2 seconds (like a network request),
you cannot just "wait" normally — that would freeze the whole page.

A Promise represents that waiting result. `async/await` is a cleaner way to write the
same thing as `.then()` chains.

```js
// Promise style
fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

// async/await style - same behaviour, easier to read
async function load() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
```

### Golden rule

> Always handle errors. Every Promise chain should end with a `.catch()`
> or be wrapped in `try` / `catch`. Otherwise a small failure becomes an
> unreadable error in the console.

### How to view it

Open `index.html`. The output is printed in order of completion, so the
numbers in the log will not match the order of the code — that is expected,
and it is the whole point of async code.
