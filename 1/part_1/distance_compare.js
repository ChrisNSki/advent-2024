const fs = require("fs").promises;

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

  listA.sort((a, b) => a - b);
  listB.sort((a, b) => a - b);

  distanceCalc = 0;

  for (let i = 0; i < listA.length; i++) {
    distanceCalc += Math.abs(listA[i] - listB[i]);
  }

  return distanceCalc;
};

CompareLists().then((result) => {
  console.log(result);
});
