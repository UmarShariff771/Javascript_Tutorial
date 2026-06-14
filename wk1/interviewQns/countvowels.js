let Word = "I Love JAVA so much"; // find the number of vowels present in the word

// output: I - 1, Love - 2, JAVA - 2, so - 1, much - 2

let Sentence = "I Love JAVA so much";
let words = Sentence.split(" ");

for (let i = 0; i < words.length; i++) {
  let word = words[i].toLowerCase();
  let count = 0;
  for (let j = 0; j < word.length; j++) {
    let vowels = ["a", "e", "i", "o", "u"];
    let character = word.charAt(j);
    if (vowels.includes(character)) {
      count++;
    }
  }
  console.log(words[i] + " - " + count);
}
