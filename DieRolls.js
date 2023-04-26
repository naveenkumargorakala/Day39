const rolls = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};

let maxRoll = 0;
let minRoll = Infinity;

while (maxRoll < 10 && minRoll < maxRoll - 1) {
  const roll = Math.floor(Math.random() * 6) + 1;
  rolls[roll]++;
  console.log(`Rolled a ${roll}`);
  
  maxRoll = Math.max(...Object.values(rolls));
  minRoll = Math.min(...Object.values(rolls));
}

console.log(`Number of times each number was rolled:`, rolls);

const maxRolls = Object.entries(rolls).filter(([_, count]) => count === maxRoll).map(([num, _]) => num);
const minRolls = Object.entries(rolls).filter(([_, count]) => count === minRoll).map(([num, _]) => num);

console.log(`Numbers that were rolled the most: ${maxRolls}`);
console.log(`Numbers that were rolled the least: ${minRolls}`);