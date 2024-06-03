// Utilizando o for loop para imprimir 10 itens
console.log("Usando for loop:");
for(let i = 1; i <= 10; i++) {
    console.log(`item ${i}`);
}

// Utilizando o while loop para imprimir 10 itens
console.log("Usando while loop:");
let count = 1;
while(count <= 10) {
    console.log(`item ${count}`);
    count++;
}

// Usando o array [1,5,2,4,3]
const array = [1, 5, 2, 4, 3];

// Somando todos os elementos do array
let soma = 0;
array.forEach(num => {
    soma += num;
});
console.log("Soma dos elementos:", soma);

// Encontrando o valor máximo e mínimo
let max = array[0];
let min = array[0];
array.forEach(num => {
    if (num > max) {
        max = num;
    }
    if (num < min) {
        min = num;
    }
});
console.log("Valor máximo:", max);
console.log("Valor mínimo:", min);

// Invertendo os elementos do array
let arrayInvertido = [];
array.forEach(num => {
    arrayInvertido.unshift(num);
});
console.log("Array invertido:", arrayInvertido);

// Filtrando valores pares
let pares = [];
array.forEach(num => {
    if (num % 2 === 0) {
        pares.push(num);
    }
});
console.log("Valores pares:", pares);

// Ordenando do maior para o menor
let arrayOrdenado = [];
array.forEach(num => {
    arrayOrdenado.push(num);
});
arrayOrdenado.sort((a, b) => b - a);
console.log("Array ordenado do maior para o menor:", arrayOrdenado);

// Somando todos os elementos do array utilizando um método do array
let somaArray = 0;
array.forEach(num => {
    somaArray += num;
});
console.log("Soma dos elementos usando forEach:", somaArray);


// const array = [1, 5, 2, 4, 3];

// // Some todos os elementos do array
// let sum = 0;
// for (let num of array) {
//     sum += num;
// }
// console.log(`Soma: ${sum}`);

// // Encontre o valor máximo e mínimo
// const max = Math.max(...array);
// const min = Math.min(...array);
// console.log(`Máximo: ${max}, Mínimo: ${min}`);

// // Inverta todos os elementos do array
// const reversedArray = array.reverse();
// console.log(`Array invertido: ${reversedArray}`);

// // Filtre apenas os valores pares
// const evenValues = array.filter(num => num % 2 === 0);
// console.log(`Valores pares: ${evenValues}`);

// // Ordene todos os valores do array do maior para o menor
// const sortedArray = array.sort((a, b) => b - a);
// console.log(`Array ordenado: ${sortedArray}`);

// // Some todos os elementos do array utilizando o método reduce
// const sumReduce = array.reduce((acc, curr) => acc + curr, 0);
// console.log(`Soma usando reduce: ${sumReduce}`);
