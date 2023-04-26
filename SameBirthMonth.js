let birthMonths = [];

for (let i = 0; i < 50; i++) {
  let month = Math.floor(Math.random() * 12) + 1; 
  let year = Math.floor(Math.random() * 2) + 92; 3
  birthMonths.push(month + "-" + year); 
}


let counts = {};


for (let i = 0; i < birthMonths.length; i++) {
  if (counts[birthMonths[i]]) {
    counts[birthMonths[i]]++;
  } else {
    counts[birthMonths[i]] = 1;
  }
}

let sameBirthMonths = [];

for (let month in counts) {
  if (counts[month] > 1) {
    sameBirthMonths.push(month);
  }
}

console.log("Birth months of individuals having birthdays in the same month: " + sameBirthMonths);
