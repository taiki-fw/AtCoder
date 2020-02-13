"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.trim().split("\n");

  const monsterCount = parseInt(input[0].split(" ")[0]);
  let deathblowCount = parseInt(input[0].split(" ")[1]);

  const strength = input[1]
    .split(" ")
    .map(e => parseInt(e))
    .sort((a, b) => b - a);

  let result = 0;

  while (deathblowCount < monsterCount) {
    result += strength[deathblowCount];
    deathblowCount += 1;
  }

  console.log(result);
}
