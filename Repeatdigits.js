const repeatedDigits = [];

for (let i = 0; i <= 100; i++) {
  const numString = i.toString();
  if (numString.length === 2 && numString[0] === numString[1]) {
    repeatedDigits.push(i);
  }
}

console.log("Digits repeated twice in the range 0-100:");
console.log(repeatedDigits);
