// Document Object Model-DOM
// Element by id
const view1=document.getElementById(view1);
console.log(view1);

// Query Selector  method returns the first element that matches a CSS selector.
const  view2=document.querySelector("#view")
console.log(view2);

view1.style.display= "flex";
view2.style.display= "flex";
// get Element by Class Name
const views=document.getElementsByClassName("view");
console.log(views);
// queryselectorall method returns all elements that matches a CSS selector(s) and method returns a NodeList.

// The querySelectorAll() method throws a SYNTAX_ERR exception if the selector(s) is invalid
const sameViews=document.querySelectorAll(".views");
console.log(sameViews);

const divs=view1.querySelectorAll("div");
console.log(divs);


// get element by tag name 
 const samedivsd=view1.getElementsByTagName("div");
 console.log(samedivsd);


 // evendivs in section
 const evenDivs=view1.querySelectorAll("div:nth-of-type(2n)");
 console.log(evenDivs);

for (let i=0; i <evenDivs.length; i++){
    evenDivs[i].style.backgroundColor="darkblue";
    evenDivs[i].style.width="200px";
    evenDivs[i].style.height="200px";
}

const navText=document.querySelector("nav h1");
console.log(navText);
navText.textContent="Hello World !"; 
// text content changes the content of a line or tag


const navbar=document.querySelector("nav");
navbar.innerHTML=`<h1>Hello !</h1> <p>This should align right</p>`;

// inner HTMl overrides everything
console.log(navbar);

navbar.style.justifyContent="space-evenly";


console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes);
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].parentElement.nextSibling);
console.log(evenDivs[0].parentElement.nextElementSibling);
console.log(evenDivs[0].parentElement.previousSibling);
console.log(evenDivs[0].parentElement.previousElementSibling);
 
view1.style.display="none";
view2.style.display="flex";
view2.style.flexDirection="row";
view2.style.flexWrap="wrap";
view2.style.margin="10px";

 while(view2.lastChild){
    view2.lastChild.remove();
 }

const CreateDivs=(parent,iter)=>{
    const newDiv=document.createElement("div");
    newDiv.textContent=iter;
    newDiv.style.backgroundColor="#000";
    newDiv.style.width="100px";
    newDiv.style.height="100px";
    newDiv.style.margin="10px";
    newDiv.style.display="flex";
    newDiv.style.justifyContent="center";
    newDiv.style.alignItems="center";
    parent.append(newDiv);
    // method inserts a set of Node objects or string objects after the last child of the Element. String objects are inserted as equivalent Text nodes
}
// CreateDivs(view2,10);

for (let i=1; i<=12; i++){
    CreateDivs(view2,i);
}

