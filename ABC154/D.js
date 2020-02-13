"use strict";
main(
  require("fs")
    .readFileSync("/dev/stdin", "UTF-8")
    .trim()
    .split("\n")
);

function main(input) {
  const num = parseInt(input[0].split(" ")[0]);
  const pick = parseInt(input[0].split(" ")[1]);
  input.shift();
  input = input[0].split(" ").map(Number);

  let exp = [];
  for (let i = 0; i < num; i++) {
    exp.push((1 + input[i]) / 2);
  }

  let expSum = [0];
  for (let i = 1; i <= num; i++) {
    expSum[i] = expSum[i - 1] + exp[i - 1];
  }

  let max = 0;
  for (let i = pick - 1; i < expSum.length; i++) {
    if (max < expSum[i] - expSum[i - pick]) {
      max = expSum[i] - expSum[i - pick];
    }
  }

  console.log(max);
}
