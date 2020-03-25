"use strict";
main(
  require("fs")
    .readFileSync("/dev/stdin", "UTF-8")
    .trim()
    .split("\n")
);

/**
 *
 * 大きさNの順列。(1, 2, ..., N)を並び替えて出来る順列P, Q
 * 順列はN!通り存在する。
 * Pがa番目に小さく、Qがb番目に小さいとした時、|a-b|を求めよ
 */

function permutation(nums, k) {
  let ans = [];
  if (nums.length < k) {
    return [];
  }
  if (k === 1) {
    for (let i = 0; i < nums.length; i++) {
      ans[i] = [nums[i]];
    }
  } else {
    for (let i = 0; i < nums.length; i++) {
      let parts = nums.slice(0);
      parts.splice(i, 1)[0];
      let row = permutation(parts, k - 1);
      for (let j = 0; j < row.length; j++) {
        ans.push([nums[i]].concat(row[j]));
      }
    }
  }
  return ans;
}

function main(input) {
  const N = Number(input.shift());
  let P = input[0].split(" ");
  let Q = input[1].split(" ");

  const num = permutation(P.slice().sort(), P.length);
  for (let i = 0; i < num.length; i++) {
    if (JSON.stringify(P) === JSON.stringify(num[i])) {
      P = i;
    }
    if (JSON.stringify(Q) === JSON.stringify(num[i])) {
      Q = i;
    }
  }

  console.log(Math.abs(P - Q));
}
