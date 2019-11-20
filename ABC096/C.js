// H\W W1 W2 ... Wj
// H1
// H2
// .
// .
// .
// Hi

function main(input) {
  let info = input.split("\n");

  let area = info[0].split(" ");
  const H = parseInt(area[0]);
  const W = parseInt(area[1]);

  let mass = new Array();
  for (let i = 0; i < H; i++) {
    mass.push(info[i + 1].split(""));
  }

  console.log(mass);
}

main(require("fs").readFileSync("/dev/stdin", "UTF-8"));
