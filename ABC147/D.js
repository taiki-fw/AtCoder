"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.split("\n");
  const num = parseInt(input.shift());
  console.log(xor(3, 5));
}

function xor(a, b) {
  let num1 = a;
  let num2 = b;
  let xorBeTwo =
    (parseInt(num1.toString(2), 10) + parseInt(num1.toString(2), 10)) / 2;
  console.log(xorBeTwo);
  return parseInt(xorBeTwo.toString(2), 10);
}
