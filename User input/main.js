// user input
alert("window closed");
confirm("Ok===true\nCancel===false");
let myboolean = confirm("Ok===true\nCancel===false");
console.log(myboolean);

// first example
let myname = prompt("Please enter a value:");
console.log(myname);

//second example

let myname1 = prompt("Please enter a value:");
console.log(myname1 ?? "you did not enter your name");
//  ?? knowledge collecting property

// third example
let myname2 = prompt("Please enter a value:");
if (myname2) {
    console.log(myname2);
} else {
    console.log("you did not enter your name");
}

// fourth example
let myname3 = prompt("Please enter a value:");
if (myname3) {
    console.log(myname3.length);
    console.log(myname3.trim().length);
    console.log(myname3.trim());
} else {
    console.log("you did not enter your name");
}
