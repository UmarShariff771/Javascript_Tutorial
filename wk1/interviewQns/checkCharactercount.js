let word = "Welcome to India";
let sent = word.toLowerCase().replaceAll(" ", "");
let unique = "";

for (let i = 0; i <= sent.length; i++) {
  let letter1 = sent.charAt(i);
  let count = 0;
  if (unique.includes(letter1)) {
    continue;
  }
  for (let j = 0; j <= sent.length; j++) {
    let letter2 = sent.charAt(j);
    if (letter1 === letter2) {
      count++;
    }
  }
  unique = unique + letter1;
  console.log("The letter " + letter1 + " = " + count);
}
