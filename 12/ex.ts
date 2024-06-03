interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: 'Laptop', price: 1500 },
    { id: 2, name: 'Laptop', price: 20 },
    { id: 3, name: 'Keyboard', price: 50 },
];

function searchByKey<T>(items: T[], key: keyof T, value: number | string): T[] {
    // Implementar a função aqui
    return items.filter(item => item[key] >= value);
}

const result = searchByKey(products, 'price', 20);
console.log(result); // Deve imprimir o produto com nome 'Laptop'
console.log(result[0].name)



// 2
type HasId<T> = T extends { id: any } ? true : false;

interface Product {
    id: number;
    name: string;
}

interface Category {
    name: string;
}
interface Pessoa {
    email: string
}

type ProductHasId = HasId<Product>; // Deve ser true
type CategoryHasId = HasId<Category>; // Deve ser false
type PersonHasId = HasId<Pessoa>

const pessoa: PersonHasId = false
console.log(pessoa)

const testProduct: ProductHasId = true; // válido
const testCategory: CategoryHasId = false; // válido

console.log(testProduct); // Deve imprimir true
console.log(testCategory); // Deve imprimir false



// 3
type ExtractIdType<T> = T extends { id: infer U } ? U : never;

interface User {
    id: number;
    name: string;
}

interface Order {
    id: string;
    amount: number;
}

type UserIdType = ExtractIdType<User>; // number
type OrderIdType = ExtractIdType<Order>; // string

// Testando os tipos
const userId: UserIdType = 123; // válido
const orderId: OrderIdType = "abc"; // válido
console.log(userId);
console.log(orderId);





interface ApiResponse<T> {
    data: T;
    error?: string;
}

function handleApiResponse<T extends ApiResponse<T>>(response: ApiResponse<T>): T extends { id: infer U } ? U : never {
    console.log(response.data)
    if ('error' in response.data) {
        console.log(response.data)
        throw new Error(response.data.error);
    }
    if ('id' in response.data) {
        console.log((response.data as { id: any }).id)
        return (response.data as { id: any }).id
    }

    return response.data.id; // Corrigir para retornar o tipo correto
}

const response1: ApiResponse<{ id: number; name: string }> = {
    data: { id: 1, name: 'Laptop' }
};

const response2: ApiResponse<{ name: string }> = {
    data: { name: 'Mouse' }
};

const response3: ApiResponse<{ name: string, error: string }> = {
    data: { name: 'Mouse', error: '404' }
}

console.log(handleApiResponse(response3))

// Deve imprimir 1
console.log(handleApiResponse(response1));

// Deve gerar um erro de compilação, pois o tipo retornado é never
console.log(handleApiResponse(response2));
