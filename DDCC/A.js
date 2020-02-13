"use strict";

main(require("fs").readFileSync("/dev/stdin", "utf-8"));

function main(input) {
  input = input
    .split("\n")[0]
    .split(" ")
    .map(i => parseInt(i));
  const fee = [400000, 300000, 200000, 100000];
  let result = 0;
  input.forEach(e => {
    if (e <= 3) {
      result += fee[e];
    }
  });
  if (input[0] === input[1] && input[0] === 1) {
    result += fee[0];
  }
  console.log(result);
}
