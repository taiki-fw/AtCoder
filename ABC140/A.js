"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = parseInt(input.split("\n").shift(), 10);
  console.log(Math.pow(input, 3));
}
