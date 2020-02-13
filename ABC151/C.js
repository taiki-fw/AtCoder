"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.trim().split("\n");
  const info = input.shift().split(" ");
  const M = info[1]; // 提出回数

  let result = {};

  for (let i = 0; i < M; i++) {
    const obj = input[i].split(" ");
    if (!result[obj[0]]) {
      result[obj[0]] = [obj[1], obj[1] === "WA" ? 1 : 0];
    } else {
      if (obj[1] === "WA" && result[obj[0]][0] !== "AC") result[obj[0]][1] += 1;
      else result[obj[0]][0] = "AC";
    }
  }

  let ans = 0;
  let wrong = 0;

  Object.keys(result).forEach(function(key) {
    if (result[key][0] === "AC") {
      ans += 1;
      wrong += result[key][1];
    }
  });

  console.log(`${ans} ${wrong}`);
}
