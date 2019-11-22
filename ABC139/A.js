"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.split("\n");
  let exp = input[0].split("");
  let real = input[1].split("");
  let count = 0;
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === real[i]) {
      count++;
    }
  }
  console.log(count);
}
