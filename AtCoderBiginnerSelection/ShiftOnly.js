main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

function main(input) {
  var intNum = input.split("\n")[0];
  var intArray = input.split("\n")[1].split(" ");
  var counter = 0;
  while (isEven(intArray)) {
    counter++;
    intArray = dividedTwo(intArray);
  }
  console.log(counter);
}

function isEven(array) {
  for (var i = 0; i < array.length; i++) {
    if (parseInt(array[i], 10) % 2 !== 0) {
      return false;
    }
  }
  return true;
}

function dividedTwo(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] /= 2;
  }
  return array;
}
