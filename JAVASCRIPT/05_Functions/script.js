// =========================================
// FUNCTIONS
// =========================================

const output = document.getElementById("output");

function show(text) {
    output.textContent += text + "\n";
    console.log(text);
}

// --- 1. FUNCTION DECLARATION ---
// The most common way to write a function.
show("--- 1. Function declaration ---");

function greet(name) {
    // return sends a value back to the place where the function was called
    return "Hello, " + name + "!";
}

show(greet("Kishore"));
show(greet("Ravi"));

// A function that does NOT return anything returns "undefined"
function sayHello() {
    console.log("Hi!");
}
show("A function without return gives: " + sayHello());

// --- 2. FUNCTION EXPRESSION ---
// The function is assigned to a variable.
show("");
show("--- 2. Function expression ---");

const add = function (a, b) {
    return a + b;
};

show("add(5, 3) = " + add(5, 3));

// --- 3. ARROW FUNCTION ---
// A shorter syntax for a function expression.
// Useful when the body is a single return statement.
show("");
show("--- 3. Arrow function ---");

const subtract = (a, b) => a - b;
show("subtract(10, 4) = " + subtract(10, 4));

// When the body has more than one line, use { } and write return explicitly
const multiply = (a, b) => {
    let result = a * b;
    return result;
};
show("multiply(6, 7) = " + multiply(6, 7));

// An arrow function with no parameter
const getRandomNote = () => "Hello from an arrow function!";
show(getRandomNote());

// --- 4. PARAMETERS vs ARGUMENTS ---
show("");
show("--- 4. Parameters and arguments ---");

// "a" and "b" are parameters (names in the definition)
// 8 and 5 are arguments (real values)
function subtract2(a, b) {
    return a - b;
}
show("8 and 5 are the arguments -> " + subtract2(8, 5));

// --- 5. DEFAULT PARAMETER ---
// Used when the caller leaves out that argument.
show("");
show("--- 5. Default parameter ---");

function welcome(name = "Guest") {
    return "Welcome, " + name;
}

show("welcome('Kishore') = " + welcome("Kishore"));
show("welcome()         = " + welcome() + "  (no value passed, so the default was used)");

// --- 6. REST PARAMETER ---
// Collects any number of arguments into a real array.
show("");
show("--- 6. Rest parameter (...) ---");

function total(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

show("total(10, 20, 30) = " + total(10, 20, 30));
show("total(5)          = " + total(5));
show("total()           = " + total());

// --- 7. RETURNING MULTIPLE VALUES (as an array) ---
show("");
show("--- 7. Returning multiple values ---");

function minAndMax(numbers) {
    // Math.min and Math.max are built-in functions
    return [Math.min(...numbers), Math.max(...numbers)];
}

let [smallest, largest] = minAndMax([45, 12, 88, 30]);
show("Smallest = " + smallest);
show("Largest  = " + largest);

// --- 8. SCOPE ---
// A variable declared inside a function cannot be used outside it.
show("");
show("--- 8. Scope ---");

function showSecret() {
    let secret = "I only exist inside this function";
    show("Inside the function: " + secret);
}

showSecret();

// Uncomment the next line to see the error in the console:
// show(secret);   //  ReferenceError: secret is not defined

let outside = "I can be used anywhere";
show("Outside variable: " + outside);

// --- 9. BUILT-IN FUNCTIONS YOU WILL USE OFTEN ---
show("");
show("--- 9. Useful built-in functions ---");
show("Math.max(4, 9, 2)  = " + Math.max(4, 9, 2));
show("Math.min(4, 9, 2)  = " + Math.min(4, 9, 2));
show("Math.round(4.6)    = " + Math.round(4.6));
show("Math.floor(4.9)    = " + Math.floor(4.9));
show("Math.ceil(4.1)     = " + Math.ceil(4.1));
show("Math.sqrt(81)      = " + Math.sqrt(81));
show("Number('25') + 5   = " + (Number("25") + 5));
show("parseInt('25') + 5 = " + (parseInt("25") + 5));
show("'Kishore'.length   = " + "Kishore".length);
