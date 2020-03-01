"use strict";
main(
  require("fs")
    .readFileSync("/dev/stdin", "UTF-8")
    .trim()
    .split("\n")
);

function main(input) {
  input = Number(input[0]);

  console.log(Math.ceil(input / 2));
}
