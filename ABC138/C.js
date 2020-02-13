"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.split("\n");
  let N = parseFloat(input.shift());
  input = input[0]
    .split(" ")
    .map(n => parseFloat(n))
    .sort();
  let ans = input[0];
  for (let i = 1; i < N; i++) ans = (ans + input[i]) / 2;

  console.log(ans);
}
