"use strict";
function main(inp) {
  inp = inp
    .split("\n")
    .shift()
    .split(" ")
    .map(n => parseInt(n));

  const A = inp[0];
  const B = inp[1];
  const X = inp[2];
  // toString(num).length
  let max = searchRange(A, B, X);
  let min = minNum(max);

  let result = 0;
  console.log(min, max);

  for (min; min <= max; min++) {
    if (X > A * min + B * String(min).length) {
      result = min;
    }
  }

  console.log(result);
}

function minNum(num) {
  const pulledNum = String(num)
    .split("")
    .map((v, i) => (i === 0 ? String(parseInt(v) - 1) : v))
    .join("");
  return num - parseInt(pulledNum);
}

function searchRange(A, B, X) {
  let indicate = 9;
  let length = 1;
  while (true) {
    if (X < 10 * indicate + 7 * length) {
      return indicate;
    }
    indicate * 10;
    length++;
  }
}

function binSearch(pl, pc, pr) {}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
