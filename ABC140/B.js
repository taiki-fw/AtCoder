"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.split("\n");
  const num = parseInt(input.shift()); // 料理数
  const order = input[0].split(" ").map(c => parseInt(c));
  const point = input[1].split(" ").map(c => parseInt(c));
  const addPoint = input[2].split(" ").map(p => parseInt(p));
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += point[order[i] - 1];

    if (order[i + 1] - order[i] === 1) {
      sum += addPoint[order[i] - 1];
    }
  }
  console.log(sum);
}
