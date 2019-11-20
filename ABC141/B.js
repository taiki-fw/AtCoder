"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input
    .split("\n")
    .shift()
    .split("");
  let isEasy = true;
  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0 && input[i] === "L") {
      isEasy = false;
      break;
    } else if (i % 2 === 1 && input[i] === "R") {
      isEasy = false;
      break;
    }
  }
  console.log(isEasy ? "Yes" : "No");
}
