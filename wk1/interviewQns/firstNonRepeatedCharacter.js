let word = "First Non repeating character";

word = word.toLowerCase().replaceAll(/\s/g, "");
unique = "";
nonrepeat = "";

for (let i = 0; i < word.length; i++) {
  let count = 0;
  let character = word.charAt(i);
  if (unique.includes(character)) {
    continue;
  }
  for (let j = 0; j < word.length; j++) {
    let iterate = word.charAt(j);
    if (character === iterate) {
      count++;
    }
  }
  if (count < 2) {
    nonrepeat = nonrepeat + character;
  }
  unique = unique + character;
}

console.log("The first non repeating character is: " + nonrepeat.charAt(0));
