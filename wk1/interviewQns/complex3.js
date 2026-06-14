// // REMOVE Duplicates
// let word = "Welcome to India and India is a beautiful country";
// let unique = "";

// for (let i = 0; i < word.length; i++) {
//   let letter = word.charAt(i);
//   if (!unique.includes(letter)) {
//     unique = unique + letter;
//   }
// }

// console.log(unique);

// // Count the letters:
// let pass = "Welcome to India and India is a beautiful country";
// pass = pass.replaceAll(/\s/g, "").toLowerCase();
// let uni = "";

// for (let i = 0; i < pass.length; i++) {
//   let letter1 = pass.charAt(i);
//   let count = 0;
//   if (uni.includes(letter1)) {
//     continue;
//   }
//   for (let j = 0; j < pass.length; j++) {
//     let letter2 = pass.charAt(j);
//     if (letter1 == letter2) {
//       count++;
//     }
//   }
//   console.log("The letter " + letter1 + " count is " + count);
//   uni = uni + letter1;
// }

let num = [20, 45, 33,12, 9, 108, 65, 43];

console.log(num.sort(function (a,b) {return b-a }))

const person = new Map([["fname","John"], ["lname","Doe"], ["age",25]]);

for(let x of person) {
    console.log(person[x])
}


