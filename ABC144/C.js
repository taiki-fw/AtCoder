"use strict";

function isOdd(num) {
  return num % 2 !== 0 ? true : false;
}

function divisor(num) {
  let curDiv = 1;
  let divi = num;
  let i = isOdd(num) ? 3 : 2;
  while (i < divi) {
    divi = num / i;
    if (num % i === 0) {
      curDiv = i;
    }
    i++;
  }
  return curDiv;
}

function main(input) {
  input = parseInt(input.split("\n")[0]);
  let divis = divisor(input);
  console.log(divis - 1 + input / divis - 1);
}

main(require("fs").readFileSync("/dev/stdin", "UTF-8"));
