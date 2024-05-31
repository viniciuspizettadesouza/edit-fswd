// 7
let minutosTotal = 150;

console.log(minutosTotal / 60)
console.log(parseInt(minutosTotal / 60))
console.log(Math.floor(minutosTotal / 60))

let horas = Math.floor(minutosTotal / 60);
let minutos = minutosTotal % 60;

console.log(horas, minutos)