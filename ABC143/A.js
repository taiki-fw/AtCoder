"use strict";

main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.split("\n");
  const window_width = parseInt(input[0].split(" ")[0]);
  const curtain_width = parseInt(input[0].split(" ")[1]);

  let not_enougth = window_width - curtain_width * 2;
  if (not_enougth < 0) {
    not_enougth = 0;
  }
  console.log(not_enougth);
}
