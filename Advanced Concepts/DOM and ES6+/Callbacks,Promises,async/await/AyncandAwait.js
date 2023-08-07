// Async and Await
// async makes a function return a Promise

// await makes a function wait for a Promise

const myUsers = {
  userlist: [],
};

const mycoolfunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserdata = await response.json();
  return jsonUserdata;
};

const anotherfunction = async () => {
  const data = await mycoolfunction();
  myUsers.userlist = data;
  console.log(myUsers.userlist);
};

anotherfunction();

// Another Example
// workflow function

const getAlluserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserdata = await response.json();
  const userEmailArray = jsonUserdata.map((user) => {
    return user.email;
  });
  console.log(getAlluserEmails());
  postToWebPage(userEmailArray);
};
const postToWebPage = (data) => {
  console.log(userEmailArray);
};
getAlluserEmails();

// 2nd parameter of fetch is a object

const getDadjoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const jsonjokedata = await response.json();
  console.log(jsonjokedata.joke);
};
getDadjoke();
// another example of text method

const getDadjoke1 = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "text/plain",
    },
  });
  const textjokedata = await response.text();
  console.log(textjokedata);
};
getDadjoke1();

// another example of post method

const jokeObject = {
  id: "0oO71TSv4Ed",
  joke: "why was it called the dark ages? Because of all the knights.",
};

const postData = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  });
  const jsonresponse = await response.json();
  console.log(jsonresponse.headers);
};
postData(jokeObject);

//   Another Example of two parameters

const requestjoke = async (firstName, lastName) => {
  const response = await fetch(
    `https://api,icndb.com/jokes/random?firstName=${firstName} & lastName=${lastName}&limitTo=[nerdy]`
  );
  const jsonResponse = await response.json();
  console.log(jsonResponse.value.joke);
};

requestjoke("Clint", "Eastwood");

// Abstract in to Function
// maybe from a form

const getDatafromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    Categories: ["nerdy"],
  };
  return requestObj;
};

const buildRequestURl = (requestData) => {
  return `https://api,icndb.com/jokes/random?firstName=${requestData.firstName} & lastName=${requestData.lastName}&limitTo=${requestData.Categories} `;
};

const requestjoke1 = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke=jsonResponse.value.joke;
  postJoketoPage(joke);
};
const postJoketoPage=(joke)=>{
  console.log(joke);
}

// Procedural Workflow function

const ProcessJokeRequest=async ()=>{
  const requestData= getDatafromForm();
  const requestUrl=buildRequestURl(requestData);
  await requestjoke1(requestUrl);
  console.log("finished!");
}
ProcessJokeRequest();