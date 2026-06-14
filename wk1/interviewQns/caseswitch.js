let name = "John Hamish Watson";
let split = name.split("");

for (let i = 0; i < split.length; i++) {
  let char = split[i];
  if (char == char.toUpperCase()) {
    split[i] = char.toLowerCase();
  } else {
    split[i] = char.toUpperCase();
  }
}

console.log(split.join(""));
