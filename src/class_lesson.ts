
export class Point {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y
  }

  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y)
  }

  public printCoordinates(): void {
    console.log(`x: ${this.x}, y: ${this.y}`)
  }
}

// Class inheritance
export class Point3D extends Point {
  z: number

  constructor(x: number, y: number, z: number) {
    super(x, y)
    this.z = z;
  }

  add(point: Point3D): Point3D {
    let point2D = super.add(point)

    return new Point3D(point2D.x, point2D.y, this.z + point.z)
  }
}

class PlayerType { }
export class Player {
  static instancesCreated = 0; // class variable

  constructor() {
    Player.instancesCreated++;
  }

  // static class or method only accessible through the class itself
  public static createPlayer(type: PlayerType): Player {
    return new Player()
  }

  // Instance method only accessible through an instance of the class
  public shoot(): void {
    console.log('accessible after an instance')
  }
}

// interfaces in class
interface Logger {
  value: string
}
interface ILogEvents {
  logger: Logger
  logEvent: (event: Event) => void
}

export class DomainEvents implements ILogEvents {
  logger: Logger

  constructor(logger: Logger) {
    this.logger = logger
  }
  logEvent(event: Event) {
    console.log(this.logger)
  };
}

interface ICircle {
  readonly id: string
  center: {
    x: number
    y: number
  },
  radius: number,
  color?: string
}

// interface an implements other interface
interface ICircleWithArea extends ICircle {
  getArea: () => number
}

export const circle3: ICircleWithArea = {
  id: '003',
  center: { y: 1, x: 9 },
  radius: 6,
  color: '#fff',
  getArea: function () {
    return (this.radius ** 2) * Math.PI
  }
}

// generics

interface Queue<T> {
  data: T[]
  push: (t: T) => void
  pop: () => T | undefined
}

interface Monkey {
  name: string
  color: string
}

export class MonkeyQueue implements Queue<Monkey> {
  data: Monkey[]

  constructor() {
    this.data = []
  }
  push(monkey: Monkey) {
    this.data.push(monkey)
  }
  pop() {
    return this.data.shift()
  };
}

interface Person {
  name: string
  age: number
}
const person = {} as Person
person.name = 'Joel'

type CreateUserRequestDTO = {
  userId: string
  email: string
  password: string
}

function createUser(request: CreateUserRequestDTO) {
  // something here
}

type Name = string
type Data = [number, string]
type PointX = { x: number }
type PointY = { y: number }
type IncompletePoint = PointX | PointY
type EPoint = PointY & PointX

const pX: PointX = { x: 1 }
const incompletePoint: IncompletePoint = { x: 1 }
const point1: EPoint = { x: 1, y: 2 }

class Job {
  public title: string;
  constructor(title: string) {
    this.title = title;
  }
}
type JobCollection = Job[]; // Alias for an array of jobs
const jobs: JobCollection = [];
jobs.push(new Job("Software Developer"));
// jobs.push(12) // Error

type Password = string | number;
let password: Password = "secretpassword";
