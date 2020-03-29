const encode = str => {
  if (typeof str !== "string") throw new Error("文字列を引数に渡して下さい。");

  let first = 0; // 検査しているindexの始まり
  let result = []; // 連続して同じ文字・違う文字に入力文字を分割した結果を格納する配列 ex:)["AaAa", "AAAA"]
  let resultStr = ""; // 出力する文字列。(圧縮した結果)
  let isSame = str[0] !== str[1] ? false : true; // 検査のモード管理

  for (let i = 0; i < str.length; i++) {
    let prev = str[i - 1];
    let now = str[i];
    let next = str[i + 1];

    isSame = prev !== now ? false : true;

    if (isSame) {
      if (now !== next && prev !== next) {
        result.push(str.slice(first, i + 1));
        first = i + 1;
      }
    } else {
      if (now !== next && next === str[i + 2]) {
        result.push(str.slice(first, i + 1));
        first = i + 1;
      }
    }
  }
  // console.log(result);

  for (let i = 0; i < result.length; i++) {
    if (result[i][0] !== result[i][1]) {
      // 格納されている文字列の1, 2文字目が異なる
      resultStr += `${-result[i].length}${result[i]}`;
    } else {
      resultStr += `${result[i].length}${result[i][0]}`;
    }
  }

  // console.log(resultStr);

  return resultStr;
};

const decode = str => {
  if (typeof str !== "string") throw new Error("文字列を引数に渡して下さい。");

  str = str.replace(/(?<=\d+[a-zA-Z]+)/g, "/");
  str = str.split("/");
  for (let i = 0; i < str.length - 1; i++) {
    while (str[i + 1].length === 1 && str.length > i + 1) {
      str[i] += str[i + 1];
      str.splice(i + 1, 1);
    }
  }

  let result = "";

  for (let i = 0; i < str.length; i++) {
    let num = parseInt(str[i], 10);
    if (num < 0) result += str[i].replace(/[^a-zA-Z]/g, "");
    else result += str[i].replace(/[^a-zA-Z]/g, "").repeat(num);
  }

  return result;
};

module.exports = { encode, decode };
