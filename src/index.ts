import  {
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