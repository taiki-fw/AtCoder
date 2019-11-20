main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  var inArray = input.split("\n");
  var A = parseInt(inArray[0]); // 500円の枚数
  var B = parseInt(inArray[1]); // 100円の枚数
  var C = parseInt(inArray[2]); // 50円の枚数
  var X = parseInt(inArray[3]); // 合計金額
  var counter = 0; // 割り切れた回数

  for (var a = 0; a <= A; a++) {
    for (var b = 0; b <= B; b++) {
      for (var c = 0; c <= C; c++) {
        var total = 500 * a + 100 * b + 50 * c;
        if (total === X) {
          counter++;
        }
      }
    }
  }

  console.log(counter);
}
