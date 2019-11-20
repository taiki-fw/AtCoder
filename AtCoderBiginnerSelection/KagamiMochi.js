main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.split("\n");
  var num = parseInt(input[0]);
  var sum = [];
  var step = 1;
  for (var i = 1; i <= num; i++) {
    sum.push(parseInt(input[i]));
  }
  sum.sort(function(p, n) {
    return n - p;
  });
  for (var f = 1; f < sum.length; f++) {
    if (sum[f - 1] > sum[f]) {
      step++;
    }
  }
  console.log(step);
}
