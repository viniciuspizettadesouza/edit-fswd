// 1
let x = 10;
let y = 5;

// Soma
console.log(`Soma de x e y: ${x + y}`);

// Subtração
console.log(`Subtração de x e y: ${x - y}`);

// Multiplicação
console.log(`Multiplicação de x e y: ${x * y}`);

// Divisão
console.log(`Divisão de x por y: ${x / y}`);

// Divisão inteira
console.log(`Divisão inteira de x por y: ${Math.floor(x / y)}`);


// 2
let celsius = 25;
let fahrenheit = celsius * 1.8 + 32;

console.log(`A conversão de ${celsius}°C para Fahrenheit é ${fahrenheit}°F`);

// 3
let name = "João";
let weight = 70; // em kg
let height = 1.75; // em metros
let imc = weight / (height * height);

console.log(`${name} pesa ${weight}kg e mede ${height}m, logo tem um índice de massa corporal de ${imc.toFixed(2)}`);

// 4
x = 5; // Base ou lado
y = 8; // Altura ou segundo lado

// Calcular áreas
let square = x * x;
let rectangle = x * y;
let triangle = (x * y) / 2;

console.log(`Área do quadrado: ${square}`);
console.log(`Área do retângulo: ${rectangle}`);
console.log(`Área do triângulo: ${triangle}`);

// Verificar qual forma tem a maior área
if (square > rectangle && square > triangle) {
    console.log("Quadrado é o maior");
} else if (rectangle > square && rectangle > triangle) {
    console.log("Retângulo é o maior");
} else if (triangle > square && triangle > rectangle) {
    console.log("Triângulo é o maior");
} else {
    console.log("As áreas são iguais ou não foi possível determinar o maior");
}

// 5
let numero = 15;

if (numero % 2 === 0) {
    console.log(`${numero} é par.`);
} else {
    console.log(`${numero} é ímpar.`);
}

// 5
// Solicitar ao utilizador para introduzir um número
number = prompt("Por favor, introduza um número:");

// Verificar se o número é par ou ímpar
if (number % 2 === 0) {
    console.log(`${number} é um número par.`);
} else {
    console.log(`${number} é um número ímpar.`);
}

// 6
// Solicitar ao utilizador para introduzir uma velocidade em km/h
let kmh = prompt("Por favor, introduza a velocidade em quilómetros por hora (km/h):");

// Converter a entrada do utilizador para um número
kmh = parseFloat(kmh);

// Velocidade em quilómetros por hora (km/h)
let kmPorHora = 100; // Você pode alterar o valor aqui

// Converter km/h para mph usando a fórmula mph = (km/h) / 1.609
let mph = kmPorHora / 1.609;

// Exibir o resultado
console.log(`${kmPorHora} km/h é equivalente a ${mph.toFixed(2)} mph.`);


// Verificar se a entrada é válida (número positivo)
if (isNaN(kmh) || kmh < 0) {
    console.log("Por favor, introduza um valor válido para a velocidade em km/h.");
} else {
    // Converter km/h para mph
    let mph = kmh / 1.609;

    console.log(`${kmh} km/h equivale a ${mph.toFixed(2)} mph.`);
}

// 7
// Solicitar ao utilizador para introduzir o número de minutos
let totalMinutes = prompt("Por favor, introduza o número total de minutos:");

// Converter a entrada do utilizador para um número inteiro
totalMinutes = parseInt(totalMinutes);

// Verificar se a entrada é válida (número positivo)
if (isNaN(totalMinutes) || totalMinutes < 0) {
    console.log("Por favor, introduza um valor válido para o número de minutos.");
} else {
    // Calcular horas e minutos
    let hours = Math.floor(totalMinutes / 60); // Divide por 60 para obter as horas
    let minutes = totalMinutes % 60; // Calcula o resto da divisão por 60 para obter os minutos

    console.log(`${totalMinutes} minutos equivale a ${hours} horas e ${minutes} minutos.`);
}

// 7
// Número de minutos
let minutosTotal = 135; // Você pode alterar o valor aqui

// Calcular horas e minutos
console.log(minutosTotal / 60)
let horas = parseInt(minutosTotal / 60); // Divisão inteira para obter as horas
let minutos = minutosTotal % 60; // Resto da divisão para obter os minutos

// Exibir o resultado
console.log(`${minutosTotal} minutos são ${horas} horas e ${minutos} minutos.`);


// 8
// Solicitar ao utilizador para introduzir o nome do dia da semana
let day = prompt("Por favor, introduza o nome do dia da semana:");

switch (day) {
    case "segunda":
        console.log("Segunda-feira - Primeiro dia");
        break;
    case "terca":
        console.log("Terça-feira - Segundo dia");
        break;
    case "quarta":
        console.log("Quarta-feira - Terceiro dia");
        break;
    case "quinta":
        console.log("Quinta-feira - Quarto dia");
        break;
    case "sexta":
        console.log("Sexta-feira - Quinto dia");
        break;
    case "sabado":
        console.log("Sábado - Sexto dia");
        break;
    case "domingo":
        console.log("Domingo - Sétimo dia");
        break;
    default:
        console.log("Dia da semana inválido");
}


// 9
// Solicitar ao utilizador para introduzir os valores e o operador
x = parseFloat(prompt("Por favor, introduza o primeiro valor (x):"));
let op = prompt("Por favor, introduza o operador (+, -, /, *):");
y = parseFloat(prompt("Por favor, introduza o segundo valor (y):"));

// Verificar a operação usando switch
switch (op) {
    case "+":
        console.log(`${x} + ${y} = ${x + y}`);
        break;
    case "-":
        console.log(`${x} - ${y} = ${x - y}`);
        break;
    case "/":
        if (y !== 0) {
            console.log(`${x} / ${y} = ${x / y}`);
        } else {
            console.log("Divisão por zero não é permitida");
        }
        break;
    case "*":
        console.log(`${x} * ${y} = ${x * y}`);
        break;
    default:
        console.log("Operador inválido");
}


// 10
// Solicitar ao utilizador para introduzir um número
let number = prompt("Por favor, introduza um número:");

// Converter a entrada do utilizador para um número inteiro
number = parseInt(number);

// Verificar se o número é par ou ímpar usando operador ternário
let result = (number % 2 === 0) ? "par" : "ímpar";

console.log(`O número ${number} é ${result}.`);


