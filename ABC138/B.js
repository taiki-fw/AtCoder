"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.split("\n")[1].split(" ");

  let denominator = 0;
  for (const n of input) {
    denominator += 1 / parseInt(n);
  }
  console.log(1 / denominator);
}
