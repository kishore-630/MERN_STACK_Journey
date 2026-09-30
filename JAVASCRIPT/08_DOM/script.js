// =========================================
// DOM MANIPULATION
// =========================================

// --- 1. SELECTING ELEMENTS ---

// By id (the fastest and most common way)
const heading = document.getElementById("heading");
const para = document.getElementById("para");

// querySelector uses CSS-style selectors and returns the FIRST match
const styleDemo = document.querySelector("#style-demo");

// querySelectorAll returns ALL matches (a NodeList, which works like an array)
const listItems = document.querySelectorAll("#list li");

const newItems = document.getElementById("new-items");
const output = document.getElementById("output");

function show(text) {
    output.textContent += text + "\n";
    console.log(text);
}

show("Found " + listItems.length + " list items with querySelectorAll");
show("Heading element found: " + heading.tagName);
show("Para element found: " + para.tagName);

// =============================================
// 2. CHANGING CONTENT
// =============================================
document.getElementById("btnText").addEventListener("click", function () {
    // textContent is the safe option - it always treats the value as plain text
    heading.textContent = "Text changed using textContent";

    // innerHTML can also render HTML tags
    para.innerHTML = "Text changed using <strong>innerHTML</strong> &mdash; now it is <em>bold</em>.";

    show("Button clicked: text was changed.");
});

// =============================================
// 3. CHANGING STYLES AND CLASSES
// =============================================
document.getElementById("btnStyle").addEventListener("click", function () {
    // You can change any CSS property through the style object
    styleDemo.style.color = "#d63384";
    styleDemo.style.fontSize = "26px";
    styleDemo.style.fontWeight = "bold";

    show("Button clicked: inline styles were changed.");
});

document.getElementById("btnClass").addEventListener("click", function () {
    // classList is the correct way to add or remove CSS classes
    // Using this is better than style.color because the CSS stays in the stylesheet.
    styleDemo.classList.toggle("highlight");

    // toggle adds the class if it is missing, removes it if it is there
    show("Button clicked: 'highlight' class toggled.");
});

document.getElementById("btnClass").addEventListener("dblclick", function () {
    heading.classList.toggle("blue-text");
});

// =============================================
// 4. CREATING AND ADDING NEW ELEMENTS
// =============================================
let counter = 3;

document.getElementById("btnAdd").addEventListener("click", function () {
    // Step 1: create a new element (it does not exist on the page yet)
    let newItem = document.createElement("li");
    newItem.textContent = "New item " + counter;

    // You can also add a class to the new element
    newItem.className = "added-item";

    // Step 2: add it to the page using appendChild or append
    document.getElementById("list").appendChild(newItem);

    // append() can add several things at once, and also plain text
    let note = document.createElement("p");
    note.textContent = "Item " + counter + " was added.";
    newItems.appendChild(note);

    counter++;
    show("Button clicked: a new list item was created and added.");
});

// =============================================
// 5. REMOVING ELEMENTS
// =============================================
document.getElementById("btnRemove").addEventListener("click", function () {
    // Find the element again, so this button keeps working after a reset
    let target = document.getElementById("remove-demo");

    // remove() takes the element completely out of the page
    if (target) {
        target.remove();
        show("Button clicked: the paragraph was removed.");
    }
});

// =============================================
// 6. RESET (so the demo can be tried again)
// =============================================
document.getElementById("btnReset").addEventListener("click", function () {
    heading.textContent = "This heading will change";
    para.innerHTML = "This paragraph will change too.";

    // remove the inline styles
    styleDemo.style.color = "";
    styleDemo.style.fontSize = "";
    styleDemo.style.fontWeight = "";

    // reset the list back to two items
    let list = document.getElementById("list");
    list.innerHTML = "<li>First item</li><li>Second item</li>";

    // empty a container using innerHTML = ""
    newItems.innerHTML = "";

    // put the removed paragraph back
    let back = document.createElement("p");
    back.id = "remove-demo";
    back.textContent = "I will be removed from the page.";
    document.querySelector(".demo-box").appendChild(back);

    counter = 3;
    output.textContent = "";
    show("Everything was reset.");
});

// =============================================
// 7. READING VALUES FROM INPUT FIELDS
// =============================================
// (Shown here as a concept - the live example is in 09_Events)
show("");
show("--- Useful properties ---");
show("textContent   - reads or writes the visible text");
show("innerHTML     - reads or writes text INCLUDING html tags");
show("value         - reads the current value of an <input> or <textarea>");
show("classList     - add(), remove(), toggle() CSS classes");
show("getAttribute() - reads an attribute like href or src");
show("appendChild() - adds a new element inside another element");
show("remove()      - deletes an element from the page");
