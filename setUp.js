const fs = require("fs");

//フォルダ作成
const input = process.argv[2];
fs.mkdir(input, err => {
  if (err) console.error(err);
});

//ファイルの書き込み関数
function writeFile(path, text) {
  fs.writeFile(path, text, err => {
    if (err) {
      throw err;
    }
  });
}

const problems = ["A", "B", "C", "D", "E", "F"];
const initialText = `"use strict;"
main(require("fs").readFileSync("/dev/stdin", "UTF-8").trim().split("\\n"));
function main(input) {};`;

for (let i = 0; i < problems.length; i++) {
  writeFile(`${input}/${problems[i]}.js`, initialText);
}
