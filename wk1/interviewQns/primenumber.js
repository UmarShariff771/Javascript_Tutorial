let num = 217;
let n = 1;
let count = 0;

while (n <= num) {
  if (count > 2) {
    break;
  }
  if (num % n == 0) {
    count++;
  }
  n++;
}
console.log(count);
if (count <= 2) {
  console.log("Prime Number");
} else {
  console.log("Not a prime number");
}
