// Event Listeners

const view = document.querySelector("#view2");

const div = view.querySelector("div");
const h2 = div.querySelector("h2");

// Syntax addEventListener(event,function,useCapture)

const doSomething = () => {
  alert("doing Something");
};
h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

// anonymous function

h2.addEventListener("click", (event) => {
  console.log(event.target);
  event.target.textContent = "Clicked";
});

// ready state event change

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("redyState:complete");
    initApp();
    initApp1();
  }
});

const initapp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");
  view.addEventListener(
    "click",
    (event) => {
      event.stopPropagation();
      // method prevents propagation of the same event from being called.
      // Propagation means bubbling up to parent elements or capturing down to child elements.
      view.style.backgroundColor = "purple";
    },
    false
  );
  div.addEventListener(
    "click",
    (event) => {
      div.style.backgroundColor = "blue";
    },
    false
  );
  h2.addEventListener(
    "click",
    (event) => {
      event.target.textContent = "clicked";
    },
    false
  );
};

// how to use classlist 

const initapp1 = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");
    view.addEventListener(
      "click",
      (event) => {
        event.stopPropagation();
        // method prevents propagation of the same event from being called.
        // Propagation means bubbling up to parent elements or capturing down to child elements.
      
        // view.classList.add = "purple";
        // view.classList.remove = "darkblue";
        view.classList.toggle = "purple";
        view.classList.toggle = "darkblue";
      },
      false
    );
    div.addEventListener(
      "click",
      (event) => {
        div.classList.toggle = "blue";
        div.classList.toggle = "black";
      },
      false
    );
    h2.addEventListener(
      "click",
      (event) => {
        const mtText=event.target.textContent;
        mtText==="My 2nd View" ? (event.target.textContent="clicked"):(event.target.textContent="My 2nd View")
      },
      false
    );

    //   Another Example

    const nav=document.querySelector("nav");
    nav.addEventListener("mouseover",(event)=>{
        event.target.classList.add("height100")
    })
    nav.addEventListener("mouseout",(event)=>{
        event.target.classList.remove("height100")
    })
  };
  

//   Prevent Default 
const initapp2=()=>{
const view3=document.querySelector("#view3");
const myForm=view3.querySelector("#myForm");
myForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("Submit Event");
})
}




