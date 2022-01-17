let lines = gets().split("\n");
let line = lines.shift().split(' ');

const total = line.reduce((acc, context, index) => {
  return index === 3 ? acc + Number(context) : acc + (Number(context) - 1);
}, 0);


console.log(total);