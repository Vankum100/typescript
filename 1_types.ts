const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.3
const num: number = 3e10

const message: string = "Hello Typescript"

const numberArray: number[] = [1, 2, 3, 4, 5, 6]
const numberArray2: Array<number> = [1, 2, 3, 4, 5, 6]

const words: string[] = ["Hello", "World", "Typescript"]

// Tuple 
const contact: [string, number] = ["Ivan", 4644566]

// any
let variable: any = 42

// ... 
variable = []

// =====
function sayMyName(name: string): void{
    console.log(`your name is ${name}`);
    
}

sayMyName("John Doe")


// Never 
function throwError(message:string) : never{
    throw new Error(message);
}

// Type 
type Login = string

const login: Login = 'admin'
//const login2: Login = 2 

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
//const id3: ID = true