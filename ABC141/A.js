"use strict";
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  let s = input.split("\n").shift();
  let result = null;
  const weather = ["Sunny", "Cloudy", "Rainy"];
  weather.forEach((w, i) => {
    if (w === s) {
      result = i;
    }
  });
  console.log(weather[result + 1 !== weather.length ? result + 1 : 0]);
}
