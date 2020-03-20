"use strict";
main(
  require("fs")
    .readFileSync("/dev/stdin", "UTF-8")
    .trim()
    .split("\n")
);
function main(input) {
  input = input[0].split(" ").map(Number);
  const N = input[0];
  const A = input[1];
  const B = input[2];
  let result;

  if (N <= A + B) {
    if (N >= A) result = N;
    else result = A;
  } else {
    result = Math.floor(N / (A + B)) * A;
    if (Math.floor(N % (A + B)) >= A) result += A;
    else result += Math.floor(N % (A + B));
  }

  console.log(result);
}
