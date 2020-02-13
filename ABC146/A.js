"use strict";

main(require("fs").readFileSync("/dev/stdin", "utf-8"));

function main(input) {
  const date = ["SAT", "FRI", "THU", "WED", "TUE", "MON", "SUN"];
  input = input.trim().split("\n")[0];
  console.log(date.findIndex(e => e === input) + 1);
}
