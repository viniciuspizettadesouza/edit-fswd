function Pessoa(nome, idade, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
    this.apresentar = function() {
        return `${this.nome} tem ${this.idade} anos e mora em ${this.cidade}`;
    }
}

let pessoa1 = new Pessoa('Vinicius', 28, "Floripa");
let pessoa2 = new Pessoa('Vinicius', 28, "Lisboa");

console.log(pessoa1)
console.log( pessoa2.apresentar())



