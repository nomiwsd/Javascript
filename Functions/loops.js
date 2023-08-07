// loops
// while loops
let Mynumber = 0;
while (Mynumber < 50) {
  console.log(Mynumber);
  // Mynumber++;
  Mynumber = Mynumber + 1;
}

// dont cretae an endless loop because it run until  runout of memory
// Do Whilw loops
let Mynumber1 = 0;
do {
  Mynumber1 += 2;
  console.log(Mynumber1);
} while (Mynumber1 < 50);

// forloop

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// 2nd example
 
let myname="Nomi";
for(let i=0; i<=myname.length; i++){
    console.log(myname.charAt(i));
}

// 3rd example
let myname1="Nomi";
let counter=0;
let myLetter;
while(true){
myLetter=myname1[counter];
console.log(myLetter);
if(myLetter=== "v"){
    break; 
}
counter++;
}

// 4th example
 
let myname2="Nomi";
let counter1=0;
let myLetter1;
while(counter1<=3){
myLetter1=myname2[counter1];
console.log(myLetter1);
if (counter1=== 1){
    counter1+=2;
    continue;
}
if(myLetter1=== "v"){
    break; 
}
counter1++;
}