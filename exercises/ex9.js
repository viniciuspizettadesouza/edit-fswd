// 9
// let x = parseFloat(prompt("mensagem"));
let x = 10;
let op = "+";
let y = 5;

let resultado;

switch (op) {
    case "+":
        resultado = x + y;
        break;
    case "-":
        resultado = x - y;
        break;
    case "/":
        resultado = x / y;
        break;
    case "*":
        resultado = x * y;
        break;
    default:
        console.log("Operador inválido");
        break;
}

console.log(resultado)