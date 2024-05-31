// 1. Criação de Funções: Escreva um programa JavaScript para criar uma função que aceite dois números como argumentos e retorne a soma deles.
function soma(x, y) {
    return x + y
}
console.log(soma(10, 20))

// 2. Arrow functions: Escreva um programa JavaScript para criar uma arrow function que aceite um número como argumento e retorne o quadrado desse número.
const calculaQuadrado = (numero) => numero * numero
console.log(calculaQuadrado(2))

// 3. Acessando Propriedades: Escreva um programa JavaScript para acessar as propriedades de um objeto usando tanto a notação de ponto quanto a notação de colchetes.
let pessoa = {
    nome: 'Vinicius',
    cidade: 'Lisboa'
}
console.log(pessoa.nome)
console.log(pessoa['cidade'])

// 4. Criação de Objetos: Escreva um programa JavaScript para criar um objeto que represente um carro, com propriedades como marca, modelo e ano, e um método para exibir essas informações.
let carro = {
    marca: 'VW',
    modelo: 'golf',
    ano: '2024',
    exibir: function() {
        console.log(`${this.marca} ${this.modelo} ${this.ano}`)
    }
}
carro.exibir()

// 5. Adicionando Propriedades: Escreva um programa JavaScript para adicionar uma nova propriedade a um objeto existente.
carro.cor = 'branco'
console.log(carro.cor)

// 6. Removendo Propriedades: Escreva um programa JavaScript para remover uma propriedade de um objeto e imprima no console.
delete carro.cor
console.log(carro)

// 7. Iterando Propriedades: Escreva um programa JavaScript para iterar sobre todas as propriedades de um objeto e imprimi-las.
for (let propriedade in carro) {
    console.log(propriedade)
}

// 8. Funções de Retorno Antecipado: Escreva um programa JavaScript para criar uma função que aceite um número como argumento e retorne "Positivo" se o número for positivo, "Negativo" se for negativo, e "Zero" se for zero. Use o retorno antecipado para sair da função assim que uma condição for atendida.
function retornoAntecipado(numero) {
    if (numero > 0) return 'Positivo'
    if (numero < 0) return 'Negativo'
    return 'Zero'
}
console.log(retornoAntecipado(-10))

// 9. Funções Aninhadas: Escreva um programa JavaScript para criar uma função que aceite um número como argumento e retorne uma função aninhada. A função aninhada deve aceitar outro número como argumento e retornar a soma dos dois números.
function funcaoAninhada(numero) {
    return function(numero2) {
        return numero + numero2
    }
}
console.log(funcaoAninhada(10)(5))

// 10. Funções de Chamada de Retorno: Escreva um programa JavaScript para criar uma função que aceite outra função como argumento e a chame.
function chamarCallback(callback) {
    callback()
}
chamarCallback(() => {
    console.log("ex 10")
})