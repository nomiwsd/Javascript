// Fetch API require a discussion about
// Callbacks,Promises,Thenables and Async/Await

// Callbacks
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

function firstFunction(parameters, Callbacks) {
  // do stuff

  Callbacks();
}

// Callback Hell

firstFunction(para, function () {
  secondFunction(para, function () {
    thirdFunction(para, function () {});
  });
});

// Promises

// A JavaScript Promise object contains both the producing code and calls to the consuming code

// 3 states: pending, fulfilled, rejected

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes ! resolved the Promise");
  } else {
    reject("No Rejected the Promise");
  }
});

console.log(myPromise);

myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newvalue) => {
    console.log(newvalue);
  })
  .catch((err) => {
    console.error(err);
  });

// another example promises with of settimeout
const myPromise1 = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes ! resolved the Promise");
  } else {
    reject("No Rejected the Promise");
  }
});

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("myNextPromise resolved!");
  }, 3000);
});

myNextPromise.then((value) => {
  console.log(value);
});
myPromise1.then((value) => {
  console.log(value);
});

// Pending State of Promises

//  = fetch("https://jsonplaceholder.typicode.com/users");

//pending state

const Users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  });
console.log(Users);
