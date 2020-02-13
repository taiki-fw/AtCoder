"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  input = input.trim().split("\n")[0];

  let i = 0;
  while (alphabet[i] !== input) i++;
  /**
   * 別解
   * input.charCodeAt(0) ... UTF-16 コード
   * String.fromCharCode(97)
   */

  console.log(alphabet[i + 1]);
  // console.log(String.fromCharCode(input.charCodeAt(0) + 1));
}

/** */
