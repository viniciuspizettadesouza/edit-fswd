// 1
function soma(x: number, y: number): number {
    return x + y
}
const total = soma(10, 20)
console.log(total)

// 2
function positivoOuNegativo(numero: number): string {
    if (numero > 0) {
        return 'Positivo'
    }
    if (numero < 0) {
        return 'Negativo'
    }
    return 'Zero'
}
console.log(positivoOuNegativo(0))
console.log(positivoOuNegativo(10))

// 3
type Carro = {
    marca: string
    modelo: string
    ano: number
    mostraInfo: () => void
}

const carro: Carro = {
    marca: 'marca',
    modelo: 'modelo',
    ano: 11,
    mostraInfo() {
        console.log(`${this.marca}, ${this.modelo}, ${this.ano}`)
    }
}

carro.mostraInfo()

type Carro2 = {
    marca: string
    modelo: string
    ano: number
}

const carro2: Carro2 = {
    marca: 'marca',
    modelo: 'modelo',
    ano: 11,
}

function mostraInfo2(carro2: Carro2) {
    console.log(`${carro2.marca}, ${carro2.modelo}, ${carro2.ano}`)
}

mostraInfo2(carro2)
/////////////////////

type Carros = Carro2[]

const carros: Carros = [{
    marca: 'marca',
    modelo: 'modelo',
    ano: 11,
}, {
    marca: 'marca2',
    modelo: 'modelo2',
    ano: 10,
}]

console.log(carros)

carros.map((carro) => {
    const { marca, modelo, ano } = carro
    console.log(`${marca}, ${modelo}, ${ano}`)
})



// 4
type Employment = {
    title: string;
    key_skill: string;
};

type Address = {
    city: string;
    street_name: string;
    street_address: string;
    zip_code: string;
    state: string;
    country: string;
    coordinates: {
        lat: number;
        lng: number;
    };
};

type CreditCard = {
    cc_number: string;
};

type Subscription = {
    plan: string;
    status: string;
    payment_method: string;
    term: string;
};

type User = {
    id: number;
    uid: string;
    password: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    avatar: string;
    gender: string;
    phone_number: string;
    social_insurance_number: string;
    date_of_birth: string;
    employment: Employment;
    address: Address;
    credit_card: CreditCard;
    subscription: Subscription;
};

async function fetchUsers() {
    const response = await fetch('https://random-data-api.com/api/v2/users?size=2')
    const users: User[] = await response.json()
    console.log(users)
    const newUser = users.map((user) => {
        return user.address.city
        console.log(user.address.city)
    })
    const newUser2 = users.filter((user) => user.id > 5000)
    console.log(newUser2)
}

fetchUsers()


// 5
let isDone: boolean = true
// isDone = 'test'

// 6
interface Person {
    firstName: string
    lastName: string
}

function greet(pessoa: Person): string {
    return `${pessoa.firstName} ${pessoa.lastName}`
}

console.log(greet({ firstName: 'vinicius', lastName: 'souza' }))


// 7
interface Rectangle {
    width: number
    height: number
}

function calc(rectangle: Rectangle): number {
    return rectangle.height * rectangle.width
}

console.log(calc({ width: 10, height: 5 }))