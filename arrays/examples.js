// Array de números para os exemplos
const numeros = [1, 2, 3, 4, 5];

// map(): Transformar cada elemento do array
const dobrados = numeros.map(num => num * 2);
console.log("map():", dobrados);  // [2, 4, 6, 8, 10]

// filter(): Filtrar elementos com base em um critério
const pares = numeros.filter(num => num % 2 === 0);
console.log("filter():", pares);  // [2, 4]

// reduce(): Reduzir o array a um único valor
const soma = numeros.reduce((total, num) => total + num, 0);
console.log("reduce():", soma);  // 15

// forEach(): Executar uma função para cada elemento
numeros.forEach(num => console.log("forEach():", num));

// find(): Retornar o primeiro elemento que satisfaz um teste
const primeiroMaiorQueTres = numeros.find(num => num > 3);
console.log("find():", primeiroMaiorQueTres);  // 4

// some(): Verificar se pelo menos um elemento satisfaz um teste
const temPar = numeros.some(num => num % 2 === 0);
console.log("some():", temPar);  // true

// every(): Verificar se todos os elementos satisfazem um teste
const todosMaiorQueZero = numeros.every(num => num > 0);
console.log("every():", todosMaiorQueZero);  // true

// push() e pop(): Adicionar e remover elementos ao final do array
const letras = ['a', 'b', 'c'];
letras.push('d');
console.log("push():", letras);  // ['a', 'b', 'c', 'd']

letras.pop();
console.log("pop():", letras);  // ['a', 'b', 'c']

// shift() e unshift(): Remover e adicionar elementos no início do array
letras.unshift('z');
console.log("unshift():", letras);  // ['z', 'a', 'b', 'c']

letras.shift();
console.log("shift():", letras);  // ['a', 'b', 'c']

// sort(): Ordenar os elementos do array
const desordenado = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const ordenado = desordenado.sort((a, b) => a - b);
console.log("sort():", ordenado);  // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]


