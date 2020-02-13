// 各文字をsort
// 各文字のカウント

"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.split("\n");
  const stringNum = parseInt(input.shift()); // 数量
  input = input.map(s =>
    s
      .split("")
      .sort()
      .join("")
  );
  let stringCounter = {};
  for (const str of input) {
    if (!stringCounter.hasOwnProperty(str)) {
      stringCounter[str] = 1;
    } else {
      stringCounter[str] += 1;
    }
  }
  let result = 0;
  Object.keys(stringCounter).forEach(key => {
    result += (stringCounter[key] * (stringCounter[key] - 1)) / 2;
  });
  console.log(result);
}

// const main = inputs => {
//   var N = inputs[0].split(" ")[0] - 0; //　数値
//   var map = {};
//   for (var i = 1; i <= N; i++) {
//     var ip = inputs[i]
//       .split("")
//       .sort()
//       .join("");
//     if (!map[ip]) map[ip] = 0; // sortした文字列をkeyとしてカウント
//     map[ip]++;
//   }
//   console.log(map);

//   var ans = 0;
//   Object.keys(map).forEach(key => {
//     var cnt = map[key];
//     if (cnt > 1) {
//       ans += (cnt * (cnt - 1)) / 2;
//     }
//   });
//   console.log(ans);
// };

// main(
//   require("fs")
//     .readFileSync("/dev/stdin", "UTF-8")
//     .trim()
//     .split("\n")
// );
