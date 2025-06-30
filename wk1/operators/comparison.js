/**
 * Comparison Operators
 * 1. == Checks only the value
 * 2. === Checks both value and type
 * 3. != Checks only the value (not equal)
 * 4. !== Checks both value and type (not equal)
 * 5. > Greater than
 * 6. < Less than
 * 7. >= Greater than or equal to
 * 8. <= Less than or equal to
 * @returns boolean
 *
 * @rule
 * In most case, If the two operands are of different types,
 * JavaScript will attempt to convert them to the same type before making the comparison.
 * This behavior generally results in comparing the operands numerically.
 *
 */

// Use case1: Strict Equality (===, !==)

let a = "One";
let b = 1;

console.log(a == b); // true
console.log(a === b); // true
console.log(+a)

// Not Equal

console.log(1 != 1); // false