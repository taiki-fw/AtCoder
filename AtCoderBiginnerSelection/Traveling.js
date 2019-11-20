main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.split("\n");
  var time = parseInt(input[0]); // 移動回数
  var isPossible = true;

  var x = [0],
    y = [0],
    t = [0];

  for (var i = 1; i < input.length; i++) {
    // 入力部分の移動回数を除く
    if (input[i] !== "") {
      input[i] = input[i].split(" ");
      t[i] = parseInt(input[i][0]);
      x[i] = parseInt(input[i][1]);
      y[i] = parseInt(input[i][2]);
    }
  }

  for (var f = 1; f <= time; f++) {
    var prePosition = x[f - 1] + y[f - 1];
    var nextPosition = x[f] + y[f];
    var timeD = t[f] - t[f - 1];
    var positionD = Math.abs(nextPosition - prePosition);
    if (timeD % 2 === positionD % 2 && timeD >= positionD) {
    } else {
      isPossible = false;
      break;
    }
  }

  console.log(isPossible ? "Yes" : "No");
}
