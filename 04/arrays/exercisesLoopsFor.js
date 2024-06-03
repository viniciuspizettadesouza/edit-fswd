// Exercício 1: Dado um array de números, retorne um novo array com cada número multiplicado por 2.
let array1 = [1, 2, 3, 4, 5];
let newArray1 = [];
for (let i = 0; i < array1.length; i++) {
  newArray1.push(array1[i] * 2);
}
console.log("Exercício 1:", newArray1);

// Exercício 2: Dado um array de números, retorne um novo array apenas com os números pares.
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray2 = [];
for (let i = 0; i < array2.length; i++) {
  if (array2[i] % 2 === 0) {
    newArray2.push(array2[i]);
  }
}
console.log("Exercício 2:", newArray2);

// Exercício 3: Dado um array de números, retorne a soma de todos os números.
let array3 = [1, 2, 3, 4, 5];
let soma = 0;
for (let i = 0; i < array3.length; i++) {
  soma += array3[i];
}
console.log("Exercício 3:", soma);

// Exercício 4: Dado um array de números, imprima cada número no console.
let array4 = [1, 2, 3, 4, 5];
for (let i = 0; i < array4.length; i++) {
  console.log("Exercício 4:", array4[i]);
}

// Exercício 5: Dado um array de números, encontre o primeiro número maior que 10.
let array5 = [1, 2, 3, 11, 12, 13];
let maiorQueDez;
for (let i = 0; i < array5.length; i++) {
  if (array5[i] > 10) {
    maiorQueDez = array5[i];
    break;
  }
}
console.log("Exercício 5:", maiorQueDez);

// Exercício 6: Dado um array de números, verifique se existe algum número negativo.
let array6 = [1, 2, -3, 4, 5];
let temNegativo = false;
for (let i = 0; i < array6.length; i++) {
  if (array6[i] < 0) {
    temNegativo = true;
    break;
  }
}
console.log("Exercício 6:", temNegativo);

// Exercício 7: Dado um array de números, verifique se todos os números são positivos.
let array7 = [1, 2, 3, 4, 5];
let todosPositivos = true;
for (let i = 0; i < array7.length; i++) {
  if (array7[i] < 0) {
    todosPositivos = false;
    break;
  }
}
console.log("Exercício 7:", todosPositivos);

// Exercício 8: Crie um programa que simule uma pilha (stack).
let pilha = [];
pilha.push(1);
pilha.push(2);
console.log("Exercício 8 (Pilha):", pilha.pop());

// Exercício 9: Crie um programa que simule uma fila (queue).
let fila = [];
fila.push(1);
fila.push(2);
console.log("Exercício 9 (Fila):", fila.shift());

// Exercício 10: Dado um array de palavras, ordene-as em ordem alfabética.
let array100 = ["banana", "abacaxi", "uva", "melancia"];
console.log("Exercício 10:", array100.sort());

// Exercício 10: Dado um array de palavras, ordene-as em ordem alfabética.

let array10 = ["banana", "abacaxi", "uva", "melancia"];

for (let i = 0; i < array10.length - 1; i++) {
  for (let j = 0; j < array10.length - 1 - i; j++) {
    if (array10[j] > array10[j + 1]) {
      // Trocar elementos de posição
      let temp = array10[j];
      array10[j] = array10[j + 1];
      array10[j + 1] = temp;
    }
  }
}

console.log("Exercício 10:", array10);

// O primeiro loop for (for i) percorre cada palavra do array.
// O segundo loop for (for j) compara a palavra atual (array100[i]) com todas as palavras subsequentes.
// Se a palavra atual for maior que a próxima palavra, trocamos as posições das palavras usando uma variável temporária temp.