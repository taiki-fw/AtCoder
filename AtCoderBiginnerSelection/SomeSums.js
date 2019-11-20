main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  var inArray = input.replace(/\r?\n/g, "").split(" ");
  var maxNum = parseInt(inArray[0], 10);
  var minSum = parseInt(inArray[1], 10);
  var maxSum = parseInt(inArray[2], 10);
  var result = 0;

  for (var i = 1; i <= maxNum; i++) {
    var counter = 0;
    var num = i;
    num = num.toString(10).split("");
    for (var f = 0; f < num.length; f++) {
      counter += parseInt(num[f]);
    }
    if (counter >= minSum && counter <= maxSum) {
      result += i;
    }
  }
  console.log(result);
}
