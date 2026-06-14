let num = 10;
let a = 0;
let b = 1;
let temp = 0;

if (num === 1) {
  console.log(a);
} else if (num === 2) {
  console.log(b);
} else {
  console.log(a);
  console.log(b);
  n = 3;
  while (n < num) {
    temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
    n++;
  }
}
