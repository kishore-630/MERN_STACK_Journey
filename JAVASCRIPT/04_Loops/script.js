// =========================================
// LOOPS
// =========================================

const output = document.getElementById("output");

function show(text) {
    output.textContent += text + "\n";
    console.log(text);
}

// --- 1. for LOOP ---
// Use this when you know how many times to repeat.
show("--- 1. for loop (1 to 5) ---");

// Three parts separated by semicolons:
//   let i = 1  -> start value
//   i <= 5     -> condition (loop runs while this is true)
//   i++        -> what to change after every repetition
for (let i = 1; i <= 5; i++) {
    show("i = " + i);
}

// Printing a multiplication table using a for loop
show("");
show("--- for loop: table of 5 ---");

for (let i = 1; i <= 5; i++) {
    show("5 x " + i + " = " + 5 * i);
}

// Looping backwards
show("");
show("--- for loop going down (5 to 1) ---");

for (let i = 5; i >= 1; i--) {
    show(i);
}

// Skipping numbers using i += 2
show("");
show("--- for loop stepping by 2: 0, 2, 4, 6, 8 ---");

for (let i = 0; i <= 8; i += 2) {
    show(i);
}

// --- 2. while LOOP ---
// Use this when you do not know the number of repetitions in advance.
show("");
show("--- 2. while loop (countdown) ---");

let count = 5;

while (count > 0) {
    show(count);
    count--;  // IMPORTANT: without this the loop never ends
}

show("Liftoff!");

// --- 3. do...while LOOP ---
// The body runs at least ONCE, even if the condition is already false.
show("");
show("--- 3. do...while ---");

let userInput = 0; // if this was 10, the while part would never run
let attempts = 0;

do {
    attempts++;
    show("Attempt number " + attempts);
    userInput++;
} while (userInput < 3);

show("Total attempts: " + attempts);

// --- 4. for...of LOOP (best for arrays) ---
// Gives you the VALUE of each item directly.
show("");
show("--- 4. for...of loop (array values) ---");

let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let fruit of fruits) {
    show(fruit);
}

// --- 5. for...in LOOP (best for objects) ---
// Gives you the KEY (property name) of each item.
show("");
show("--- 5. for...in loop (object keys) ---");

let student = {
    name: "Kishore",
    age: 21,
    course: "CSE"
};

for (let key in student) {
    show(key + " -> " + student[key]);
}

// --- 6. break ---
// Stops the loop completely and jumps out of it.
show("");
show("--- 6. break (stop the loop) ---");

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        show("Found 5! Stopping the loop.");
        break;
    }
    show(i);
}

// --- 7. continue ---
// Skips the rest of this repetition and moves to the next one.
show("");
show("--- 7. continue (skip this one) ---");

for (let i = 1; i <= 6; i++) {
    if (i % 2 === 0) {
        continue;  // skip all even numbers
    }
    show("Odd number: " + i);
}

// --- 8. NESTED LOOPS ---
// A loop inside a loop. The inner loop finishes for every single outer repetition.
show("");
show("--- 8. Nested loops (table shape) ---");

for (let row = 1; row <= 3; row++) {
    let line = "";
    for (let col = 1; col <= 4; col++) {
        line += col + " ";
    }
    show("Row " + row + ": " + line);
}
