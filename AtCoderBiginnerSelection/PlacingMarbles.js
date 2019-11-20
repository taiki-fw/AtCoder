// main関数の呼び出し
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

// main関数の定義
function main(Input) {
  var inputNum = Input.toString(10)
    .replace(/\r?\n/g, "")
    .split("");

  var marblesCount = 0;
  for (var i = 0; i < inputNum.length; i++) {
    if (inputNum[i] === "1") {
      marblesCount += 1;
    }
  }
  console.log(parseInt(marblesCount, 10));
}
