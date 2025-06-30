let val1 = "5"
let val2 = "5.5"

console.log(`The type of val1: ${typeof val1}`) // String
console.log(`The type of val1: ${typeof val2}`) // String

// Convert a string to a number
let numVal1 = parseInt(val1) // 5
let numVal2 = parseFloat(val2) // 5.5

console.log(`The type of val1: ${typeof numVal1} and the value: ${numVal1}`) // Number
console.log(`The type of val1: ${typeof numVal2} and the value: ${numVal2}`) // Number

// Unary Plus
let numVal3 = +val1
let numVal4 = +val2

console.log(`The type of val1: ${typeof numVal3} and the value: ${numVal3}`) // Number
console.log(`The type of val1: ${typeof numVal4} and the value: ${numVal4}`) // Number

// Convert to a string
let strVal = numVal1.toString()
console.log(`The type of val1: ${typeof strVal} and the value: ${strVal}`) // String