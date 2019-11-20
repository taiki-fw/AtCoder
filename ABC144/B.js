"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function isDeivid(num) {
  let dnum = 10;
  for (let i = 1; i <= 9; i++) {
    if (num % i === 0) {
      dnum = num / i;
    }
  }
  if (dnum < 10) {
    return true;
  }
  return false;
}

function main(input) {
  input = parseInt(input.trim().split("\n")[0]);
  if (input <= 81 && isDeivid(input)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
