// web Storage Api

// Not PArt of the dom refers to the Window Api
// Available to JS via the GLoabal Variable: Window

// We do no have to type Window it is implied
Window.alert(window.location);
alert("ok@");

window.localStorage();
window.sessionStorage();
const myArray = ["Eat", "Sleep", "Code"];
const myObject = {
  name: "Dave",
  hobbies: ["Eat", "Sleep", "Code"],
  logName: function () {
    console.log(this.name);
  },
};

// Session Stoarge
sessionStorage.setItem("MySessionStore", JSON.stringify(myArray));

const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));

console.log(typeof mySessionData);

// Local Storage
localStorage.setItem("MyLocalStore", JSON.stringify(myArray));

localStorage.removeItem("myLocalStore");

localStorage.clear();

const key = localStorage.key(0);
const storeLenght = localStorage.length;

const myLocalData = JSON.parse(sessionStorage.getItem("myLocalStore"));

console.log(typeof myLocalData);
