"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input
    .split("\n")[0]
    .split(" ")
    .map(n => parseInt(n));
  let conut = 1;
  let A = input[0];
  let B = input[1] - A;

  if (B < 0) {
    console.log(1);
  }

  if (B % (A - 1) === 0) {
    console.log(Math.floor(B / (A - 1)) + conut);
  } else {
    console.log(Math.floor(B / (A - 1)) + 1 + conut);
  }
}
