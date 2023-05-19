// Global variables
let crust = document.getElementById('crust');
let sauce = document.getElementById('sauce');

// Topping Array
let toppings = [];

// event listener
let formButton = document.getElementById('btn');
formButton.addEventListener('click', function(event) {
  event.preventDefault(); 
  let topping1 = document.getElementById('topping1').value;
  let topping2 = document.getElementById('topping2').value;
  let topping3 = document.getElementById('topping3').value;
  toppings.push(topping1, topping2, topping3); 
  calculateTotal(toppings); 
});

function calculateTotal(toppingArray) {
  let total = 0;
  let toppingCost = 2.50;
  let baseCost = 5.50; // cost of crust and sauce

  // order string concatenation
  let orderString = crust.value + " pizza with " + sauce.value + ".";
  let toppingString = "Toppings: ";

  // For Loop
  for (let i = 0; i < toppingArray.length; i++) {
    if (toppingArray[i] !== '') { 
      total += toppingCost;
      toppingString += toppingArray[i] + " ";
    }
  }

  // total = basecost + cost of all toppings
  total += baseCost;

  // set DOM total += total
  document.getElementById('total').innerHTML = "$" + total.toFixed(2);

  // use DOM: = orderString
  document.getElementById('pizzaOrder').innerHTML = orderString;

  // use DOM: = toppingString
  document.getElementById('toppings').innerHTML = toppingString;
}
