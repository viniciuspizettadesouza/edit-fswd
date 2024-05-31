export function exercicio1() {
    type Person = {
        name: string;
        age: number;
        isStudent: boolean;
    }

    function printPerson(pessoa: Person) {
        console.log(pessoa)
        console.log(`Nome:${pessoa.name}, Idade:${pessoa.age}`)
    }

    const nome = 'Vinicius'
    const age = 28

    const pessoa: Person = {
        name: nome , age: age, isStudent: false
    }

    printPerson(pessoa)
}

export function exercicio2() {
    enum Direction {
        UP = 'Up',
        DOWN = 'down',
        LEFT='left',
         RIGHT = 'right'
    }

    function move(direction: Direction) {
        console.log(direction)
    }

    move(Direction.UP)
}


export function exercicio3() {
    function printId(parametro: string | number) {
        console.log(parametro)
    }
    printId('teste')
    printId(123)
}


export function exercicio4() {
    type Success = {
        status: 'success',
        data: string
    }
    type Errors = {
        status: 'error',
        message: string
    }
    function handleResponse(parametro: Success | Errors) {
        if(parametro.status === 'success') {
            console.log(parametro)
            console.log(`${parametro.data}`)
        } else {
            console.log(parametro.message)
        }
    }
    const resposta: Success = {status: 'success', data: 'dados'}
    const resposta2: Errors = {status: 'error', message: 'dados2'}
    handleResponse(resposta)
    handleResponse(resposta2)
}


export function exercicio5() {
    enum Role {
        Admin = 'Admin',
        User = 'Usuario', 
        Guest = 'Guest',
    }

    type PersonRole = {
        role: Role,
        username: string
    }

    function assignRole(personRole: PersonRole) {
        console.log(personRole)
        console.log(`Role:${personRole.role} e Nome:${personRole.username}`)
    }

    assignRole({role: Role.Admin, username: 'vinicius'})
}