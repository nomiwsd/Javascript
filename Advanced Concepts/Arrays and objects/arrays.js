const myarray=[];

// add elemets to an array
myarray[0]="Dave";
myarray[1]=1001;
myarray[2]=false;

// refer to an array
console.log(myarray);

// lenght property 
console.log(myarray.length);

// last element of array

console.log(myarray[myarray.length-1]);

console.log(myarray[1]);

// add elements in array
myarray.push("school");

// delete element in array
const lastitem=myarray.pop(myarray);

console.log(lastitem);
// unshift item at beginning of array
const newLenght=myarray.unshift(42);


console.log(newLenght);
// Shift (remove) the first element of the array:
const firstItem=myarray.shift();


// delete element from array

myarray.splice(1,1);
console.log(myarray);

// separate the array elements from start to end position  where 2 is starting index and 5 is last index
const array1=['A','B','C','D'];
const newArray=array1.slice(2,5);

console.log(newArray);

// reverse the Array elements
array1.reverse();
console.log(array1);

// join joining the elements of array
const newString=array1.join();
console.log(array1);

// string method split seperate the elements

const newString1=array1.join();
const newArray1=newString1.split(",")
console.log(newArray1);


// concat method join two small arrays in to one large array

const myArrayA=["A","B","C"];
const myArrayB=["D","E","F"];
const newArray3=myArrayA.concat(myArrayB);
console.log(newArray3);


// spread operator ... allows us to quickly copy all or part of an existing array or object into another array or object.
const myArrayC=["A","B","C"];
const myArrayD=["D","E","F"];

const newArray4=[...myArrayC,...myArrayB];
console.log(newArray4);


// nested Arrays

const equipShelfA=["baseball","football","volleyball"];
const equipShelfb=["basketball","golf balls","tennis balls"];
const clothesShelfA=["tank tops","t-shirts","jerseys"];
const clothesShelfB=["sweat tops","sweat pants","hoodies"];


console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);

const equipdept=[equipShelfA,equipShelfb];
const clothesdept=[clothesShelfA,clothesShelfB];
// here 0 is position of element in array means index and 1 is the element order 
console.log(equipdept[0][1]);
// here 1 is position of element in array means index and 0 is the element order 
console.log(clothesdept[1][0]);

const sportStore=[equipdept,clothesdept];
console.log(sportStore[0][0][1]);
console.log(sportStore[1][1][0]);