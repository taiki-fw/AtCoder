"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input
    .split("\n")[0]
    .split(" ")
    .map(n => Number(n));

  const area = input[0];
  const base = input[1];

  let array = [];

  for (let i = base - (area - 1); i < base + area; i++) {
    array.push(i);
  }

  console.log(array.join(" "));
}
