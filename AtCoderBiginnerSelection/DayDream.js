main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  var testCase = ["dream", "dreamer", "erase", "eraser"];
  for (var i = 0; i < testCase.length; i++) {
    testCase[i] = testCase[i]
      .split("")
      .reverse()
      .join("");
  }
  var str = input
    .replace(/\r?\n/, "")
    .split("")
    .reverse()
    .join("");

  var isCompleted = true;

  for (var f = 0; f < str.length; ) {
    isDivided = false;
    for (var n = 0; n < testCase.length; n++) {
      var testStr = testCase[n];
      if (str.substring(f, testStr.length + f) === testStr) {
        isDivided = true;
        f += testStr.length;
      }
    }
    if (!isDivided) {
      isCompleted = isDivided;
      break;
    }
  }

  var ans;
  if (isCompleted) {
    ans = "YES";
  } else {
    ans = "NO";
  }
  console.log(ans);
}
