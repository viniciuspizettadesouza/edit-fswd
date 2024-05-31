// 4
let x = 5; // Base ou lado
let y = 8; // Altura ou segundo lado

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