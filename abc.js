
// Sample JavaScript Program

// 1. Variables
const name = "John";
let age = 25;

// 2. Function
function greetUser(username) {
    return `Hello, ${username}! Welcome to JavaScript.`;
}

// 3. Condition
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}

// 4. Loop
for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}

// 5. Array
const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach((fruit) => {
    console.log(fruit);
});

// 6. Function call
console.log(greetUser(name));

// 7. Object
const student = {
    name: "John",
    age: 25,
    course: "JavaScript"
};

console.log(student);
