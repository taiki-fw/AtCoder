"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.split("\n");
  const num = parseInt(input.shift()); // マス数
  input = input[0].split(" ").map(m => parseInt(m)); // 各マスの高さ
  let max = 0;
  let count = 0;
  for (let i = 0; i < num; i++) {
    if (input[i] >= input[i + 1]) {
      count++;
    } else {
      if (max < count) max = count;
      count = 0;
    }
  }
  console.log(max);
}
