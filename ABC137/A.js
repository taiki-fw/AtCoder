"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input
    .split("\n")[0]
    .split(" ")
    .map(n => Number(n));
  console.log(
    Math.max(input[0] + input[1], input[0] - input[1], input[0] * input[1])
  );
}
