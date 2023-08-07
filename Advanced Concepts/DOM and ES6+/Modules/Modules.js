// Modules

// JavaScript modules allow you to break up your code into separate files.

// This makes it easier to maintain a code-base.

// 1st Method
import playGuitar from "./Guitar";
import { Shredding as shred, Plucking as pluck } from "./Guitar";
console.log(playGuitar);
console.log(shred);
console.log(pluck);

// 2nd Method
import * as Guitars from "./Guitar";
console.log(Guitars.playGuitar());
console.log(Guitars.Shredding());
console.log(Guitars.Plucking());

// 3rd method for class
import User from "./user";
const me = new User("email@gmail.com", "Dave");
console.log(me);
console.log(me.greetings());
