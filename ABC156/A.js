"use strict";
main(
  require("fs")
    .readFileSync("/dev/stdin", "UTF-8")
    .trim()
    .split("\n")
);

function main(input) {
  input = input[0].split(" ").map(Number);

  // if (input[0] >= 10) {
  //   console.log(input[1]);
  // } else {
  //   console.log(input[1] + 100 * (10 - input[0]));
  // }

  console.log(input[1] + 100 * (10 - Math.min(10, input[0])));
}
