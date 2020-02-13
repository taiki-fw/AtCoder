"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.split("\n");
  const a = parseInt(input.shift());
  if (a < 3200) {
    console.log("red");
  } else {
    console.log(input[0]);
  }
}
