main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

// 3 5
// .....
// .#.#.
// .....

function main(input) {
  let height = 0;
  let width = 0;
  input
    .split("\n")[0]
    .split(" ")
    .map((value, index) => {
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

  // let mass = new Array(height); // 各マスの状態
  // // 2次元配列の生成
  // for (let i = 0; i < mass.length; i++) {
  //   mass[i] = new Array(width);
  // }
  let mass = [];
  input = input.split("\n");
  for (let i = 1; i <= height; i++) {
    mass.push(input.split(""));
  }

  // 2次元配列に値を格納
  for (let h = 0; h < height; h++) {
    mass[h] = input
      .split("\n")
      [h + 1].split("")
      .slice();
  }

  let result = mass.slice();
  for (let h = 0; h < height; h++) {
    for (let w = 0; w < mass[h].length; w++) {
      if (mass[h][w] !== "#") {
        let relationMass = [];
        let atomic_count = 0;
        if (h - 1 >= 0) {
          if (w - 1 >= 0) {
            relationMass.push(mass[h - 1][w - 1]);
          }
          if (w + 1 <= width) {
            relationMass.push(mass[h - 1][w + 1]);
          }
          relationMass.push(mass[h - 1][w]);
        }
        if (w - 1 >= 0) {
          relationMass.push(mass[h][w - 1]);
        }
        if (w + 1 <= width) {
          relationMass.push(mass[h][w + 1]);
        }

        if (h + 1 < height) {
          if (w - 1 >= 0) {
            relationMass.push(mass[h + 1][w - 1]);
          }
          if (w + 1 <= width) {
            relationMass.push(mass[h + 1][w + 1]);
          }
          relationMass.push(mass[h + 1][w]);
        }
        relationMass.forEach(e => {
          if (e === "#") {
            atomic_count++;
          }
        });
        result[h][w] = atomic_count;
      }
    }
  }
  console.log((result = result.map(a => a.join("")).join("\n")));
}
