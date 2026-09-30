// =========================================
// OBJECTS
// =========================================

const output = document.getElementById("output");

function show(text) {
    output.textContent += text + "\n";
    console.log(text);
}

// --- 1. CREATING AN OBJECT ---
// Keys and values are joined by a colon, pairs are separated by commas.
show("--- 1. Creating an object ---");

let student = {
    name: "Kishore",
    age: 21,
    course: "CSE",
    isLearning: true
};

show("name: " + student.name);
show("course: " + student.course);

// --- 2. ACCESSING VALUES ---
show("");
show("--- 2. Accessing values ---");

// dot notation (use this normally)
show("student.age = " + student.age);

// bracket notation (needed when the key has a space or comes from a variable)
show('student["course"] = ' + student["course"]);

let key = "name";
show('student[key] = ' + student[key]);

// --- 3. ADDING, UPDATING and DELETING ---
show("");
show("--- 3. Changing an object ---");

// Adding a new key (just assign it)
student.city = "Bengaluru";
show("Added city: " + student.city);

// Updating an existing value
student.age = 22;
show("Updated age: " + student.age);

// Deleting a key
delete student.isLearning;
show("Keys after delete: " + Object.keys(student).join(", "));

// --- 4. OBJECT METHODS ---
// A function stored inside an object is called a method.
show("");
show("--- 4. Object methods ---");

let car = {
    brand: "Tata",
    model: "Nexon",
    speed: 0,

    // this refers to the car object itself
    accelerate: function (amount) {
        this.speed += amount;
        return this.speed;
    },

    showInfo: function () {
        return this.brand + " " + this.model + " at " + this.speed + " km/h";
    }
};

show(car.accelerate(20));
show(car.accelerate(30));
show(car.showInfo());

// The same method written as a shorter arrow-style function
let student2 = {
    name: "Ravi",
    greet: function () {
        return "Hello, I am " + this.name;
    }
};
show(student2.greet());

// --- 5. Object.keys / values / entries ---
show("");
show("--- 5. Reading an object ---");

let product = {
    name: "Laptop",
    price: 45000,
    inStock: true
};

show("Keys:   " + Object.keys(product));
show("Values: " + Object.values(product));

// entries gives an array of [key, value] pairs
Object.entries(product).forEach(function (pair) {
    show("  " + pair[0] + " -> " + pair[1]);
});

// --- 6. DESTRUCTURING ---
// A quick way to pull values out into separate variables.
show("");
show("--- 6. Destructuring ---");

let user = {
    name: "Kishore",
    age: 21,
    address: {
        city: "Bengaluru",
        state: "Karnataka"
    }
};

const { name, age } = user;
show("name = " + name);
show("age  = " + age);

// Nested destructuring
const { address: { city, state } } = user;
show("city  = " + city);
show("state = " + state);

// --- 7. SPREAD OPERATOR ---
// Copies an object's properties into a new object.
show("");
show("--- 7. Spread operator (...) ---");

let defaults = {
    theme: "light",
    language: "English"
};

let userSettings = {
    theme: "dark"
};

let settings = { ...defaults, ...userSettings };
show("Merged settings: theme = " + settings.theme + ", language = " + settings.language);

// The user setting wins because it was spread last

// --- 8. NESTED OBJECTS AND ARRAYS ---
// Objects can contain objects and arrays.
show("");
show("--- 8. Nested data ---");

let school = {
    name: "My College",
    students: [
        { name: "Kishore", age: 21 },
        { name: "Ravi", age: 20 }
    ]
};

show("School: " + school.name);
show("First student: " + school.students[0].name);

// Loop through the array inside the object
school.students.forEach(function (s) {
    show("  " + s.name + " is " + s.age);
});

// --- 9. SHORTHAND PROPERTY (ES6) ---
// If the key and value have the same name, write it just once.
show("");
show("--- 9. Shorthand property ---");

let course = "CSE";
let year = 1;

// long way
let studentLong = { course: course, year: year };

// short way
let studentShort = { course, year };

show("Long way:  " + JSON.stringify(studentLong));
show("Short way: " + JSON.stringify(studentShort));

// --- 10. CHECKING IF A KEY EXISTS ---
show("");
show("--- 10. Checking a key ---");

if ("price" in product) {
    show("Yes, product has a 'price' key");
}

if ("color" in product) {
    show("color found");
} else {
    show("No, product does not have a 'color' key");
}
