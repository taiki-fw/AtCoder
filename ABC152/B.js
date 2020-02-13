"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input
    .split("\n")[0]
    .split(" ")
    .sort();
  const char = input[0];

  // let small = "";
  // let big = "";
  // if (input[0] > input[1]) {
  //   big = input[0];
  //   small = input[1];
  // } else {
  //   big = input[1];
  //   small = input[0];
  // }
  // console.log(small.repeat(parseInt(big)));
  console.log(char.repeat(parseInt(input[1])));
}
