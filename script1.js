// Function definition with a parameter called 'name'
function greet(name) {
    console.log("Hello," + name);
}


// Function called with an arugument: "Jos"
greet("Jos");

// This function runs whenever the button is clicked
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});

console.log("Waiting for clicks...");