// Dia 10/05
// Ex 01 - sincrona
fetch('https://random-data-api.com/api/v2/users')
  .then(response => response.json())
  .then(data => {   
    const resultsContainer = document.getElementById('ex01');
    resultsContainer.innerHTML = JSON.stringify(data);

    const {id, first_name} = data
    console.log('ex1', id, first_name)
    const idContainer = document.getElementById('userId');
    const nameContainer = document.getElementById('userName');  
    idContainer.innerHTML = JSON.stringify(id);
    nameContainer.innerHTML = first_name;
  })

  // Ex 01 - assincrona
  const ex01 = document.getElementById('ex01');
  async function funcaoAsincrona () {
    const resposta = await fetch('https://random-data-api.com/api/v2/users')
    .then(response => response.json())
    .then(data => JSON.stringify(data))
  }
  funcaoAsincrona()


// Ex 02
setTimeout(() => {
  console.log('Ex2 Esta mensagem é exibida após um certo período de tempo.');
}, 1000);
[]


// Ex 03
setInterval(() => {
  console.log('Mensagem');
}, 2000);



// Ex 04
const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('ex4 Promise resolvida');
  }, 2000);
});

myPromise.then(message => {
  console.log(message);
});


// Ex 05
async function fetchData() {
  try {
    const response = await fetch('https://random-data-api.com/api/v2/users');
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.error('Erro ao obter dados:', error);
  }
}

fetchData();

// Dia 15/05
// Ex 01
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Dados retornados após 2 segundos");
//     }, 2000);
//   });
// }

// async function fetchAndDisplayData() {
//   const data = await fetchData();
//   console.log(data);
// }

// fetchAndDisplayData();

// Ex 02

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = Math.random();
//       if (randomNumber < 0.5) {
//         const data = { message: "Dados obtidos com sucesso" };
//         resolve(data);
//       } else {
//         reject("Erro ao obter dados");
//       }
//     }, 2000);
//   });
// }

// async function fetchAndDisplayData() {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (error) {
//     console.error("Ocorreu um erro:", error);
//   }
// }

// // Exemplo de uso:
// fetchAndDisplayData();

// 3 
// function getUserData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const userData = { name: "Usuário", age: 30 };
//       resolve(userData);
//     }, 1000);
//   });
// }

// function getPosts() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const posts = ["Post 1", "Post 2", "Post 3"];
//       resolve(posts);
//     }, 2000);
//   });
// }

// async function displayUserDataAndPosts() {
//   try {
//     const userData = await getUserData();
//     console.log("Dados do usuário:", userData);

//     const posts = await getPosts();
//     console.log("Posts do usuário:", posts);
//   } catch (error) {
//     console.error("Ocorreu um erro:", error);
//   }
// }

// // Exemplo de uso:
// displayUserDataAndPosts();


// ex 01 com then
// function delayedMessage() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Promessa resolvida!");
//       resolve();
//     }, 3000);
//   });
// }

// // Exemplo de uso:
// delayedMessage()
//   .then(() => {
//     console.log("Promessa concluída com sucesso!");
//   })
//   .catch((error) => {
//     console.error("Ocorreu um erro:", error);
//   });


// ex 02 com then
// function randomNumber() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const number = Math.floor(Math.random() * 10) + 1;
//       resolve(number);
//     }, 2000);
//   });
// }

// function checkNumber(number) {
//   return new Promise((resolve) => {
//     if (number % 2 === 0) {
//       resolve("Número válido");
//     } else {
//       resolve("Número inválido");
//     }
//   });
// }

// // Exemplo de uso:
// randomNumber()
//   .then((number) => {
//     console.log("Número gerado:", number);
//     return checkNumber(number);
//   })
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error("Ocorreu um erro:", error);
//   });

// ex 3 com then
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { message: "Dados obtidos com sucesso" };
//       resolve(data);
//     }, 2000);
//   });
// }

// function processData(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Dados processados com sucesso: " + data.message);
//     }, 1000);
//   });
// }

// // Exemplo de uso:
// fetchData()
//   .then((data) => {
//     console.log(data.message);
//     return processData(data);
//   })
//   .then((processedData) => {
//     console.log(processedData);
//   })
//   .catch((error) => {
//     console.error("Ocorreu um erro:", error);
//   });
