/**
 * A data type can be represented in one of these forms:
 * 1. Literals
 * 2. Variables
 * 3. Expressions
 */

// String
console.log("Hello") // Literals
let str = "Hello" // Variables
console.log(str)
console.log("He" + "llo") // Expressions

// Boolean

console.log(true) // Literals
let bool = true // Variables
console.log(bool)
console.log(typeof(5 < 10)) // Expressions

//Function

function sum(num1, num2) {
    return num1 + num2 // return type is a number
}
sum(2,2)
console.log(sum(2, 2)) // 4
console.log(typeof sum(2, 2)) // number