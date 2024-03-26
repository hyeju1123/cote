let fs = require("fs");
let input = fs.readFileSync("ques.txt").toString().trim().split("\n");
const [N, A, M, B] = input.map(v => v.split(" ").map(x => Number(x)));

A.sort((a, b) => a - b);

const BinarySearch = (arr, target, low, high) => {
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return 0;
};

const answer = B.map(num => BinarySearch(A, num, 0, N));
let printer = "";
for (const a of answer) {
  printer += a.toString() + "\n";
}

console.log(printer);
