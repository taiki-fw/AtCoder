"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.split("\n");

  const allAtack = input[1].split(" ").map(e => parseInt(e));
  let damege = 0;

  allAtack.map(e => (damege += e));

  if (input[0].split(" ")[0] <= damege) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
