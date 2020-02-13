"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.split("\n")[0].split("");
  let counter = 0;
  for (let i = 0; i < Math.ceil(input.length / 2); i++) {
    if (input[i] !== input[input.length - 1 - i]) counter++;
  }
  console.log(counter);
}
