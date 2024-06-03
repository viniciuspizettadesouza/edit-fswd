// 7
interface Product {
    id: number
    name: string
    price: number
}

function mapProductsById(products: Product[]): Record<number, Product> {
    const productsByID: Record<number, Product> = {}
    products.forEach(product => {
        productsByID[product.id] = product
    })
    return productsByID
}

const products: Product[] = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 24.99 },
    { id: 3, name: "Product 3", price: 30 },
]

console.log(mapProductsById(products))



// 8
interface User {
    id: number
    name: string
}

interface PremiumUser extends User {
    isPremium: boolean
}

type PremiumUserDetails = Pick<PremiumUser, 'name'>

function getUserAccountDetails(user: User | PremiumUser): User | PremiumUserDetails {
    if ('isPremium' in user) {
        console.log(user)
        return { name: user.name }
    } else {
        return { id: user.id, name: user.name }
    }
}

const user: PremiumUser = {
    id: 1,
    name: 'name',
    isPremium: true
}

getUserAccountDetails(user)