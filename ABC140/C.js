"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.trim().split("\n");
  const sAL = parseInt(input.shift()); // 文字列Aの長さ
  let sA = new Array(sAL).fill(0);
  let sB = input[0].split(" ").map(s => parseInt(s));
  sA[0] = sB[0];
  for (let i = 0; i < sB.length; i++) {
    sA[i + 1] = sB[i];
    if (sB[i] < sA[i]) {
      sA[i] = sB[i];
    }
  }
  let sum = 0;
  sA.map(n => (sum += n));
  console.log(sum);
}
