"use strict";
main(
  require("fs")
    .readFileSync("/dev/stdin", "UTF-8")
    .trim()
    .split("\n")
    .map(i => i.split(" "))
);

function main(input) {
  let state = {};
  for (let i = 0; i < input[0].length; i++) {
    state[input[0][i]] = parseInt(input[1][i]);
  }
  state[input[2]] -= 1;

  let result = "";
  Object.keys(state).map(k => (result += String(state[k]) + " "));

  console.log(result);
}
