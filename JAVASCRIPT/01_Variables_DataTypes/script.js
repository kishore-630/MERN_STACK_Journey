// =========================================
// VARIABLES AND DATA TYPES
// =========================================

// Get the output box from the HTML page so we can print the results on screen
const output = document.getElementById("output");

// This helper prints one line on the page (and in the console)
function show(text) {
    output.textContent += text + "\n";
    console.log(text);
}

// --- let: value CAN change ---
let age = 21;
let name = "Kishore";

show("--- let (value can change) ---");
show("name = " + name);
show("age = " + age);

// reassigning a let variable is allowed
age = 22;
show("age after changing = " + age);

// --- const: value CANNOT be reassigned ---
const PI = 3.14159;
const course = "Computer Science";

show("");
show("--- const (value cannot change) ---");
show("PI = " + PI);
show("course = " + course);

// Uncomment the line below to see the error in the console:
// PI = 3.15;   //  TypeError: Assignment to constant variable.

// --- var: the old way, avoid it ---
// var exists in old code, but let and const are better.
var legacy = "I am old";
show("");
show("--- var (old way) ---");
show("legacy = " + legacy);

// --- typeof: find the data type ---
show("");
show("--- typeof (find the data type) ---");
show("typeof 'Kishore'  = " + typeof name);      // string
show("typeof 21         = " + typeof age);        // number
show("typeof true       = " + typeof true);       // boolean
show("typeof undefined  = " + typeof undefined);  // undefined

// --- Undefined vs Null ---
// Undefined = the programmer did not give a value.
// Null = the programmer deliberately set "no value".
let notGiven;
let empty = null;

show("");
show("--- Undefined vs Null ---");
show("notGiven = " + notGiven + "  (typeof: " + typeof notGiven + ")");
show("empty = " + empty + "  (typeof: " + typeof empty + ")");

// --- String, Number and Boolean ---
show("");
show("--- Basic Data Types ---");
show("String  -> " + typeof "Hello");
show("Number  -> " + typeof 42);
show("Decimal -> " + typeof 3.14);
show("Boolean -> " + typeof false);

// --- Template Literals (recommended way to build a sentence) ---
// Use backticks ` ` and put variables inside ${ }
// This avoids using + to join strings.
let subject = "JavaScript";
let hours = 2;

show("");
show("--- Template Literals ---");
show(`I am learning ${subject} and I studied ${hours} hours today.`);

// --- Object and Array ---
show("");
show("--- Object and Array ---");
show("typeof { a: 1 }        = " + typeof { a: 1 });   // object
show("typeof [1, 2, 3]       = " + typeof [1, 2, 3]);  // object (!)
show("Array.isArray([1,2,3]) = " + Array.isArray([1, 2, 3]) + "  <- use this to check an array");

// --- Type Conversion ---
show("");
show("--- Type Conversion ---");
show("Number('100') + 1     = " + (Number("100") + 1));  // 101
show("parseInt('50') + 1     = " + (parseInt("50") + 1));  // 51
show("String(100) + '1'     = " + String(100) + "1");    // "1001"
