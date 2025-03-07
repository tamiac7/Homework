// Pizza Place Homework Part II

// Create an array of pizzaToppings
const pizzaToppings = ["Mushrooms", "Vegan Sausage", "Vegan Peperoni", "Peppers", "Vegan Cheese"]

// Create a greetCustomer function
function greetCustomer() {
let greeting = "Welcome to New Age Pizza, we offer a variety of vegan toppings which are..."
  for (let topping of pizzaToppings) {
    greeting += topping
  };
  console.log(greeting);
}
greetCustomer();

// Create a getPizzaOrder function
function getPizzaOrder(size, crust, ...pizzaToppings) {
  console.log(size);
  console.log(crust);
  console.log(...pizzaToppings);

  let pizzaOrder = `One small ${size} inch ${crust} crust pizza with`
  for (let topping of pizzaToppings) {
    pizzaOrder += topping
  };
  console.log(pizzaOrder)

  return [size, crust, pizzaToppings]
}

getPizzaOrder(10, "thick", "Mushrooms", "Vegan Sausage", "Vegan Peperoni", "Peppers", "Vegan Cheese");
// console.log(getPizzaOrder(10, "thick", "Mushrooms", "Vegan Sausage", "Vegan Peperoni", "Peppers", "Vegan Cheese"));

// Create a preparePizza function
function preparePizza() {
  const pizza = {
    size: "10 inch",
    crust: "thick",
    toppings: ["Vegan Sausage", "Vegan Cheese", "Peppers"]
    }
    console.log(`Cooking one small ${pizza.size}, ${pizza.crust}, ${pizza.toppings}`);
      }

preparePizza();



// Create a servePizza function
function servePizza() {
  const pizza = {
    size: "10 inch",
    crust: "thick",
    toppings: ["Vegan Sausage", "Vegan Cheese", "Peppers"]
    }

  console.log(`Order up! Here is your small ${pizza.size}, ${pizza.crust}, ${pizza.toppings}. Enjoy!`);
}
servePizza();
