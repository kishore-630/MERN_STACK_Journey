// =========================================
// OPERATORS
// =========================================

const output = document.getElementById("output");

function show(text) {
    output.textContent += text + "\n";
    console.log(text);
}

let a = 10;
let b = 3;

show("Using a = " + a + " and b = " + b);
show("");

// --- 1. ARITHMETIC OPERATORS ---
show("--- Arithmetic ---");
show("a + b  = " + (a + b));   // 13
show("a - b  = " + (a - b));   // 7
show("a * b  = " + (a * b));   // 30
show("a / b  = " + (a / b));   // 3.333...
show("a % b  = " + (a % b));   // 1  (remainder)
show("a ** b = " + (a ** b));  // 1000 (10 to the power 3)

show("");
show("--- The % (modulus) operator is very useful ---");
show("10 % 2 = " + (10 % 2) + "  -> 0, so 10 is EVEN");
show("10 % 3 = " + (10 % 3) + "  -> 1, so 10 is ODD");

// Get the day name from a day number using %
let dayNumber = 4; // 0 = Sunday, 1 = Monday, ... 6 = Saturday
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
show("Day number " + dayNumber + " is a " + days[dayNumber % 7]);

// --- 2. ASSIGNMENT OPERATORS ---
show("");
show("--- Assignment ---");

let total = 10;
total += 5;  // same as total = total + 5
show("total += 5  -> total = " + total);

total -= 3;
show("total -= 3  -> total = " + total);

total *= 2;
show("total *= 2  -> total = " + total);

total /= 4;
show("total /= 4  -> total = " + total);

// --- 3. COMPARISON OPERATORS ---
show("");
show("--- Comparison ---");
show("10 == '10'   = " + (10 == "10") + "   // loose equal: true (value is the same)");
show("10 === '10'  = " + (10 === "10") + "  // strict equal: FALSE (types are different)");
show("10 === 10    = " + (10 === 10) + "  // strict equal: true");
show("10 != 5      = " + (10 != 5));
show("10 > 5       = " + (10 > 5));
show("10 <= 5      = " + (10 <= 5));

// --- 4. LOGICAL OPERATORS ---
show("");
show("--- Logical ---");

let age = 21;
let hasId = true;

// && means BOTH must be true
show("age >= 18 && hasId   = " + (age >= 18 && hasId));
show("age >= 18 && false   = " + (age >= 18 && false));

// || means AT LEAST ONE must be true
show("age < 18 || hasId   = " + (age < 18 || hasId));
show("false || false      = " + (false || false));

// ! flips the value
show("!hasId               = " + (!hasId));
show("!(10 > 5)           = " + (!(10 > 5)));

// A very common use of || is setting a default value
let enteredName = "";
let finalName = enteredName || "Guest";
show("");
show("Default value using ||");
show("enteredName = " + enteredName);
show("finalName    = " + finalName + "  (because enteredName was empty)");

// --- 5. TERNARY OPERATOR ---
// A short way to write a simple if/else
show("");
show("--- Ternary (short if/else) ---");
let result = (age >= 18) ? "Allowed to vote" : "Not allowed to vote";
show("age = " + age + " -> " + result);

// --- 6. OPERATOR PRECEDENCE ---
show("");
show("--- Precedence: which is calculated first? ---");
show("2 + 3 * 4       = " + (2 + 3 * 4) + "   (* is done first)");
show("(2 + 3) * 4     = " + ((2 + 3) * 4) + "   (brackets change the order)");
