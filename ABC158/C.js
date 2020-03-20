"use strict";
main(
  require("fs")
    .readFileSync("/dev/stdin", "UTF-8")
    .trim()
    .split("\n")
);
function main(input) {
  input = input[0].split(" ").map(Number);
  let result = -1;

  for (let i = Math.max(...input) * 10; i < Math.max(...input) * 100; i++) {
    let A = Math.floor(i * 0.08);
    let B = Math.floor(i * 0.1);
    if (A === input[0] && B === input[1]) {
      result = i;
      break;
    }
  }

  console.log(result);
}
