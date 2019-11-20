// 入力されたAとBの公約数を見つける...(1)
// 公約数の中で素数のみを残す...(2)
// 公約数の組み合わせを計算する
"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  input = input.map(i => parseInt(i));
  const A = input.split(" ")[0];
  const B = input.split(" ")[1];

  let common_divisor = [];
  let result = 1;

  // (1)
  for (let i = 0; i < (A > B ? B : A); i++) {
    if (A % i === 0 && B % i === 0) {
      common_divisor.push(i);
    }
  }

  // (2)
  common_divisor = common_divisor.filter(n => {
    let result = true;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        result = false;
        break;
      }
    }
    return result;
  });

  // (3)
  result =
    factorial(common_divisor.length) /
    (2 * factorial(common_divisor.length - 2));

  console.log(common_divisor);
}

function factorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}
