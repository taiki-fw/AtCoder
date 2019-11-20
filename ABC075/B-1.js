function Main(input) {
  input = input.split("\n");

  var h = parseInt(input[0].split(" ")[0], 10);
  var w = parseInt(input[0].split(" ")[1], 10);

  var s = []; // マスの状態を管理
  for (var i = 0; i < h; i++) {
    s.push(input[1 + i].split("")); // 入力された状態を2次元配列として確保する
  }

  var cnt = new Array(h).fill([]).map(() => new Array(w).fill(0)); // 入力された縦と横の二次元配列を作成
  // var cnt = s.slice();

  var dh = [-1, -1, -1, 0, 0, 1, 1, 1];
  var dw = [-1, 0, 1, -1, 1, -1, 0, 1];

  for (var i = 0; i < h; i++) {
    for (var j = 0; j < w; j++) {
      if (s[i][j] == "#") {
        // 爆弾
        for (var k = 0; k < dh.length; k++) {
          var y = i + dh[k]; //上下左右斜めの縦方向の位置
          var x = j + dw[k]; //上下左右斜めの横方向の位置
          if (!(0 <= y && y < h)) continue;
          if (!(0 <= x && x < w)) continue;
          if (s[y][x] !== "#") {
            cnt[y][x]++;
          } else {
            cnt[y][x] = "#";
          }
        }
      }
    }
  }

  for (var i = 0; i < h; i++) {
    console.log(cnt[i].join(""));
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
