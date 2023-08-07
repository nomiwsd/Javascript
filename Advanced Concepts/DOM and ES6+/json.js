// JSON : Javascript Object Notation
// It is used to send and receive data
// 
// it is a text format that is completely language independent 
// meaning it is used to send annd receive data in Many Languages ... not just in Javascript

const myObject={
    name:"Dave",
    hobbies: ["Eat","Sleep","Code"],
    hello: function(){
        console.log("Hello");
    }
}

console.log(myObject);
console.log(myObject.name);
myObject.hello();
console.log(typeof myObject);


const sendJSON=JSON.stringify(myObject);
console.log(sendJSON);
console.log (typeof sendJSON);
console.log (sendJSON.name);
console.log (sendJSON.name);
// it does not acces the value like JS object because data is changed to string data at this point
// JSON does not send functions


const receiveJSON=JSON.parse(sendJSON);
console.log(receiveJSON);
console.log( typeof receiveJSON);