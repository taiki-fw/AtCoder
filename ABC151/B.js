"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

// 目標点をすでにオーバーしている場合について

function main(input) {
  input = input.trim().split("\n");
  const info = input
    .shift()
    .split(" ")
    .map(e => parseInt(e));

  const tag = info[0] * info[2];
  const subjectPointMax = info[1];
  const subjectPoint = input[0].split(" ").map(e => parseInt(e));

  let sum = 0;
  for (let i = 0; i < subjectPoint.length - 1; i++) {
    sum += subjectPoint[i];
  }

  let result = tag - sum;

  if (result < 0) {
    result = 0;
  } else if (result > subjectPointMax) {
    result = -1;
  }

  console.log(result);
}
