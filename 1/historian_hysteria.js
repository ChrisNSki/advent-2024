const fs = require("fs").promises;

const SeparateLists = async () => {
  let list_a = [];
  let list_b = [];

  const data = await fs.readFile("input.txt", "utf8");

  let lines = data.split("\n");

  lines.forEach((line) => {
    let left_number = line.split("   ")[0];
    let right_number = line.split("   ")[1];
    list_a.push(left_number.trim());
    list_b.push(right_number.trim());
  });

  return [list_a, list_b];
};

const CompareLists = async () => {
  let [list_a, list_b] = await SeparateLists();

  list_a.sort((a, b) => a - b);
  list_b.sort((a, b) => a - b);

  console.log(list_a);
  console.log(list_b);
  distance_calc = 0;

  for (let i = 0; i < list_a.length; i++) {
    distance_calc += Math.abs(list_a[i] - list_b[i]);
  }

  return distance_calc;
};

CompareLists().then((result) => {
  console.log(result);
});
