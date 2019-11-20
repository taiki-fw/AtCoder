// 半径r
// 半径１の円の面積の何倍かを出力する
"use strict";

main(require("fs").readFileSync("/dev/stdin", "utf-8"));

function main(input) {
  const radius = parseInt(input.split("\n").shift());
  console.log(radius * radius);
}
