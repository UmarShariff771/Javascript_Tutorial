let word =
  "Welcome to India and India is a beautiful country and dirty country as well";
let sent = word.toLowerCase().split(" ");
let uniqueWords = [];

for (let i = 0; i < sent.length; i++) {
  let word1 = sent[i];
  let count = 0;
  if (uniqueWords.includes(word1)) {
    continue;
  }
  for (let j = 0; j < sent.length; j++) {
    let word2 = sent[j];
    if (word1 === word2) {
      count++;
    }
  }
  uniqueWords.push(word1);
  console.log("The letter " + word1 + " = " + count);
}
