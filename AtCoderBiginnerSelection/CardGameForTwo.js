main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  var cardNum = input.split("\n")[0]; //カードの総数
  var cardBox = input
    .split("\n")[1]
    .split(" ")
    .sort(function(p, n) {
      return n - p;
    });
  var alicePoint = 0;
  var bobPoint = 0;
  for (var i = 0; i < parseInt(cardNum); i++) {
    if (i % 2 === 0) {
      alicePoint += parseInt(cardBox[i]);
    } else if (i % 2 === 1) {
      bobPoint += parseInt(cardBox[i]);
    } else {
      console.log("カード枚数を入力して下さい。");
    }
  }
  console.log(alicePoint - bobPoint);
}
