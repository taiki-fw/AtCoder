"use strict";
main(
  require("fs")
    .readFileSync("/dev/stdin", "UTF-8")
    .trim()
    .split("\n")
);

function main(input) {
  input = input[0].split(" ").map(Number);

  // console.log(input[0].toString(input[1]).length);
  let count = 0;
  while (input[0] > 0) {
    input[0] = Math.floor(input[0] / input[1]);

    count++;
  }
  console.log(count);
}
