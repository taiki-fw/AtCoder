"use strict";
main(
  require("fs")
    .readFileSync("/dev/stdin", "UTF-8")
    .trim()
    .split("\n")
);

function main(input) {
  let bingo = [input[0], input[1], input[2]].map(e => e.split(" "));
  for (let i = 0; i < 3; i++) input.shift();

  for (let i = 0; i < input.length; i++) {
    for (let f = 0; f < 3; f++) {
      for (let e = 0; e < bingo[f].length; e++) {
        if (input[i] === bingo[f][e]) bingo[f][e] = "0";
      }
    }
  }

  let result = "No";
  for (let f = 0; f < 3; f++) {
    for (let e = 0; e < bingo[f].length; e++) {
      if (e === 0) {
        if (bingo[f][0] === bingo[f][1] && bingo[f][0] === bingo[f][2])
          result = "Yes";
      }
      if (f === 0) {
        if (bingo[f][0] === bingo[f + 1][0] && bingo[f][0] === bingo[f + 2][0])
          result = "Yes";
      }
    }
  }

  if (bingo[0][0] === bingo[1][1] && bingo[0][0] === bingo[2][2])
    result = "Yes";
  if (bingo[0][2] === bingo[1][1] && bingo[0][2] === bingo[2][0])
    result = "Yes";

  console.log(result);
}
