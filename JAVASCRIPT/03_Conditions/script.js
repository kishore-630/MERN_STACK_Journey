// =========================================
// CONDITIONS (if / else / switch)
// =========================================

const output = document.getElementById("output");

function show(text) {
    output.textContent += text + "\n";
    console.log(text);
}

// --- 1. SIMPLE if ---
show("--- 1. if ---");

let marks = 75;

if (marks >= 40) {
    show("Marks " + marks + " -> PASS");
}

// --- 2. if ... else ---
show("");
show("--- 2. if ... else ---");

let temperature = 32;

if (temperature > 30) {
    show("It is hot: " + temperature + " degrees");
} else {
    show("It is normal: " + temperature + " degrees");
}

// --- 3. else if (many possibilities) ---
// The FIRST condition that is true wins,
// so the order of the checks is important.
show("");
show("--- 3. else if (grade calculation) ---");

function getGrade(score) {
    if (score >= 90) {
        return "A+";
    } else if (score >= 75) {
        return "A";
    } else if (score >= 60) {
        return "B";
    } else if (score >= 40) {
        return "C";
    } else {
        return "Fail";
    }
}

show("Score 95 -> " + getGrade(95));
show("Score 78 -> " + getGrade(78));
show("Score 65 -> " + getGrade(65));
show("Score 45 -> " + getGrade(45));
show("Score 20 -> " + getGrade(20));

// --- 4. COMBINING CONDITIONS ---
show("");
show("--- 4. Combining conditions with && and || ---");

let userAge = 17;
let hasPermission = true;

if (userAge >= 18 && hasPermission) {
    show("Access GRANTED");
} else {
    show("Access DENIED (age " + userAge + ", permission: " + hasPermission + ")");
}

// --- 5. NESTED if ---
show("");
show("--- 5. Nested if ---");

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
    if (isAdmin) {
        show("Admin panel opened");
    } else {
        show("Normal user home page");
    }
}

// --- 6. switch ---
// Use switch when comparing ONE variable against many fixed values.
show("");
show("--- 6. switch ---");

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            // default runs when no case matched
            return "Invalid day number";
    }
}

show("0 -> " + getDayName(0));
show("3 -> " + getDayName(3));
show("6 -> " + getDayName(6));
show("9 -> " + getDayName(9) + "  (default case ran)");

// --- 7. TERNARY OPERATOR ---
// A short way to write a simple if/else that produces a value.
show("");
show("--- 7. Ternary operator ---");

let number = 4;
let answer = (number % 2 === 0) ? "Even number" : "Odd number";

show("Number " + number + " is an " + answer);
