// -------------------------
// Part 1: Variables & Conditionals
// -------------------------
let username = "Moses";
let age = 20;

// Conditional example
if (age >= 18) {
    console.log(username + " is an adult.");
} else {
    console.log(username + " is a minor.");
}

// -------------------------
// Part 2: Custom Functions
// -------------------------
function greetUser(name) {
    return "Hello, " + name + "! 👋";
}

function calculateSquare(number) {
    return number * number;
}

// -------------------------
// Part 3: Loops
// -------------------------
let numbers = [1, 2, 3, 4, 5];

// For loop
for (let i = 0; i < numbers.length; i++) {
    console.log("Number: " + numbers[i]);
}

// While loop
let counter = 0;
while (counter < 3) {
    console.log("While loop count: " + counter);
    counter++;
}

// -------------------------
// Part 4: DOM Interactions
// -------------------------

// 1. Change content when button clicked
document.getElementById("greetBtn").addEventListener("click", function() {
    document.getElementById("message").textContent = greetUser(username);
});

// 2. Display list of numbers on button click
document.getElementById("listBtn").addEventListener("click", function() {
    let list = document.getElementById("numberList");
    list.innerHTML = ""; // clear previous list
    for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.textContent = "Number: " + i + " (Square: " + calculateSquare(i) + ")";
        list.appendChild(li);
    }
});

// 3. Automatically change text color
document.getElementById("message").style.color = "blue";
