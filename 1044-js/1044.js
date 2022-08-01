
const lines = prompt('Digite os valores de entrada').split(' ') //testar no html

var [A,B] = lines.map(Number);

const AB = lines.shift().split(" ");

const A = parseInt(AB.shift());
const B = parseInt(AB.shift());

if ((A%B ===0) || (B%A ===0)){
    console.log("Sao Multiplos");
}else{
    console.log("Nao sao Multiplos");
}






//const abdc = lines.shift().split(" ")
//const a = parseInt(abdc.shift());

//const b = parseInt(abdc.shift());

//const c = parseInt(abdc.shift());

//const d = parseInt(abdc.shift());

