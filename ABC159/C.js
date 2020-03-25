"use strict";
main(
  require("fs")
    .readFileSync("/dev/stdin", "UTF-8")
    .trim()
    .split("\n")
);

function main(input) {
  input = Number(input[0]);
  const height = input / 3;
  const width = input / 3;
  const line = input - height - width;

  console.log(height * width * line);
}
