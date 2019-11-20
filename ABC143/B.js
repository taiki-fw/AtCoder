"use strict";

main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.split("\n");

  const takoyaki_num = parseInt(input[0]);
  let recover_num = 0;

  let delicious_point = input[1];
  delicious_point = delicious_point.split(" ").map(p => parseInt(p));

  for (let i = 0; i < takoyaki_num - 1; i++) {
    for (let f = i + 1; f < takoyaki_num; f++) {
      recover_num += delicious_point[i] * delicious_point[f];
    }
  }
  console.log(recover_num);
}
