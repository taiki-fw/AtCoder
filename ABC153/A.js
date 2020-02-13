"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input
    .split("\n")[0]
    .split(" ")
    .map(e => parseInt(e));
  const H = input[0];
  const A = input[1];

  if (H % A === 0) {
    console.log(Math.floor(H / A));
  } else {
    console.log(Math.floor(H / A) + 1);
  }
}
