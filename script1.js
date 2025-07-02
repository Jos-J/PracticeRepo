// arithmetic operations
price = 100;
VAR = price;
const TAX_RATE = .20

totalPriceWithTax = price + (price * TAX_RATE)

console.log(totalPriceWithTax)



// Function definition with a parameter called 'name'
function greet(name) {
    console.log("Hello," + name);
}


// Function called with an arugument: "Jos"
greet("Jos");

// // This function runs whenever the button is clicked
// document.getElementById("myButton").addEventListener("click", function() {
//     alert("Button was clicked!");
// });

// console.log("Waiting for clicks...");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Create an object (instance) of the class
const person1 = new Person("Jimi", 125);
person1.greet();  // Output: Hi, my name is Jimi and I'm 125 years old.


function greet(name) {
  console.log("hello," + name);
}


greet("doug");

