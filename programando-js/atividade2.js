//let lines = gets().split('\n');

//var N = parseInt(lines.shift());
var N = 13;
var tam = 10000;
for (let i = 0; i < tam; i++){
    let valor = (i % N );
    if (valor === 2){
        console.log(` ${i}`);
    }
    

}