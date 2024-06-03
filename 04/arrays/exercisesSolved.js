// Exercício 1: Dado um array de números, retorne um novo array com cada número multiplicado por 2.
console.log("Exercício 1: map()");
const numerosMap = [1, 2, 3, 4, 5];
const dobrados = numerosMap.map(num => num * 2);
console.log(dobrados);  // [2, 4, 6, 8, 10]
console.log("xxxxx");

// Exercício 2: Dado um array de números, retorne um novo array apenas com os números pares.
console.log("Exercício 2: filter()");
const numerosFilter = [1, 2, 3, 4, 5];
const pares = numerosFilter.filter(num => num % 2 === 0);
console.log(pares);  // [2, 4]
console.log("xxxxx");

// Exercício 3: Dado um array de números, retorne a soma de todos os números.
console.log("Exercício 3: reduce()");
const numerosReduce = [1, 2, 3, 4, 5];
const soma = numerosReduce.reduce((total, num) => total + num, 0);
console.log("Soma:", soma);  // 15
console.log("xxxxx");

// Exercício 4: Dado um array de números, imprima cada número no console.
console.log("Exercício 4: forEach()");
const numerosForEach = [1, 2, 3, 4, 5];
numerosForEach.forEach(num => console.log(num));
console.log("xxxxx");

// Exercício 5: Dado um array de números, encontre o primeiro número maior que 10.
console.log("Exercício 5: find()");
const numerosFind = [5, 8, 12, 15, 20];
const primeiroMaiorQueDez = numerosFind.find(num => num > 10);
console.log(primeiroMaiorQueDez);  // 12
console.log("xxxxx");

// Exercício 6: Dado um array de números, verifique se existe algum número negativo.
console.log("Exercício 6: some()");
const numerosSome = [5, 8, -3, 15, 20];
const temNegativo = numerosSome.some(num => num < 0);
console.log(temNegativo);  // true
console.log("xxxxx");

// Exercício 7: Dado um array de números, verifique se todos os números são positivos.
console.log("Exercício 7: every()");
const numerosEvery = [5, 8, 3, 15, 20];
const todosPositivos = numerosEvery.every(num => num > 0);
console.log(todosPositivos);  // true
console.log("xxxxx");

// Exercício 8: Crie um programa que simule uma pilha (stack).
console.log("Exercício 8: push() e pop() - Pilha");
const pilha = [];
pilha.push('A');
pilha.push('B');
pilha.push('C');
console.log(pilha.pop());  // 'C'
console.log(pilha.pop());  // 'B'
console.log(pilha.pop());  // 'A'
console.log("xxxxx");

// Exercício 9: Crie um programa que simule uma fila (queue).
console.log("Exercício 9: unshift() e shift() - Fila");
const fila = [];
fila.unshift('A');
fila.unshift('B');
fila.unshift('C');
console.log(fila.shift());  // 'C'
console.log(fila.shift());  // 'B'
console.log(fila.shift());  // 'A'
console.log("xxxxx");

// Exercício 10: Dado um array de palavras, ordene-as em ordem alfabética.
console.log("Exercício 10: sort()");
const palavrasSort = ['banana', 'abacaxi', 'laranja', 'uva'];
const ordenadas = palavrasSort.sort();
console.log(ordenadas);  // ['abacaxi', 'banana', 'laranja', 'uva']
