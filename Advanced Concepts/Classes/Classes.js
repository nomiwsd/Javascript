// classes

class Pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "Original";
    this.toppings = [];
  }

  getcrust() {
    return this.crust;
  }
  setcrust(Pizzacrust) {
    this.crust = Pizzacrust;
  }
  getToppings() {
    return this.toppings;
  }
  setToppings() {
    this.toppings.push(toppings);
  }
  bake() {
    console.log(`Baking a ${this.size} ${this.crust} ${this.type}Crust Pizza`);
  }
}

const myPizza = new Pizza("Pepporoni", "Small");
myPizza.Pizzacrust = "sausage";
myPizza.bake();
myPizza.setToppings("Sausage");
myPizza.setToppings("Olives");
console.log(myPizza.Pizzacrust);
console.log(myPizza.getToppings);

// Super Class Topic and Example

class Pizza {
  constructor(pizzaSize) {
    this.size = pizzaSize;
    this.crust = "Original";
  }

  getcrust() {
    return this.crust;
  }
  setcrust(Pizzacrust) {
    this.crust = Pizzacrust;
  }
}
// Child Class
class SpecialityPizza extends Pizza {
  constructor(pizzaSize) {
    super(pizzaSize);
    this.type = "This Works";
  }
  slice() {
    console.log(`Our $(this.type) $(this.type) has 8 Slices`);
  }
}

const mySpeciality = new SpecialityPizza("Medium");
mySpeciality.slice();

// 3rd Example about Naming Coventions

class Pizza {
  constructor(pizzaSize) {
    this._size = pizzaSize;
    this._crust = "Original";
  }

  getcrust() {
    return this._crust;
  }
  setcrust(Pizzacrust) {
    this._crust = Pizzacrust;
  }
  // Here underscore indicate the private property of class should not modify the outside the class
}

// 4th Example
// Factory Function for object creation in js
function pizzaFactory(pizzaSize) {
  const crust = "Original";
  const size = "PizzaSize";
  return {
    bake: () => {
      console.log(`Baking a ${size} ${crust} crust pizza.`);
    },
  };
}

const myPizza = pizzaFactory("Small");
myPizza.bake();

//  5th Example

class Pizza {
  crust = "original";    
//   public
#sauce="traditional";
// private parameters;
#size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }

  getcrust() {
    return this.crust;
  }
  setcrust(Pizzacrust) {
    this.crust = Pizzacrust;
  }
  hereYouGo(){
    console.log(`Here's Your ${this.crust} ${this.#sauce} sauce ${this.#size} Pizza.`)
  }
}
 const myPizza=new Pizza("large");
 myPizza.hereYouGo();
 console.log(myPizza.#sauce); 