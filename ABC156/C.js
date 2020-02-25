"use strict";
main(
  require("fs")
    .readFileSync("/dev/stdin", "UTF-8")
    .trim()
    .split("\n")
);

/**
 *
 * num
 * array
 *
 */

function main(input) {
  const num = parseInt(input.shift());
  input = input[0].split(" ").map(Number);

  const minPosition = Math.min(...input);
  const maxPosition = Math.max(...input);

  let sumCon = [];

  for (let i = minPosition; i <= maxPosition; i++) {
    let result = 0;
    for (let f = 0; f < num; f++) {
      result += Math.pow(input[f] - i, 2);
    }
    sumCon.push(result);
  }

  console.log(Math.min(...sumCon));
}
