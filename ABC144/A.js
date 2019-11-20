"use strict";

function main(input) {
  input = input
    .split("\n")[0]
    .split(" ")
    .map(i => parseInt(i));
  let A = input.shift();
  let B = input.shift();
  if (A < 10 && B < 10) {
    console.log(A * B);
  } else {
    console.log("-1");
  }
}
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));
