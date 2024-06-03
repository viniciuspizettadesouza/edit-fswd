Exercicios

// 1. Arrow Functions e Template Strings (ES6): Reescreva a seguinte função para usar uma arrow function e uma template string.
function greet(name) {
  return 'Hello, ' + name + '!';
}

const greet2 = (name) => {
  return `Hello, ${name}!`;
}

const greet3 = (name) => `Hello, ${name}!`;

console.log(greet('V1'))
console.log(greet2('V2'))
console.log(greet3('V3'))

// 2. Async/Await (ES8): Reescreva a seguinte função que usa Promises para usar async/await em vez disso. 
async function fetchData() {
  const data = await fetch('https://random-data-api.com/api/v2/users')
    .then(response => response.json())
    .then(data => {
      console.log('fetchData', data)
      return data
    });
  console.log('async', data.id)
}

async function fetchData2() {
  const response = await fetch('https://random-data-api.com/api/v2/users');
  const data = await response.json();
  console.log('fetchData2', data);
}

fetchData()
fetchData2()

// 3. Optional Chaining (ES11): Use o encadeamento opcional para acessar a propriedade street do seguinte objeto, sem causar um erro se address ou street não existirem.
let user = {
  name: 'John',
  address: {
    street: '123 Main St'
  }
};

const street = user?.address?.street;
console.log(street)

// 4
const primeirosItens = [1, 2, 3]

const outrosItens = [10, ...primeirosItens, 4, 5, 6]

const maisItens = [outrosItens, primeirosItens]

console.log(maisItens)

console.log(outrosItens)

// Ex 5
const pessoa = {
  nome: 'Vinicius',
  idade: 28,
}

const { nome, idade } = pessoa;

const nome2 = pessoa.nome
const idade2 = pessoa.idade

console.log(nome2, idade2)

console.log(`${nome}, ${idade} `)