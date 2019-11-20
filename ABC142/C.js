"use strict";

main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  let students_num = parseInt(input.split("\n")[0]); //生徒数
  let arrive_num_order_by_student_num = input.split("\n")[1].split(" "); //学番の順の到着順(配列)

  let result = new Array(students_num); //出力

  for (let i = 0; i < students_num; i++) {
    result[parseInt(arrive_num_order_by_student_num[i]) - 1] = i + 1;
  }

  console.log(result.join(" "));
}
