"use strict";

main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.split("\n");

  // const slimes_num = parseInt(input[0]);
  const slimes_num = Number(input.shift());
  let slimes_color = input[0].split("");

  let other_result = 1;

  for (let i = 0; i < slimes_color.length - 1; i++) {
    if (slimes_color[i] === slimes_color[i + 1]) {
      slimes_color[i] = "";
    } else if (slimes_color[i] !== slimes_color[i + 1]) {
      other_result++;
    }
  }

  let result = slimes_color.filter(c => c !== "");
  console.log(result.length);
}
