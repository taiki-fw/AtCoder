"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.split("\n");
  let baseInfo = input
    .shift()
    .split(" ")
    .map(e => parseInt(e));
  input = input.map(e => parseInt(e));
  const people = baseInfo[0]; // 参加人数
  const maxPoint = baseInfo[1]; // 初期に所持しているポイント
  let pData = new Array(people).fill(maxPoint); //　参加者の所持ポイントを表すデータ。
  const ansNum = baseInfo[2];

  for (let i = 0; i < ansNum; i++) {
    pData[input[i] - 1] += 1;
  }

  for (let f = 0; f < pData.length; f++) {
    if (pData[f] - ansNum > 0) console.log("Yes");
    else console.log("No");
  }
}
