import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)





// 4
interface ApiResponse<T> {
  data: T;
  error?: string;
}

function handleApiResponse<T extends object>(response: ApiResponse<T>): T extends { id: infer U } ? U : never {
  console.log(response)
  if ('error' in response.data) {
    throw new Error(response.data.error as string);
  }
  if ('id' in response.data) {
    return (response.data as { id: any }).id;
  }
  console.log(response.error)
  throw new Error('No id property found');
}


// Teste da função com exemplos de respostas de API
const response1: ApiResponse<{ id: number; name: string }> = {
  data: { id: 1, name: 'Laptop' }
};

const response2: ApiResponse<{ name: string }> = {
  data: { name: 'Mouse' }
};

const response3: ApiResponse<{ id: string; error: string }> = {
  data: { id: "abc", error: '404'}
};

// Teste com as respostas
try {
  const productId = handleApiResponse(response1); // number
  console.log(productId); 
} catch (error) {
  console.error(error);
}

try {
  const noIdResponse = handleApiResponse(response2); // never
  console.log(noIdResponse);
} catch (error) {
  console.error(error);
}

try {
  const orderId = handleApiResponse(response3); // string
  console.log(orderId);
} catch (error) {
  console.error(error);
}
