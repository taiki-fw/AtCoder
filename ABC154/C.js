"use strict";
main(
  require("fs")
    .readFileSync("/dev/stdin", "UTF-8")
    .trim()
    .split("\n")
);

function main(input) {
  input[1] = input[1].split(" ");
  let result = new Set(input[1]);
  console.log(Array.from(result).length === parseInt(input[0]) ? "YES" : "NO");
}
