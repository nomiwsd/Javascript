// Javascript Errors and Error Handling

// reference error because variable is not defined
"use strict";
variable = "Dave";
console.log(variable);

// solution
"use strict";
const variable = "Dave";
console.log(variable);


// syntax error
Object..create();
// refernce is not easy to caught

// typeerror
"use strict "
const name="Dave";
name="Joe";

// function error
const makeerror=()=>{
    try{
        throw new customError("This is a custom Error")
const name1="Dave";
name1="Joe";
    }
    catch(err){
        // console.log(err);
        // console.warn(err);
        // console.table(err);
        console.error(err.name);
        console.error(err.stack);
        console.error(err.message);
    }
}

makeerror();


function customError(message){
    this.message=message;
    this.name="customError";
    this.stack=`${this.name}:${this.message};`
}


// Generic Error Constructor

const makeerror1=()=>{
    try{
        throw new Error("This is a custom Error")
const name1="Dave";
name1="Joe";
    }
    catch(err){
        // console.log(err);
        // console.warn(err);
        // console.table(err);
        console.error(err.name);
        console.error(err.stack);
        console.error(err.message);
    }
}

makeerror();

// final block with try catch

const makeerror2=()=>{
    let i=1;
    while(i<=5){
        try{
         if(i % 2 !==0){
            throw new Error("Odd Number!");
         }
         console.log("Even Number!");
        }
        catch(err){
            // console.log(err);
            // console.warn(err);
            // console.table(err);
            console.error(err.name);
            console.error(err.stack);
            console.error(err.message);
        }
        finally{
            console.log("...finally");
            i++
        }
    }
   
}

makeerror();
