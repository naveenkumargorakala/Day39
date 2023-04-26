function findTriplets(arr, n) {
    let found = false;
    for (let i = 0; i < n - 2; i++) {
      for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
          if (arr[i] + arr[j] + arr[k] === 0) {
            console.log(`Triplets found: ${arr[i]}, ${arr[j]}, ${arr[k]}`);
            found = true;
          }
        }
      }
    }
    if (found === false) {
      console.log("Triplets not found in the given array");
    }
  }
  
  const arr = [1, 2, -3, 4, -2, -1, 0];
  const n = arr.length;
  
  findTriplets(arr, n);