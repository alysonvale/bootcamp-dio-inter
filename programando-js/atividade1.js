let lines = gets().split('\n');

var N = parseInt(lines.shift());
for (let i = 0; i < N; i++){
    let v = (i + 1);
    if (v % 2 === 0){
        let multi = (v ** 2);
        console.log(`${v}^${2} = ${multi}`);
    }
}