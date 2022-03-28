
// use of generic with function

// function addItemToQueue<T>(value: T) {
//   queue.push(value)
// }

// function identity<T,K>(value: T): K {
//   return value
// }
// const result = identity({})
// const result1 = identity(12)

type User = {
  name: string
}

async function fetchApi<ResultType = Record<string, any>>(path: string): Promise<ResultType> {
  const response = await fetch(`https://example.com/api${path}`)

  return response.json()
}

async function call() {
  const data = await fetchApi('/users')
  data.l
}


let a: Record<string, number> = {}

a.l = 12

// use of generic in interfaces and classes

interface MyInterface<T> {
  field: T
}

let varInterface: MyInterface<number> = {
  field: 12
}

console.log(varInterface)

class MyClass<T> {
  field: T

  constructor(field: T) {
    this.field = field
  }

}

let varClass = new MyClass<string>('name')

class HttpApplication<Context> {
  context: Context

  constructor(context: Context) {
    this.context = context
  }

  get(url: string, handle: (context: Context) => Promise<void>): this {
    return this
  }
}

const context = { someValue: true }
const app = new HttpApplication(context)

// generic as type

type MyIdentityType<T> = T

type BooleanFields<T> = {
  [K in keyof T]: boolean
}

type MyUser = {
  name: string
  email: string
}

type UserFecthOptions = BooleanFields<User>

