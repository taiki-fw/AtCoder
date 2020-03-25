"use strict";
main(
  require("fs")
    .readFileSync("/dev/stdin", "UTF-8")
    .trim()
    .split("\n")
);

/**
 *
 * 英大文字からなる文字列S(長さN)
 * 連続する文字列'ABC'がいくつ含まれているかを回答
 */

function main(input) {
  const N = Number(input.shift());
  input = input[0];

  let count = 0;

  for (let i = 0; i < N - 2; i++) {
    if (input[i] === "A") {
      if (input[i + 1] === "B" && input[i + 2] === "C") {
        count++;
        i += 2;
      }
    }
  }

  console.log(count);
}
