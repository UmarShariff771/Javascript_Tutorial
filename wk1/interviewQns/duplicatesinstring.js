let sentence = "Welcome to Jurassic Park and my name is JOhn Hammond";
let sent = sentence.toLowerCase().replaceAll(" ", "");
let unique = "";

for (i = 0; i < sent.length; i++) {
  let char1 = sent.charAt(i);
  let count = 0;
  if (unique.includes(char1)) {
    continue;
  }
  for (j = 0; j < sent.length; j++) {
    let char2 = sent.charAt(j);
    if (char1 === char2) {
      count++;
    }
  }
  count = count - 1;
  if (count <= 0) {
    console.log(char1 + " has no duplicate");
  } else {
    console.log(char1 + " has " + count + " duplicate");
  }
  unique = unique + char1;
}
