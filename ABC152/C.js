"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

// "use strict";
// main(
//   require("fs")
//     .readFileSync("/dev/stdin", "UTF-8")
//     .trim()
//     .split("\n")
// );

function main(input) {
  input = input.trim().split("\n");
  const N = parseInt(input.shift());
  const permutation = input[0].split(" ").map(Number);

  let result = 0;
  let min = permutation[0];

  for (let i = 0; i < N; i++) {
    if (min >= permutation[i]) {
      result++;
      min = permutation[i];
    }
  }
  console.log(result);
}
