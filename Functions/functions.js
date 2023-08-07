// functions
// Methods = Built in functions
"Nomi".toLowerCase();
Math.random();


// Function Declaration

function sum ()
{
return 2+2;
}
console.log(sum());

// function with parameters

function sum (num1,num2)
{
    console.log(num1);
    console.log(num2);
return num1+num2;
}
console.log(sum(2,6));

// 3rd example
function sum (num1,num2)
{
    if(num2===undefined){
        return num1+num2;
    }
return num1+num2;
}
console.log(sum(2,6));

//4th example

function getUserNamefromEmail(email){
return email.slice(0, email.indexOf("@"));
}
console.log(getUserNamefromEmail("user@github.com"));


// Anonymous functions
// provide no name function

 const getUserNamefromEmail= function(email){
    return email.slice(0, email.indexOf("@"));
    }
    console.log(getUserNamefromEmail("user@github.com"));

    // Arrow Functions 
    
    const getUserNamefromEmail=(email) => {
        return email.slice(0, email.indexOf("@"));
        }
        console.log(getUserNamefromEmail("user@github.com"));
    

        // Arrow 2nd example
        const toPropercase=(myname) => {
            return myname.charAt(0).toUpperCase()+myname.slice(1).toLowerCase();
        }
        console.log(toPropercase("nOmI"));
        // function provide reusable code