
const lines = prompt('Digite os valores de entrada').split(' ') //testar no html

var [A,B,C] = lines.map(String);

const ABC = lines.shift().split("\n");

const A = toString(ABC.shift());
const B = toString(ABC.shift());
const C = toString(ABC.shift());


if(A === "vertebrado" && B === "ave" && C === "carnivoro"){
    console.log("aguia");
}
else if(A === "vertebrado" && B === "ave" && C === "onivoro"){
    console.log("pomba");
}
else if(A === "vertebrado" && B === "mamifero" && C === "onivoro"){
    console.log("homem");
}
else if(A === "vertebrado" && B === "mamifero" && C === "herbivoro"){
    console.log("vaca");
}
else if(A === "invertebrado" && B === "inseto" && C === "hematofago"){
    console.log("pulga");
}
else if(A === "invertebrado" && B === "inseto" && C === "herbivoro"){
    console.log("lagarta");
}
else if(A === "invertebrado" && B === "anelideo" && C === "hematofago"){
    console.log("sanguessuga");
}
else if(A === "invertebrado" && B === "anelideo" && C === "onivoro"){
    console.log("minhoca");
}

//const AB = lines.shift().split(" ");

//const A = parseInt(AB.shift());
//const B = parseInt(AB.shift());

