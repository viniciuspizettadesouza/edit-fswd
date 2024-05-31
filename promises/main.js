// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))


// 1 e 2
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const random = Math.random()
//       if (random < 0.5) {
//         resolve('sucesso')
//       } else {
//         reject('erro')
//       }
//     }, 2000)
//   })
// }

// async function fetchDataAndDisplay() {
//   try {
//     const data = await fetchData()
//     console.log(data)
//   } catch (error) {
//     console.error('erro', error)
//   }
// }

// fetchDataAndDisplay()


// 3
// function getUserData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const user = { nome: 'fulano' }
//       resolve(user)
//     }, 1000)
//   })
// }

// function getPosts() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const frutas = ['maçã', 'banana', 'laranja'];

//       resolve(frutas)
//     }, 2000)
//   })
// }

// async function fetchDataAndDisplay() {
//   const user = await getUserData()
//   console.log(user)
//   const posts = await getPosts()
//   console.log(posts)
//   console.log(user, posts)
// }
// fetchDataAndDisplay()

//  ex 1 com then
// function delayedMessage() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve()
//     }, 3000)
//   })
// }

// delayedMessage().then(() => {
//   console.log('Promessa resolvida')
// }).catch((err) => {
//   console.error('error', err)
// })

// // ex 02 com then
// function randomNumber() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const number = Math.floor(Math.random() * 10) + 1
//       resolve(number)
//     }, 2000)
//   })
// }

// function checkNumber(number) {
//   return new Promise((resolve) => {
//     if (number % 2 === 0) {
//       resolve('par')
//     } else {
//       resolve('impar')
//     }
//   })
// }

// randomNumber().then((number) => {
//   console.log(number)
//   return checkNumber(number)
// }).then((message) => {
//   console.log(message)
// })

// ex 3 com then
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nome: 'fulano' })
    }, 2000)
  })
}

function processData(data) {
  return new Promise((resolve) => {
    resolve(`dados processados com sucesso ${data.nome}`)
  })
}

fetchData().then((data) =>{
  return processData(data)
}).then((data)=> {
  console.log(data)
})