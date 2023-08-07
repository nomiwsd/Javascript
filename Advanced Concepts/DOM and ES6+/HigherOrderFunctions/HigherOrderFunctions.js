// Higher Order Functions
// a higher order function is a function that does at least one of the following:

// take pne or more functions as an argument 
// returns a function as the result 


// forEach()


 import { posts } from "./Posts";

 posts.forEach(post=>{
    console.log(post);
 });

 console.clear();

//  Filtered function posts

const filterPosts=posts.filter(post =>{
    return post.userId===1;
});
console.log(filterPosts);

// map function
const mappedposts=posts.map(post=>{
    return post.id*10;
})
console.log(mappedposts);


// reduced function

const reducedPosts=mappedposts.reduce((sum,post)=>{
    return sum+post;
});
console.log(reducedPosts); 

