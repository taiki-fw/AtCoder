"use strict";
main(
  require("fs")
    .readFileSync("/dev/stdin", "UTF-8")
    .trim()
    .split("\n")
);

/**
 * 長さ奇数の文字列Sがあり、以下の条件の時、Sは強い回文
 *
 * 1. 回文 ... 始めから読んでも、後ろから読んでも同じ
 * 2. N...Sの長さとした時、S1~S(N-1)/2からなる文字列は回文
 * 3. N...Sの長さとした時、S(N+3)/2~SNからなる文字列は回文
 */

function isPalindrome(text) {
  let result = true;
  for (let i = 0; i < Math.ceil(text.length / 2); i++) {
    if (text[i] !== text[text.length - i - 1]) {
      result = false;
      break;
    }
  }
  return result;
}

function main(input) {
  input = input[0];
  const N = input.length;

  const case1 = isPalindrome(input);
  const case2 = isPalindrome(input.slice(0, (N - 1) / 2));
  const case3 = isPalindrome(input.slice((N + 3) / 2 - 1, N));

  console.log(case1 && case2 && case3 ? "Yes" : "No");
}
