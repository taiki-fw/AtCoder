"use strict";
main(
  require("fs")
    .readFileSync("/dev/stdin", "UTF-8")
    .trim()
    .split("\n")
);

function main(input) {
  const digit = Number(input[0].split(" ")[0]);
  let M = Number(input[0].split(" ")[1]);
  input.shift();
  let base = digit === 1 ? 0 : Math.pow(10, digit - 1);
  let result = -1;

  if (M > 0) {
    for (let i = base; i < Math.pow(10, digit); i++) {
      for (let f = 0; f < M; f++) {
        let condi = input[f].split(" ");
        let left = Number(condi[0] - 1);
        let num = Number(condi[1]);

        if (Number(i.toString(10).split("")[left]) !== num) {
          result = -1;
          break;
        } else result = i;
      }
      if (result !== -1) break;
    }
  } else {
    result = base;
  }

  console.log(result);
}
