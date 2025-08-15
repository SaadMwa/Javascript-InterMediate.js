
                // 1. Function Declaration vs Function Expression


// Function Declaration 
greetDeclaration();   // Can call before declaration 
function greetDeclaration() {
  console.log("Hello from Function Declaration!");
}

// Function Expression //Can not call Before Declaration 
const greetExpression = function () {
  console.log("Hello from Function Expression!");
};
greetExpression();


                         // 2. Arrow Functions


// Simple arrow function
const add = (a, b) => a + b;
console.log("Arrow Function add:", add(5, 3)); // Output: 8

// Arrow function with single parameter
const square = num => num * num;
console.log("Square:", square(4)); // Output: 16

// Arrow function with no parameters
const sayHi = () => console.log("Hi from Arrow Function!");
sayHi();


// 3. Scope: let, const, var (global, block, function scope)


let globalVar = "I am global";

function scopeTest() {
  let localVar = "I am local to function";
  if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar);
  }
  console.log(localVar);
}

scopeTest();
console.log(globalVar);


// 4. Closures (Intro)


function makeCounter(start) {
  let count = start;
  return function () {
    count++;
    return count;
  };
}

const counterA = makeCounter(5);
console.log(counterA()); // 6
console.log(counterA()); // 7
const counterB = makeCounter(10);
console.log(counterB()); // 11
console.log(counterA()); // 8 (remembers its own state)


// 5. Arrays & Methods


const arr = [1, 2, 3, 4, 5];

// push
arr.push(6);
console.log("After push:", arr);

// map
const doubled = arr.map(num => num * 2);
console.log("Doubled:", doubled);

// filter
const evens = arr.filter(num => num % 2 === 0);
console.log("Even Numbers:", evens);

// reduce
const sum = arr.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);


// 6. Objects: create, access, modify


const person = {
  name: "Saad",
  age: 25
};
console.log("Name:", person.name);

// Modify
person.age = 18;
console.log("Updated Age:", person.age);

// Add
person.city = "New York";
console.log("Updated Person:", person);


// 7. Destructuring, Spread, Rest


// Array destructuring
const [first, second, ...rest] = [10, 20, 30, 40];
console.log("First:", first, "Second:", second, "Rest:", rest);

// Object destructuring
const { name, age } = person;
console.log("Name:", name, "Age:", age);

// Spread operator (arrays)
const nums1 = [1, 2];
const nums2 = [3, 4];
const merged = [...nums1, ...nums2];
console.log("Merged Array:", merged);

// Rest operator (functions)
function sumAll(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}
console.log("Sum All:", sumAll(1, 2, 3, 4));


// 8. Callback Functions (Basic)


function processUserInput(callback) {
  const name = "John"; 
  callback(name);
}

processUserInput(function (name) {
  console.log("Hello", name, "from callback!");
});
