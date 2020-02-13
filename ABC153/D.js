"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = parseInt(input.trim().split(" ")[0]);
  let count = 0;
  let result = 1;

  while (input !== 1 || count === 10) {
    input = Math.floor(input / 2);
    count += 1;
  }

  console.log(Math.pow(2, count) + Math.pow(2, count) - 1);
}
