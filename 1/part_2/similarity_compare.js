const fs = require("fs").promises;

// Create 2 list arrays
const SeparateLists = async () => {
  let listA = [];
  let listB = [];

  const data = await fs.readFile("./1/input.txt", "utf8");

  let lines = data.split("\n");

  lines.forEach((line) => {
    let leftNumber = line.split("   ")[0];
    let rightNumber = line.split("   ")[1];
    listA.push(leftNumber.trim());
    listB.push(rightNumber.trim());
  });

  return [listA, listB];
};

const CompareLists = async () => {
  let [listA, listB] = await SeparateLists();

  similarityScore = 0;

  for (let i = 0; i < listA.length; i++) {
    timesOccurred = 0;
    similarityIncrease = 0;

    if (listB.includes(listA[i])) {
      timesOccurred = listB.filter((x) => x === listA[i]).length;
    }
    similarityIncrease = listA[i] * timesOccurred;
    similarityScore += similarityIncrease;
  }

  return similarityScore;
};

CompareLists().then((result) => {
  console.log(result);
});
