// 文字の長さ
// 文字列
// 文字列がある文字列の繰り返しで生成されたものかを判断する

"use strict";

main(require("fs").readFileSync("/dev/stdin", "utf-8"));

function main(input) {
  input = input.split("\n");
  let num = parseInt(input.shift());
  input = input[0].split("");
  input = input.map(s => {
    return String.fromCharCode(
      s.charCodeAt(0) + num > 90
        ? 65 + (s.charCodeAt(0) + num - 91)
        : s.charCodeAt(0) + num
    );
  });

  console.log(input.join(""));
}
