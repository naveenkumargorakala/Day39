const numArray = [];
for (let i = 0; i < 10; i++) {
  const randomNum = Math.floor(Math.random() * 900) + 100;
  numArray.push(randomNum);
}
console.log('Array:', numArray);

// Sort the array
numArray.sort((a, b) => a - b);
console.log('Sorted array:', numArray);

// Find the second largest and second smallest elements in the array
const secondSmallest = numArray[1];
const secondLargest = numArray[numArray.length - 2];
console.log('Second smallest:', secondSmallest);
console.log('Second largest:', secondLargest);