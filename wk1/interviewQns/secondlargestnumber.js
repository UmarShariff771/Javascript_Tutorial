let number = [2, 10, 55, 11, 10.5, 3.6, 4, 66, 12, 52];
descsorted = number.sort((a, b) => b - a);
secondLargest = descsorted[1];

console.log(descsorted);
console.log(secondLargest);
