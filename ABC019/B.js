"use strict";
main(
  require("fs")
    .readFileSync("/dev/stdin", "UTF-8")
    .trim()
    .split("\n")
);
function main(input) {
  input = input[0].split("");
  let object = input[0];
  let count = 1;
  let result = [];
  for (let i = 1; i < input.length + 1; i++) {
    if (object !== input[i]) {
      result.push(`${object}${count}`);
      count = 1;
      object = input[i];
    } else count++;
  }
  const text = result.join("");
  console.log(text);
}
