// objects 
// key value pairs in curly pairs
const myboj={myname:"Dave"};
console.log(myboj.myname);

// 2nd example

const anotherobj={
    alive:true,
    answer:42,
    hobbies:["Eat","Sleep","Code"],
    beverage:{
        morning:"coffee",
        afternoon:"Iced Tea"
    },

    action:function() {
        return `time for ${this.beverage.morning}`;
    }
};

console.log(anotherobj.alive);
console.log(anotherobj.answer);
console.log(anotherobj.hobbies[0]);
console.log(anotherobj.hobbies[1]);
console.log(anotherobj.beverage.morning);

// 3rd example

const vehicle={
    wheels:4,
    engine: function(){
        return "vromm";
    }
};

const truck =Object.create(vehicle);
truck.doors=2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

const car=Object.create(vehicle);
car.doors=4;
car.engine=function() {
    return "Woooosh";
}
console.log(car.engine());


const tesla= Object.create(car);
console.log(tesla.wheels);
tesla.engine=function() {
    return "shhhh";
}
console.log(tesla.engine());


// 4th example

const Band={
    vocals:"Robert Plant",
    guitar:"Jimmy Page",
    bass:"John Paul Jones",
    drums:"John Bonham",
};

delete Band.drums;
console.log(Band.hasOwnProperty("Drums"));
console.log(Object.keys(Band));
console.log(Object.values(Band));

for(let job in Band  ){
    console.log(`On ${job}, it is ${Band[job]}!`);

}

// 5th Example 
// Object Destructing important Topic
// Object destructuring is a useful JavaScript feature to extract properties from objects and bind them to variables.

// Even better, object destructuring can extract multiple properties in a single statement, can access properties from nested objects, and can set a default value if the property doesn't exist.

const Band1={
    vocals:"Robert Plant",
    guitar:"Jimmy Page",
    bass:"John Paul Jones",
    drums:"John Bonham",
};


const { guitar:myVariable, bass:myBass}=Band; 
console.log(myVariable);
console.log(myBass);

const { guitar, bass,drums,vocals}=Band; 


function sings({Vocals}){
    return `${Vocals} Sings !`
}
console.log(sings(Band1));