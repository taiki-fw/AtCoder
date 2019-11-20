"use strict";

main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.split("\n");

  const stick_num = parseInt(input[0]);
  let sticks_length = input[1]
    .split(" ")
    .map(l => parseInt(l))
    .sort((p, n) => p - n);
  let result = 0;

  for (let i = 0; i < stick_num - 2; i++) {
    for (let f = i + 1; f < stick_num; f++) {
      for (let w = f + 1; w < stick_num; w++) {
        let bottom = sticks_length[i];
        let right = sticks_length[f];
        let left = sticks_length[w];
        if (left < right + bottom) {
          result++;
        }
      }
    }
  }

  console.log(result);
}
