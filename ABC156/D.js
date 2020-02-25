"use strict";
main(
  require("fs")
    .readFileSync("/dev/stdin", "UTF-8")
    .trim()
    .split("\n")
);

function permutation(n, r) {
  let res = 1;
  for (let i = 0; i < r; i++) {
    res *= n - i;
  }
  return res;
}

function combination(n, r) {
  return permutation(n, r) / permutation(r, r);
}

function main(input) {
  input = input[0].split(" ").map(Number);

  let prevSum = [1];
  let num = input.shift();

  for (let i = 1; i <= Math.floor(num / 2); i++) {
    prevSum.push(combination(num, i));
  }

  let nextSum = prevSum.concat();
  if (num % 2 === 0) {
    nextSum.pop();
  }
  nextSum.reverse();
  let sum = prevSum.concat(nextSum);

  let result = sum.reduce(function(a, x) {
    return a + x;
  });

  for (let i = 0; i < 2; i++) {
    result -= sum[input[i]];
  }

  console.log(result - 1);
}
