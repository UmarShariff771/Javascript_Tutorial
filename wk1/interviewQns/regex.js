let word = "123oIa#dh@Fn 12%3U ionK 234$oin";

console.log(word.replaceAll(/\W/g, ""));

console.log(word.replaceAll(/\s/g, ""));

console.log(word.replaceAll(/\d/g, ""));

console.log(word.replaceAll(/[A-Z]/g, ""));
