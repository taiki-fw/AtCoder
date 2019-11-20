"use strict";

main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  let integer_num = parseInt(input.split("\n")[0]);

  let odd_count = 0; //奇数の時、カウントされる

  for (let i = 1; i <= integer_num; i++) {
    if (i % 2 === 1) {
      odd_count++;
    }
  }

  console.log(odd_count / integer_num);
}
