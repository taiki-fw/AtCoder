"use strict";

main(require("fs").readFileSync("/dev/stdin", "utf-8"));

function main(input) {
  input = input.split("\n");
  const line = parseInt(input.shift()); // 切れ目の数
  input = input[0].split(" ").map(l => parseInt(l)); // 区間の長さ
  let indicate = 0;
  let indicateIdx = 0;
  for (let i = 0; i < input.length; i++) {
    if (indicate + input[i] < howLength(input, i + 1, input.length)) {
      indicate += input[i];
    } else {
      indicate += input[i];
      indicateIdx = i;
      break;
    }
  }

  console.log(
    Math.abs(indicate - howLength(input, indicateIdx + 1, input.length))
  );
}

function howLength(array, first, last) {
  let result = 0;
  for (first; first < last; first++) {
    result += array[first];
  }
  return result;
}
