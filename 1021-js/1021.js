const lines = prompt('Digite os valores de entrada').split(' ')

// // const A = Number(lines[0]);
// // const B = Number(lines[1]);

// const [A, B] = lines.map(Number);

// const X = A + B;
// console.log('X = ' + X);


//notas
var auxDinheiro, notasCem, notasCinquenta, auxCinquenta, notasVinte, auxVinte, notasDez, auxDez, notasCinco, auxCinco, notasDois, auxDois;

//moedas
var moedas, moedasUm, auxMoedasUm, moedasCinquenta, moedasVinte, moedasDez, moedasCinco, moedasUmCentavo;

var [dinheiro] = lines.map(Number);
auxDinheiro = dinheiro;

notasCem = Math.floor(auxDinheiro/100);

auxCinquenta = auxDinheiro%100;
notasCinquenta = Math.floor(auxCinquenta/50);

auxVinte = auxCinquenta%50;
notasVinte = Math.floor(auxVinte/20)

auxDez = auxVinte%20;
notasDez = Math.floor(auxDez/10)

auxCinco = auxDez%10;
notasCinco = Math.floor(auxCinco/5)

auxDois = auxCinco%5;
notasDois = Math.floor(auxDois/2)

moedas = notasDois * 100

moedasUm = notasDois%2
auxMoedasUm = moedasUm/1



console.log('NOTAS:\n')
console.log(`${notasCem} nota(s) de R$ 100.00\n`)
console.log(`${notasCinquenta} nota(s) de R$ 50.00\n`)
console.log(`${notasVinte} nota(s) de R$ 20.00\n`)
console.log(`${notasDez} nota(s) de R$ 10.00\n`)
console.log(`${notasCinco} nota(s) de R$ 5.00\n`)
console.log(`${notasDois} nota(s) de R$ 2.00\n`)

moedasCinquenta = Math.floor(moedas/50);
moedasVinte = Math.floor((moedas%50)/25);
moedasDez = Math.floor(((moedas%50)%25)/10);
moedasCinco = Math.floor((((moedas%50)%25)%10)/5);
moedasUmCentavo = Math.floor(((((moedas%50)%25)%10)%5)/1);

console.log('MOEDAS:\n')
console.log(`${auxMoedasUm} moeda(s) de R$ 1.00\n`)
console.log(`${moedasCinquenta} moeda(s) de R$ 0.50\n`)
console.log(`${moedasVinte} moeda(s) de R$ 0.25\n`)
console.log(`${moedasDez} moeda(s) de R$ 0.10\n`)
console.log(`${moedasCinco} moeda(s) de R$ 0.05\n`)
console.log(`${moedasUmCentavo} moeda(s) de R$ 0.01\n`)

