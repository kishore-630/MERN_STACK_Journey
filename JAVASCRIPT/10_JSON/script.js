// =========================================
// JSON (JavaScript Object Notation)
// =========================================

const output = document.getElementById("output");

function show(text) {
    output.textContent += text + "\n";
    console.log(text);
}

// --- 1. WHAT DOES JSON LOOK LIKE? ---
// It is TEXT, so it must always be written inside quotes.
show("--- 1. A JSON string ---");

const jsonText = '{"name": "Kishore", "age": 21, "isLearning": true}';

show("Value of jsonText:");
show(jsonText);
show("typeof jsonText = " + typeof jsonText + "  <- it is just a STRING");

// --- 2. JSON.parse() ---
// Converts a JSON string into a real JavaScript object.
show("");
show("--- 2. JSON.parse(text) -> object ---");

const person = JSON.parse(jsonText);

show("Name: " + person.name);
show("Age: " + person.age);
show("typeof person = " + typeof person + "  <- now it is a real OBJECT");

// Dot notation works the same as with any object
person.age = 22;
show("Updated age (dot notation): " + person.age);

// Bracket notation also works
show('person["name"] = ' + person["name"]);

// --- 3. JSON.stringify() ---
// Converts a JavaScript object back into JSON text.
show("");
show("--- 3. JSON.stringify(object) -> text ---");

const student = {
    name: "Kishore",
    age: 22,
    course: "CSE",
    skills: ["HTML", "CSS", "JavaScript"]
};

const backToJson = JSON.stringify(student);

show("Converted back to JSON:");
show(backToJson);
show("typeof backToJson = " + typeof backToJson);

// --- 4. ROUND TRIP ---
// stringify then parse returns the original object.
show("");
show("--- 4. Round trip (stringify -> parse) ---");

const original = { product: "Laptop", price: 45000, inStock: true };

const asText = JSON.stringify(original);      // object -> text
const asObject = JSON.parse(asText);          // text  -> object

show("Original: " + JSON.stringify(original));
show("Result:   " + JSON.stringify(asObject));
show("Same value? " + (asObject.price === original.price));

// --- 5. NESTED JSON ---
// JSON can contain objects inside objects, and arrays of objects.
show("");
show("--- 5. Nested JSON ---");

const nestedJson = `{
    "school": "My College",
    "students": [
        { "name": "Kishore", "age": 21 },
        { "name": "Ravi", "age": 20 }
    ]
}`;

const school = JSON.parse(nestedJson);

show("School: " + school.school);
show("Number of students: " + school.students.length);

// Loop through the array of objects
school.students.forEach(function (student) {
    show("  " + student.name + " (" + student.age + ")");
});

// Get only the names
let names = school.students.map(function (s) {
    return s.name;
});
show("Names only: " + names);

// --- 6. JSON DOES NOT SUPPORT THESE ---
show("");
show("--- 6. Important limits of JSON ---");

// undefined is not a valid JSON value, so it is dropped
show("JSON.stringify({ a: 1, b: undefined }) = " + JSON.stringify({ a: 1, b: undefined }));

// functions are also dropped
show("JSON.stringify({ a: 1, b: function () {} }) = " + JSON.stringify({ a: 1, b: function () {} }));

// Dates become strings
show("JSON.stringify({ d: new Date(2026, 0, 10) }) = " + JSON.stringify({ d: new Date(2026, 0, 10) }));

// --- 7. FORMATTING FOR READABILITY ---
// The third argument adds indentation, which is useful when logging.
show("");
show("--- 7. Pretty printing with indentation ---");

const pretty = JSON.stringify(student, null, 2);
show(pretty);

// null means "no filter", 2 means "2 spaces of indentation"

// --- 8. PARSING SOMETHING THAT IS NOT VALID JSON ---
// JSON.parse THROWS an error if the text is not valid JSON.
show("");
show("--- 8. Invalid JSON ---");

try {
    JSON.parse("name: Kishore");   // missing quotes and braces
} catch (error) {
    show("Caught an error: " + error.message);
}

// This is why you should always wrap JSON.parse in a try/catch
// when the JSON text comes from an outside source.
