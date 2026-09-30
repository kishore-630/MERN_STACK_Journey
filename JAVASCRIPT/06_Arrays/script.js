// =========================================
// ARRAYS
// =========================================

const output = document.getElementById("output");

function show(text) {
    output.textContent += text + "\n";
    console.log(text);
}

// --- 1. CREATING AN ARRAY ---
show("--- 1. Creating an array ---");

let fruits = ["Apple", "Banana", "Mango"];
let numbers = [10, 20, 30, 40];
let mixed = ["Kishore", 21, true]; // an array can hold different types

show("fruits  = " + fruits);
show("numbers = " + numbers);
show("mixed   = " + mixed);

// An empty array, ready to fill later
let empty = [];
show("empty   = " + empty + " (length " + empty.length + ")");

// --- 2. ACCESSING ITEMS ---
// The first position is 0, not 1.
show("");
show("--- 2. Accessing items ---");
show("fruits[0] = " + fruits[0] + "  (first item)");
show("fruits[2] = " + fruits[2] + "  (third item)");
show("fruits.length = " + fruits.length + "  (how many items)");

// To get the LAST item, subtract 1 from the length
show("fruits[fruits.length - 1] = " + fruits[fruits.length - 1] + "  (last item)");

// --- 3. ADDING AND REMOVING ---
show("");
show("--- 3. Adding and removing ---");

fruits.push("Orange");        // add to the end
show("After push('Orange')       -> " + fruits);

fruits.unshift("Grapes");     // add to the start
show("After unshift('Grapes')    -> " + fruits);

let removedLast = fruits.pop();   // remove from the end
show("pop() removed '" + removedLast + "' -> " + fruits);

let removedFirst = fruits.shift();  // remove from the start
show("shift() removed '" + removedFirst + "' -> " + fruits);

// --- 4. UPDATING AN ITEM ---
show("");
show("--- 4. Updating an item ---");

numbers[1] = 25;   // replace the second item
show("After numbers[1] = 25 -> " + numbers);

// --- 5. SEARCHING ---
show("");
show("--- 5. Searching ---");

show("numbers.indexOf(30)  = " + numbers.indexOf(30) + "  (position of 30)");
show("numbers.indexOf(99)  = " + numbers.indexOf(99) + "  (-1 means not found)");
show("numbers.includes(40) = " + numbers.includes(40));
show("numbers.includes(99) = " + numbers.includes(99));

// --- 6. SLICE (makes a copy, does not change the original) ---
show("");
show("--- 6. slice(start, end) ---");
show("Original: " + numbers);
// slice takes the items from "start" up to (but NOT including) "end"
show("numbers.slice(0, 2) = " + numbers.slice(0, 2));
show("numbers.slice(2)    = " + numbers.slice(2));

// --- 7. CONCAT (joins two arrays) ---
show("");
show("--- 7. concat() ---");

let more = [50, 60];
let combined = numbers.concat(more);

show("numbers = " + numbers);
show("more    = " + more);
show("Combined = " + combined);

// The spread operator does the same thing
let combined2 = [...numbers, ...more];
show("Using spread [...] = " + combined2);

// --- 8. forEach ---
// Runs a function once for each item. Returns nothing.
show("");
show("--- 8. forEach() ---");

fruits.forEach(function (fruit, index) {
    show(index + ": " + fruit);
});

// The shorter arrow function version
show("Using arrow function:");
fruits.forEach((fruit, index) => show("  " + index + ": " + fruit));

// --- 9. map() ---
// Transforms every item and returns a NEW array.
show("");
show("--- 9. map() ---");

let prices = [100, 250, 400];

// Add 10% discount to every price
let discounted = prices.map(function (price) {
    return price * 0.9;
});

show("Original prices: " + prices);
show("After 10% off:  " + discounted);

// A very common use: converting an array of objects into an array of names
let students = [
    { name: "Kishore", age: 21 },
    { name: "Ravi", age: 20 },
    { name: "Sita", age: 22 }
];

let names = students.map(function (student) {
    return student.name;
});
show("Names only: " + names);

// --- 10. filter() ---
// Keeps only the items that pass a test.
show("");
show("--- 10. filter() ---");

let marks = [45, 78, 32, 91, 60, 28];

let passed = marks.filter(function (mark) {
    return mark >= 40;   // only keep marks 40 and above
});

show("All marks:     " + marks);
show("Marks >= 40:   " + passed);

let adults = students.filter(function (student) {
    return student.age >= 21;
});
show("Students aged 21 or more: " + adults.map(s => s.name));

// --- 11. find() and findIndex() ---
// find returns the first matching ITEM
// findIndex returns the first matching POSITION
show("");
show("--- 11. find() ---");

let firstHigh = marks.find(function (mark) {
    return mark > 70;
});
show("First mark above 70 = " + firstHigh);

// --- 12. reduce() ---
// Combines ALL items into a single value.
show("");
show("--- 12. reduce() ---");

// Find the total of all marks
let totalMarks = marks.reduce(function (sum, mark) {
    return sum + mark;
}, 0);
// The 0 at the end is the starting value (important!)

show("Marks: " + marks);
show("Total: " + totalMarks);
show("Average: " + (totalMarks / marks.length));

// --- 13. sort() ---
show("");
show("--- 13. sort() ---");

let unsorted = [50, 10, 80, 30, 20];

// sort() changes numbers as text by default, so for numbers use (a - b)
let sorted = [50, 10, 80, 30, 20].sort(function (a, b) {
    return a - b;
});

show("Unsorted: " + unsorted);
show("Sorted:   " + sorted);
show("Reversed: " + [...sorted].reverse());

// --- 14. COMMON PATTERNS ---
show("");
show("--- 14. Useful patterns ---");
show("Sum      = " + marks.reduce((s, m) => s + m, 0));
show("Max      = " + Math.max(...marks));
show("Even nums= " + marks.filter(m => m % 2 === 0));
show("Doubled  = " + [1, 2, 3].map(n => n * 2));
