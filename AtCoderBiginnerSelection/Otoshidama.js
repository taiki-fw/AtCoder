main(require("fs").readFileSync("/dev/stdin", "UTF-8"));
function main(input) {
  input = input.split(" ");
  var num = parseInt(input[0]);
  var sum = parseInt(input[1]);
  var isCompleted = false;
  finish: for (var x = 0; x <= num; x++) {
    for (var y = 0; y + x <= num; y++) {
      var z = num - x - y;
      var total = 10000 * x + 5000 * y + 1000 * z;
      if (total === sum && x + y + z === num) {
        console.log(x + " " + y + " " + z);
        isCompleted = true;
        break finish;
      }
    }
  }
  if (!isCompleted) {
    console.log("-1 -1 -1");
  }
}
