"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.split("\n")[0].split(" ");
  console.log(input[0] === input[1] ? "Yes" : "No");
}
