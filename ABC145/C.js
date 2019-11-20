"use strict";
function main(inp) {
  inp = inp.trim().split("\n"); // 入力値を改行で分割
  const N = Number(inp.shift()); //　街の数
  inp = inp.map(r => r.split(" ").map(n => Number(n))); // ["2 4", "4, 6"] => [[2,4], [4,6]]

  // Math.pow(A,B) ... AのB乗を返す
  let sum = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const x = Math.pow(inp[i][0] - inp[j][0], 2); // inp[0] = [2, 4] で i = j の時、x = 0
      const y = Math.pow(inp[i][1] - inp[j][1], 2);
      sum += Math.sqrt(x + y);
    }
  }
  console.log((sum / N / (N - 1)) * (N - 1));
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
