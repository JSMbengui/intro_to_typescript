import { MyLinkedList } from "./ds/linked_list/implementation";
import { FileStream, FinanceEmployee, Person } from "./intro/working_with_class";

let myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(2);
// console.log('i: ', myLinkedList.get(0))
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(6)
// console.log('i: ', myLinkedList.get(1))
// myLinkedList.addAtHead(3);
// myLinkedList.addAtTail(5)
// myLinkedList.deleteAtIndex(0)

// myLinkedList.print()
// console.log('fim')
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
// console.log(myLinkedList.get(1));              // return 2
// myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
// console.log(myLinkedList.get(1));              // return 3

// working with class

const personInstance = new Person('Joel', 20)
const fileStream = new FileStream();
console.log(personInstance.name)
console.log(personInstance.age)
console.log(personInstance.getBirthYear())

const employee = new FinanceEmployee("abc-123");

console.log('finance: ', employee.getFinanceIdentifier());
