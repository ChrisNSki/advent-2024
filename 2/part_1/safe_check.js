const fs = require("fs").promises;

// Create 2 list arrays
const SeparateLists = async () => {
  const data = await fs.readFile("./2/input.txt", "utf8");
  const formattedReports = [];

  let allReports = data.split("\n");

  allReports.forEach((line) => {
    let report = line.trim().split(" ").map(Number);
    formattedReports.push(report);
  });
  return formattedReports;
};

const CheckReportSafety = async () => {
  const data = await SeparateLists();
  let validReports = 0;

  //for each report
  data.forEach((report) => {
    let increasing = false;
    let decreasing = false;
    let valid = true;

    for (let i = 0; i < report.length - 1; i++) {
      const numberDiff = report[i] - report[i + 1];

      if (Math.abs(numberDiff) > 3 || numberDiff === 0) valid = false;
      if (numberDiff < 0) increasing = true;
      if (numberDiff > 0) decreasing = true;
      if (increasing && decreasing) valid = false;
      if (!valid) break;
    }

    if (valid) ++validReports;
  });

  console.log("There are " + validReports + " valid reports.");
};

CheckReportSafety();
