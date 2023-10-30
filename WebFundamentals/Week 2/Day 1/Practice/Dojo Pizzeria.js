
function pizzaOven(crustTupe, sauceType, cheeses, toppings) {
    var pizza= {};
    pizza.crustType= crustTupe;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var s1 = pizzaOven("deep dish", "traditional", "mozarella", ["pepperoni", "sausage"]);
console.log(s1);
var s2=pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],  ["mushrooms", "olives", "onions"]);
console.log(s2);
var s3=pizzaOven("4saison","traditional","mozarella", ["mushrooms", "olives", "onions"]);
console.log(s3);
var s4=pizzaOven("turc","marinara",["mozzarella", "feta"],[ "olives", "onions"]);
console.log(s4);

