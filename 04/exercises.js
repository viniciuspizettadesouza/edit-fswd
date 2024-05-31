// 1. Criação de Funções: Escreva um programa JavaScript para criar uma função que aceite dois números como argumentos e retorne a soma deles.
function somaNumeros(a, b) {
    return a + b;
}
console.log("Soma de 5 e 3:", somaNumeros(5, 3));

// 2. Arrow functions: Escreva um programa JavaScript para criar uma arrow function que aceite um número como argumento e retorne o quadrado desse número.
const quadrado = (num) => num * num;
console.log("Quadrado de 4:", quadrado(4));

// 3. Acessando Propriedades: Escreva um programa JavaScript para acessar as propriedades de um objeto usando tanto a notação de ponto quanto a notação de colchetes.
let pessoa = {
    nome: "Vinicius",
    idade: 28,
    cidade: "Lisboa"
};
console.log("Nome:", pessoa.nome);
console.log("Cidade:", pessoa['cidade']);

// 4. Criação de Objetos: Escreva um programa JavaScript para criar um objeto que represente um carro, com propriedades como marca, modelo e ano, e um método para exibir essas informações.
let carro = {
    marca: "VW",
    modelo: "Golf",
    ano: 2020,
    exibirInformacoes: function() {
        console.log(`4.Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
};
carro.exibirInformacoes();

// 5. Adicionando Propriedades: Escreva um programa JavaScript para adicionar uma nova propriedade a um objeto existente.
carro.cor = "preto";
console.log("Cor do carro:", carro.cor);

// 6. Removendo Propriedades: Escreva um programa JavaScript para remover uma propriedade de um objeto e imprima no console.
delete carro.ano;
console.log("Informações do carro após remover o ano:");
console.log(carro.exibirInformacoes());

// 7. Iterando Propriedades: Escreva um programa JavaScript para iterar sobre todas as propriedades de um objeto e imprimi-las.
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

// 8. Funções de Retorno Antecipado: Escreva um programa JavaScript para criar uma função que aceite um número como argumento e retorne "Positivo" se o número for positivo, "Negativo" se for negativo, e "Zero" se for zero. Use o retorno antecipado para sair da função assim que uma condição for atendida.
function verificarNumero(num) {
    if (num > 0) return "Positivo";
    if (num < 0) return "Negativo";
    return "Zero";
}
console.log("Verificar número 10:", verificarNumero(10));

// 9. Funções Aninhadas: Escreva um programa JavaScript para criar uma função que aceite um número como argumento e retorne uma função aninhada. A função aninhada deve aceitar outro número como argumento e retornar a soma dos dois números.
function criarFuncaoAninhada(num1) {
    return function(num2) {
        return num1 + num2;
    };
}
console.log("Soma de 5 e 7:", criarFuncaoAninhada(5)(7));

// 10. Funções de Chamada de Retorno: Escreva um programa JavaScript para criar uma função que aceite outra função como argumento e a chame.
function chamarFuncao(callback) {
    callback();
}
chamarFuncao(() => {
    console.log("Função de chamada de retorno!");
});

console.log(chamarFuncao(() => {
    console.log("Função de chamada de retorno!");
}))
