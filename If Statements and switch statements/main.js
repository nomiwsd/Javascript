

// if statements

// if(condition){

// }
// else{

// }
// first example
let customerisBanned=false;
let soup= "chicken Noodle Soup";
let crackers=true;
let reply;
if (customerisBanned){
    reply=`No Soup for you`;
}
else if(soup && crackers){
     reply=`here is your order of ${soup} and crackers`;
}
else if(soup){
     reply=`here is your order of ${soup}`;
}
else{
    reply=`sorry we are out of soup`
}
console.log(reply);
// second example
let testscore=89;
let collegestudent=true;
let grade;
if (testscore>=90){
    grade='A';
}
else if(testscore>=80){ grade='B';}
else if(testscore>=70){grade='C';}
else if(testscore>=60){grade='D';}
else {
if (collegestudent){
    grade='U';
}
else{
    grade='F'
}
}
console.log(grade);

// example 03
if (playerone===computer){

}
else if (playerone==="rock"){
    if(computer==="paper"){

    }
    else{

    }
}
else if (playerone==="paper"){
    if(computer==="scissors"){

    }
    else{
        
    }
}
else{

}
// Switch Statements
// First example
switch("2"){
    case 1:
        console.log(1);
    break;
    case 2:
        console.log(2);
    break;
    case 3:
        console.log(3);
    break;
    case 4:
        console.log(4);
    break;
    default:
        console.log("No Match")
}

// Second Example
switch(Math.floor(Math.random()*5+1)){
    case 1:
        console.log(1);
    break;
    case 2:
        console.log(2);
    break;
    case 3:
        console.log(3);
    break;
    case 4:
        console.log(4);
    break;
    default:
        console.log("No Match")
}

// example #03

let playerone="rock";
let computer='rock';
switch(playerone){
     case computer:
        console.log("Tie game");
    break;
    case "rock":
        if (computer==="paper"){
            console.log("computer WIns")
        }
        else{
            console.log("Playerone wins")
        }
        break;
    case "paper":
        if (computer==="Scissors"){
            console.log("computer WIns")
        }
        else{
            console.log("Playerone wins")
        }
        break;
        default:
    if (computer==="rock"){
            console.log("computer WIns")
        }
        else{
            console.log("Playerone wins")
        }
        break;
}

//  Ternary Operators
// condition ? if true:if false

let soup="chicken noodle soup";
let response=soup? "yes soup":"no soup";
console.log(response);