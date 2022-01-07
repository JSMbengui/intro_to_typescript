import {
  Point,
  Point3D,
  Player
} from './class_lesson'


console.log('lesson about class\n')
let p1 = new Point(0, 10);
let p2 = new Point(10, 20)
let p3 = p1.add(p2)


console.log(p3)
let point3d = new Point3D(0, 10, 20)
let point3d2 = new Point3D(30, 40, 50)
let point3d3 = point3d.add(point3d2)

console.log(point3d3)

let player1 = new Player()
let player2 = new Player()

player1.shoot()
console.log('Just created ', Player.instancesCreated, ' instance of player')


// enum

import {
  instruments,
  otherInstruments
} from './other_types'

console.log(instruments.BASS)
console.log(instruments[0])

console.log(otherInstruments.BASS)
//error
// console.log(otherInstruments[0])

function executeCommand(name: string): void {
  console.log(`Executing ${name}`);
}
executeCommand('Say hello');

let userData = {
  email: '',
  password: '',
  phonenumber: ''
}
function onUpdate(
  props: { fieldName: 'email' | 'password' | 'phonenumber', value: any }
): void {
  // Possibly => { fieldName: 'email', value: 'me@khalil.com' };
  // Or maybe => { fieldName: 'password', value: 'secretpassword' };
  userData[props.fieldName] = props.value
}

onUpdate({ fieldName: 'email', value: 'joelsmbengui@gmail.com' })
console.log(userData)

const GenreType = {
  1: "Metal",
  2: "Rap",
  3: "Pop"
}

const GenreType2: { [index: number]: string } = {
  1: "Metal",
  2: "Rap",
  3: "Pop"
}
GenreType[1] = "1"
// error 
// GenreType["11"] = "1"

GenreType2[1] = "1"
GenreType2["11"] = "1"

interface GenreProps {
  id: number
  description: string
}

class Genre {
  private props: GenreProps

  get id(): number {
    return this.props.id
  }
  get description(): string {
    return this.props.description
  }

  constructor(props: GenreProps) {
    this.props = props
  }
}

function createGenreFromGenreId(id: number): Genre | null {
  if (id < 1 || id > 3) {
    return null
  }

  return new Genre({
    id,
    description: GenreType2[id]
  })
}

function example(x: number | boolean) {
  if (typeof x === 'number') {
    return x.toFixed(2);
  }
  return x // Error! Property 'toFixed' does not exist on type 'boolean'.
}

class MyResponse {
  header = 'header example';
  result = 'result example';
  // ...
}
class MyError {
  header = 'header example';
  message = 'message example';
  // ...
}
function example2(x: MyResponse | MyError) {
  if (x instanceof MyResponse) {
    // console.log(x.message); // Error! Property 'message' does not exist on type 'MyResponse'.
    console.log(x.result); // Okay
  } else {
    // TypeScript knows this must be MyError
    console.log(x.message); // Okay
    // console.log(x.result); // Error! Property 'result' does not exist on type 'MyError'.
  }
}

interface Person {
  name: string;
  age: number;
}
const person: Person = {
  name: 'John',
  age: 28,
};
const checkForName = 'name' in person; // true
console.log(checkForName)