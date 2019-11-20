// 文字の長さ
// 文字列
// 文字列がある文字列の繰り返しで生成されたものかを判断する

"use strict";

main(require("fs").readFileSync("/dev/stdin", "utf-8"));

function main(input) {
  input = input.split("\n");
  const length = parseInt(input.shift());
  let char = input[0].split("");
  let char1 = char.slice(0, length / 2).join("");
  let char2 = char.slice(length / 2, length).join("");
  console.log(char1 === char2 ? "Yes" : "No");
}
