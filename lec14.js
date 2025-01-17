// Event loop -> The Event Loop in JavaScript is a mechanism responsible for managing asynchronous behavior in a single-threaded environment. It acts like a traffic controller, ensuring tasks are executed in an orderly manner by processing pending tasks in queues (microtasks and macrotasks).

// The event loop is necessary to handle asynchronous operations in JavaScript effectively. It manages task queues and microtask queues to ensure that tasks are executed efficiently without blocking the main thread.

// task queue -> web api, window object (settimeout), DOM interactions
// microtask queue -> promise

// Task Queue vs Micro-task Queue


console.log("Start");

setTimeout(() => {
    console.log("Inside Settimeout (task)");
}, 0); // Task queue

Promise.resolve().then(() => {
    console.log("Inside Promise (micro-task)");
}); // Micro Task Queue

console.log("End");

// Start
// End
// Inside Promise (micro-task)
// Inside Settimeout (task)


// microtask queue > task queue  // gets better priority (micotask queue)






blockMainThread();

console.log("Start");

function blockMainThread() {
    const start = Date.now();
    while (Date.now() - start < 3000) { }
    console.log("running..");
}

console.log("End");






setTimeout(function a() {
    console.log("a");
}, 1000);

setTimeout(function b() {
    console.log("b");
}, 500);

setTimeout(function c() {
    console.log("c");
}, 0);

function d() {
    console.log("d Runs");
}

d();

// Task queue - a b c
// call stack -

// d Runs
// c
// b
// a







function a() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i); // What is logged?
        }, i * 1000);
    }
}

a();

// 3 3 3





function a() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i); // What is logged?
        }, i * 1000);
    }
}

a();

// 0 1 2





Promise.resolve()
    .then(function a() {
        Promise.resolve().then(
            setTimeout(function d() {
                console.log("d Runs");
            }, 0)
        );
        Promise.resolve().then(function e() {
            console.log("e Runs");
        });
        throw new Error("Error Occured!");
        Promise.resolve().then(function f() {
            console.log("f Runs");
        });
    })
    .catch(function b() {
        console.log("b Runs");
    })
    .then(function c() {
        console.log("c Runs");
    });

// Task Queue -
// Micro task queue -
// Call Stack -

// e runs
// b runs
// c runs
// d runs





function pause(millis) {
  return new Promise(function p(resolve) {
    setTimeout(function s() {
      resolve("resolved");
    }, millis);
  });
}

const start = Date.now();
console.log("Start");

pause(1000).then((res) => {
  const end = Date.now();
  const secs = (end - start) / 1000;
  console.log(res, ":", secs);
});

// Start
// Call Stack - pause(1000) p(resolve)
// Task - s()
// MicroTask -


