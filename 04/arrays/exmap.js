// Array de números para os exemplos
const numeros = [1, 2, 3, 4, 5];

// map(): Transformar cada elemento do array
const dobrados = numeros.map(num => {num * 2});
console.log(dobrados);  // [2, 4, 6, 8, 10]

// map(): Transformar cada elemento do array
const dobrados2 = numeros.map(sol => sol * 2);
console.log(dobrados2);  // [2, 4, 6, 8, 10]

/////////// Declarar funcao e invocar neste momento

const dobrados3 = numeros.map(function square(num) {
    console.log('dobrados3', num)
    return num * 2;
});
console.log(dobrados3)

/////////// Declarando funcao e invocando nos parametros do map

function square(num) {
    console.log('dobrados4', num)
    return num * 2;
}

const dobrados4 = numeros.map(square);
console.log(dobrados4)

///////////