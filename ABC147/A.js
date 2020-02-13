"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  let result = 0;
  input
    .split("\n")[0]
    .split(" ")
    .map(n => (result += Number(n)));
  if (result < 22) {
    console.log("win");
  } else {
    console.log("bust");
  }
}
