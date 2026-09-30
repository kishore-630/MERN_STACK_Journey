// =========================================
// FETCH AND APIs
// =========================================

const output = document.getElementById("output");
const statusEl = document.getElementById("status");
const userListEl = document.getElementById("userList");

// This is a free public API used for learning.
// It always returns fake test data, so nothing here is a real person.
const API_BASE = "https://jsonplaceholder.typicode.com";

function show(text) {
    output.textContent += text + "\n";
    console.log(text);
}

// =============================================
// 1. GET A SINGLE ITEM
// =============================================
// fetch() is ASYNCHRONOUS. It sends the request and returns immediately
// with a Promise. The .then() blocks run later, when the data arrives.
document.getElementById("btnOne").addEventListener("click", function () {
    fetchUser(1);
});

document.getElementById("btnSeven").addEventListener("click", function () {
    fetchUser(7);
});

function fetchUser(id) {
    // Step 1: show the loading state
    statusEl.textContent = "Loading user " + id + "...";
    statusEl.className = "loading";
    show("");
    show("Request sent to " + API_BASE + "/users/" + id);

    // Step 2: make the request
    fetch(API_BASE + "/users/" + id)
        // Step 3: response.json() converts the raw response into a JavaScript object.
        //          It also returns a Promise, so we need another .then()
        .then(function (response) {

            // response.ok is true when the request succeeded (status 200-299)
            if (!response.ok) {
                // Throw an error so it is handled by the .catch() block below
                throw new Error("Server returned status " + response.status);
            }

            return response.json();
        })

        // Step 4: the data is now a real object
        .then(function (user) {
            statusEl.textContent = "Loaded successfully!";
            statusEl.className = "success";

            show("Success! Data received:");
            show("Id:    " + user.id);
            show("Name:  " + user.name);
            show("Email: " + user.email);
            show("City:  " + user.address.city);
        })

        // Step 5: handle any error that happened at any step
        .catch(function (error) {
            statusEl.textContent = "Something went wrong: " + error.message;
            statusEl.className = "error";
            show("ERROR: " + error.message);
        });
}

// =============================================
// 2. GET A LIST OF ITEMS
// =============================================
document.getElementById("btnList").addEventListener("click", function () {
    userListEl.innerHTML = "";
    statusEl.textContent = "Loading 5 users...";
    statusEl.className = "loading";

    // The ?_limit=5 query string tells the API to return only 5 items
    fetch(API_BASE + "/users?_limit=5")
        .then(function (response) {
            return response.json();
        })
        .then(function (users) {
            statusEl.textContent = "Loaded " + users.length + " users!";
            statusEl.className = "success";

            show("");
            show("Received an array with " + users.length + " objects.");
            show("Array.isArray(users) = " + Array.isArray(users));

            // Create one card for each user in the returned array
            users.forEach(function (user) {
                // Build the HTML for one card
                let card = document.createElement("div");
                card.className = "card";

                let name = document.createElement("h3");
                name.textContent = user.name;

                let email = document.createElement("p");
                email.textContent = user.email;

                let city = document.createElement("p");
                city.textContent = "City: " + user.address.city;

                // Add the parts to the card, then add the card to the page
                card.appendChild(name);
                card.appendChild(email);
                card.appendChild(city);
                userListEl.appendChild(card);
            });
        })
        .catch(function (error) {
            statusEl.textContent = "Error: " + error.message;
            statusEl.className = "error";
        });
});

// =============================================
// 3. ERROR HANDLING
// =============================================
// Try this with your internet turned off to see the .catch() block run.
document.getElementById("btnError").addEventListener("click", function () {
    statusEl.textContent = "Loading a user that does not exist...";
    statusEl.className = "loading";
    show("");
    show("Sending a request that will return status 404...");

    fetch(API_BASE + "/users/9999")
        .then(function (response) {
            // response.ok is FALSE here, because the status is 404
            if (!response.ok) {
                throw new Error("Request failed with status " + response.status);
            }
            return response.json();
        })
        .then(function (user) {
            show("This should not run.");
        })
        .catch(function (error) {
            // This is where the error from the .then() above arrives
            statusEl.textContent = "Caught the error correctly!";
            statusEl.className = "error";
            show("Caught: " + error.message);
            show("This is how you stop an app from crashing on a failed request.");
        });
});

// =============================================
// 4. ASYNC / AWAIT
// =============================================
// This is the same thing written with async/await.
// It looks more like normal straight-line code, so many developers prefer it.

async function fetchUserWithAwait(id) {
    try {
        // "await" tells JavaScript to WAIT here until the data arrives
        const response = await fetch(API_BASE + "/users/" + id);
        const user = await response.json();

        show("");
        show("--- Same request using async/await ---");
        show("Name: " + user.name);
        return user;

    } catch (error) {
        // try/catch works the same way as with promises
        show("Error: " + error.message);
    }
}

// The function above is not called automatically, so call it manually:
// fetchUserWithAwait(3);

// Uncomment the next line to run it on page load:
// fetchUserWithAwait(3);

show("Ready. Click the buttons above to make requests.");
show("(An internet connection is needed.)");
