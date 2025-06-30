/**
 * Logical Operators
 * 1. && Logical AND
 * 2. || Logical OR
 * 3. ! Logical NOT
 *
 * Two main purposes:
 * 1. In conditional statements (e.g: if...else)
 * 2. To have a default value
 *
 *
 */

// Use case1: Logical AND (&&) check if given value is a text

let val = 1;
console.log(typeof typeof val);

if (typeof val === "string" && val.length > 1) {
  console.log(`Given value : ${val} is a valid string`);
} else {
  console.log(`Given value : ${val} is NOT a valid string`);
}

// Use case2: Logical OR (||) check if given day is a weekend

let val2 = "";
console.log(typeof typeof val2);

if (val2 === "Saturday" || val2 === "Sunday") {
  console.log(`Given day is a :${val2} is a weekend`);
} else {
  console.log(`Given day is a :${val2} is NOT a weekend`);
}

// Use case3: Logical NOT (!) check if both first and last name is provided

let firstName = "Stark";
let lastName = "Bob";

if (!firstName || !lastName) {
  console.log(`One of the names: ${firstName} or  ${lastName} is not a valid`);
}
else {
    console.log(`Both names: ${firstName} and ${lastName} are valid`);
}
