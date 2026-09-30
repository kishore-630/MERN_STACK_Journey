// =========================================
// PROMISES AND ASYNC/AWAIT
// =========================================

const output = document.getElementById("output");

function show(text) {
    output.textContent += text + "\n";
    console.log(text);
}

// =============================================
// 1. CREATING A PROMISE
// =============================================
// A promise has THREE states:
//   pending   -> still working
//   fulfilled -> it worked  (resolve is called)
//   rejected  -> it failed  (reject is called)
show("--- 1. Creating a promise ---");

const waitForMe = new Promise(function (resolve, reject) {
    // setTimeout runs this function after a delay
    setTimeout(function () {
        resolve("I finished after 1 second");
    }, 1000);
});

show("Right after creating it, the promise state is: pending");
show("(it is still waiting for the setTimeout to finish)");
show("");

// .then() runs when the promise is FULFILLED
waitForMe.then(function (value) {
    show("Promise resolved: " + value);
});

// .catch() runs when the promise is REJECTED
// .finally() runs in BOTH cases, which is useful for hiding a loading spinner
waitForMe.finally(function () {
    show("The finally block ran (it runs whether the promise worked or failed)");
});

// =============================================
// 2. A PROMISE THAT FAILS
// =============================================
show("");
show("--- 2. A promise that is rejected ---");

const failingPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // Calling reject() moves the promise to the "rejected" state
        reject(new Error("Something went wrong"));
    }, 800);
});

failingPromise
    .then(function (value) {
        show("This will NOT run: " + value);
    })
    .catch(function (error) {
        // The error object is received here
        show("Caught the error: " + error.message);
    });

// =============================================
// 3. CALLBACKS VS PROMISES
// =============================================
// Both do the same job, but a Promise is much easier to read
// and gives you proper error handling.
show("");
show("--- 3. Callback vs Promise ---");

// The callback way
function getDataWithCallback(successCallback, errorCallback) {
    setTimeout(function () {
        let data = "Data loaded";
        successCallback(data);
    }, 600);
}

getDataWithCallback(
    function (data) {
        show("Callback style: " + data);
    },
    function (error) {
        show("Callback error: " + error);
    }
);

// The promise way
function getDataWithPromise() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Data loaded");
        }, 600);
    });
}

getDataWithPromise()
    .then(function (data) {
        show("Promise style:  " + data);
    })
    .catch(function (error) {
        show("Promise error: " + error);
    });

// =============================================
// 4. CHAINING
// =============================================
// Each .then() waits for the previous one to finish and
// receives the value it returned.
show("");
show("--- 4. Chaining .then() ---");

function step1() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Step 1 done");
        }, 400);
    });
}

function step2(previousResult) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            // previousResult is the value returned by the step above
            resolve(previousResult + " -> Step 2 done");
        }, 400);
    });
}

function step3(previousResult) {
    return previousResult + " -> Step 3 done";
}

step1()
    .then(step2)
    .then(step3)
    .then(function (finalResult) {
        show(finalResult);
    })
    .catch(function (error) {
        show("Error: " + error);
    });

// =============================================
// 5. Promise.all()
// =============================================
// Waits for ALL the promises to finish, then gives you an array of all the results.
// It REJECTS immediately if any one of them fails.
show("");
show("--- 5. Promise.all() ---");

function slowTask(name, milliseconds) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name + " finished in " + milliseconds + "ms");
        }, milliseconds);
    });
}

Promise.all([
    slowTask("Task A", 500),
    slowTask("Task B", 300),
    slowTask("Task C", 100)
])
    .then(function (results) {
        show("All three finished. Results:");
        results.forEach(function (result) {
            show("  " + result);
        });
    })
    .catch(function (error) {
        show("Promise.all failed: " + error);
    });

// =============================================
// 6. Promise.race()
// =============================================
// Uses the FIRST promise to finish and ignores the rest.
// Useful for "whichever is faster wins".
show("");
show("--- 6. Promise.race() ---");

Promise.race([
    slowTask("Slow task", 1500),
    slowTask("Fast task", 200)
])
    .then(function (winner) {
        show("Winner: " + winner);
    });

// =============================================
// 7. ASYNC / AWAIT
// =============================================
// An async function ALWAYS returns a Promise.
// Inside it, "await" pauses the function until the Promise finishes.
// The result is much easier to read than a long chain of .then()
show("");
show("--- 7. async / await ---");

async function loadData() {
    try {
        // "await" waits here until the promise resolves.
        // The code below runs only after the data has arrived.
        const result1 = await slowTask("First request", 400);
        show(result1);

        const result2 = await slowTask("Second request", 400);
        show(result2);

        // A normal return value inside async is automatically wrapped in a Promise
        return "Both requests completed";

    } catch (error) {
        // try/catch replaces .then() and .catch()
        show("Error caught: " + error);
    }
}

loadData().then(function (finalMessage) {
    show(finalMessage);
});

// --- async/await that fails ---
show("");
show("--- 8. async/await with an error ---");

function willFail() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Error("Server did not respond"));
        }, 300);
    });
}

async function tryToLoad() {
    try {
        const data = await willFail();
        show("This will NOT run: " + data);
    } catch (error) {
        show("Caught with try/catch: " + error.message);
    }
}

tryToLoad();

// --- Shortcut: .catch() is still available on an async function ---
show("");
show("--- 9. Quick error handling without try/catch ---");

function quickFail() {
    return Promise.reject(new Error("Rejected immediately"));
}

// Attaching .catch() straight to the call keeps the error handled
quickFail().catch(function (error) {
    show("Caught: " + error.message);
});
