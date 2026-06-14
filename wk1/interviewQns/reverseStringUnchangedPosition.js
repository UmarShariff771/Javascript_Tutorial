let sent = "example welcome to java";

let words = sent.split(" ");
let reverse = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  word = word.split("").reverse().join("");
  reverse.push(word);
}

reverse = reverse.join(" ");
console.log(reverse);
