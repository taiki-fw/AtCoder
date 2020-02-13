"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.split("\n");
  const N = input.shift().split(" ")[0]; // 整数の数
  const K = input.shift().split(" ")[1]; // 整数から選ぶ数
}

function combination(num, select, mass) {
  let result = [];
  for (let i = 0; i < num - 1; i++) {
    for (let f = 0; i < num; f++) {}
  }
}
