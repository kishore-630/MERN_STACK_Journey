// =========================================
// EVENTS
// =========================================

const output = document.getElementById("output");

function show(text) {
    output.textContent += text + "\n";
    console.log(text);
}

// =============================================
// 1. SIMPLE CLICK EVENT
// =============================================
const clickBtn = document.getElementById("clickBtn");
const clickResult = document.getElementById("clickResult");

let clickCount = 0;

clickBtn.addEventListener("click", function () {
    clickCount++;
    clickResult.textContent = "Button clicked " + clickCount + " time(s)!";
    show("click event fired. Count = " + clickCount);
});

// =============================================
// 2. INPUT EVENT
// The "input" event fires on EVERY keystroke.
// input.value reads whatever the user has typed right now.
const typedInput = document.getElementById("typed");
const typedResult = document.getElementById("typedResult");

typedInput.addEventListener("input", function (event) {
    // event.target is the element where the event happened
    const text = event.target.value;

    if (text === "") {
        typedResult.textContent = "Your text will appear here.";
    } else {
        typedResult.textContent = "You typed: " + text + " (" + text.length + " characters)";
    }
});

// =============================================
// 3. CHANGE EVENT
// "change" fires only AFTER the value is finished,
// so it is right for dropdowns and checkboxes.
const courseSelect = document.getElementById("course");
const courseResult = document.getElementById("courseResult");

courseSelect.addEventListener("change", function (event) {
    courseResult.textContent = "You selected: " + event.target.value;
    show("change event fired. Selected: " + event.target.value);
});

// =============================================
// 4. KEYBOARD EVENT
// event.key gives the name of the key that was pressed.
const keyInput = document.getElementById("keyInput");
const keyResult = document.getElementById("keyResult");

keyInput.addEventListener("keydown", function (event) {
    // Only allow capital letters
    if (event.key >= "a" && event.key <= "z") {
        // event.preventDefault() stops the browser from typing that character
        event.preventDefault();
        keyResult.textContent = "Only capital letters are allowed!";
        keyResult.className = "error";
    } else {
        keyResult.textContent = "Key pressed: " + event.key;
        keyResult.className = "success";
    }
});

// =============================================
// 5. FORM SUBMIT EVENT + VALIDATION
// =============================================
const form = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
    // IMPORTANT: stop the form from reloading the page.
    // Without this, the whole page refreshes on submit.
    event.preventDefault();

    // Read the values the user entered
    const name = document.getElementById("fname").value.trim();
    const email = document.getElementById("femail").value.trim();
    const age = document.getElementById("fage").value.trim();

    // Validate each field
    if (name === "") {
        formMessage.textContent = "Please enter your name.";
        formMessage.className = "error";
        return;   // "return" stops the function here, so nothing below runs
    }

    // A simple email check using the .includes() method
    if (!email.includes("@") || !email.includes(".")) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.className = "error";
        return;
    }

    if (age !== "" && (age < 10 || age > 60)) {
        formMessage.textContent = "Age must be between 10 and 60.";
        formMessage.className = "error";
        return;
    }

    // If we reach here, everything is valid
    formMessage.textContent = "Registration successful! Welcome, " + name + ".";
    formMessage.className = "success";

    show("Form submitted successfully for: " + name + " / " + email);

    // Clear the form for the next entry
    form.reset();
});

// =============================================
// 6. MOUSE EVENTS
// =============================================
const mouseArea = document.getElementById("mouseArea");
const mouseResult = document.getElementById("mouseResult");

// Fires when the pointer moves over the element
mouseArea.addEventListener("mouseover", function () {
    mouseArea.style.backgroundColor = "#d0ebff";
    mouseArea.textContent = "Mouse is over this box.";
    mouseResult.textContent = "mouseover event fired.";
    show("mouseover fired");
});

// Fires when the pointer leaves the element
mouseArea.addEventListener("mouseout", function () {
    mouseArea.style.backgroundColor = "#f1f3f5";
    mouseArea.textContent = "Move your mouse over this box, then click it.";
    show("mouseout fired");
});

// Fires on a single click
mouseArea.addEventListener("click", function () {
    mouseResult.textContent = "The box was clicked!";
    show("click fired on the mouse area");
});

// The same event, written with a shorter arrow function.
document.getElementById("clickBtn").addEventListener("dblclick", () => {
    show("Double click event fired.");
});

show("Event listeners are ready. Try the controls on the page.");
