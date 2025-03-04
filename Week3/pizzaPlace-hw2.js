// Pizza Place Homework Part II

// Create an array of pizzaToppings
const pizzaToppings = ["Mushrooms", "Vegan Sausage", "Vegan Peperoni", "Peppers", "Vegan Cheese"]

// Create a greetCustomer function
function greetCustomer() {
let greeting = "Welcome to New Age Pizza, we offer a variety of vegan toppings which are..."
  console.log(greeting);

  for (let topping of pizzaToppings) {
    console.log(topping);
  };
}

greetCustomer()

// Create a getPizzaOrder function
function getPizzaOrder(size, crust, ...pizzaToppings) {
  console.log(size);
  console.log(crust);
  console.log(...pizzaToppings);

  let pizzaOrder = `One ${size} ${crust} crust pizza with`
  for (let topping of pizzaToppings) {
    pizzaOrder += topping
  };
  console.log(pizzaOrder)

  return [size, crust, pizzaToppings]
}

getPizzaOrder(10, "thick", "Mushrooms", "Vegan Sausage", "Vegan Peperoni", "Peppers", "Vegan Cheese");
// console.log(getPizzaOrder(10, "thick", "Mushrooms", "Vegan Sausage", "Vegan Peperoni", "Peppers", "Vegan Cheese"));

// Create a preparePizza function
function preparePizza(size, crust, toppings) {
  const pizza = {
    size: "10 inches",
    crust: "thick",
    toppings: ["Vegan Sausage", "Vegan Cheese", "Peppers"]
    }
    console.log(pizza.size);
    console.log(pizza.crust);
    console.log(pizza.toppings);
}

// Create a servePizza function
function servePizza() {
  const pizza = {
    size: "10 inches",
    crust: "thick",
    toppings: ["Vegan Sausage", "Vegan Cheese", "Peppers"]
    }

    let servePizza = `Order up! Here's your small ${pizza}`
    console.log(servePizza);
};

