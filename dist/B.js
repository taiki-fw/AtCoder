"use strict";

main(require("fs").readFileSync("/dev/stdin", "UTF-8")); // 3 5
// .....
// .#.#.
// .....

function main(input) {
  var height = 0;
  var width = 0;
  input.split("\n")[0].split(" ").map(function (value, index) {
    switch (index) {
      case 0:
        height = parseInt(value);
        break;

      case 1:
        width = parseInt(value);
        break;

      default:
        console.log("入力の１行目を判断出来ません。");
    }
  });
  var mass = new Array(height); // 各マスの状態
  // 2次元配列の生成

  for (var i = 0; i < mass.length; i++) {
    mass[i] = new Array(width);
  } // 2次元配列に値を格納


  for (var h = 0; h < height; h++) {
    mass[h] = input.split("\n")[h + 1].split("").slice();
  }

  var result = mass.slice();

  for (var _h = 0; _h < height; _h++) {
    for (var w = 0; w < mass[_h].length; w++) {
      if (mass[_h][w] !== "#") {
        (function () {
          var relationMass = [];
          var atomic_count = 0;

          if (_h - 1 >= 0) {
            if (w - 1 >= 0) {
              relationMass.push(mass[_h - 1][w - 1]);
            }

            if (w + 1 <= width) {
              relationMass.push(mass[_h - 1][w + 1]);
            }

            relationMass.push(mass[_h - 1][w]);
          }

          if (w - 1 >= 0) {
            relationMass.push(mass[_h][w - 1]);
          }

          if (w + 1 <= width) {
            relationMass.push(mass[_h][w + 1]);
          }

          if (_h + 1 < height) {
            if (w - 1 >= 0) {
              relationMass.push(mass[_h + 1][w - 1]);
            }

            if (w + 1 <= width) {
              relationMass.push(mass[_h + 1][w + 1]);
            }

            relationMass.push(mass[_h + 1][w]);
          }

          relationMass.forEach(function (e) {
            if (e === "#") {
              atomic_count++;
            }
          });
          result[_h][w] = atomic_count;
        })();
      }
    }
  }

  console.log(result = result.map(function (a) {
    return a.join("");
  }).join("\n"));
}