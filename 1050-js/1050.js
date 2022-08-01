
const lines = prompt('Digite os valores de entrada')//.split(' ') //testar no html

var [ddd] = lines.map(Number);

const ABC = lines.shift()//.split(" ");

if(ddd == 61){
    console.log("Brasilia");
}else if(ddd==71){
    console.log("Salvador")
}
else if(ddd==11){
    console.log("Sao Paulo")
}
else if(ddd==21){
    console.log("Rio de Janeiro")
}
else if(ddd==32){
    console.log("Juiz de Fora")
}else if(ddd==19){
    console.log("Campinas")
}else if(ddd==27){
    console.log("Vitoria")
}else if(ddd==31){
    console.log("Belo Horizonte")
}else{
    console.log("DDD nao cadastrado");
}


//const AB = lines.shift().split(" ");

//const A = parseInt(AB.shift());
//const B = parseInt(AB.shift());

