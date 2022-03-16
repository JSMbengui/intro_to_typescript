class No {
  value: number
  next?: No

  constructor(value: number, next?: No) {
    this.value = value
    this.next = next
  }
}
export class MyLinkedList {
  private head: No | undefined
  private length: number = 0

  private hasValueOnList() {
    return this.length > 0
  }

  get(index: number = 0): number {
    if (!this.hasValueOnList() || index >= this.length) return -1

    if (index === 0 && this.head) return this.head?.value

    let currentNode = this.head,
      countValuesOnList = 0;

    while (countValuesOnList < index) {
      countValuesOnList++;

      if (currentNode?.next)
        currentNode = currentNode?.next
    }

    return currentNode?.value ? currentNode.value : -1
  }
  addAtHead(value: number): void {
    let nextValue = this.hasValueOnList() ? this.head : undefined
    let newNo = new No(value, nextValue)

    this.head = newNo
    this.length++
  }
  addAtTail(value: number): void {
    if (!this.hasValueOnList() || !this.head) {
      this.addAtHead(value)
      return
    }

    let currentNode = this.head,
      countValuesOnList = 0;

    while (countValuesOnList < this.length) {
      countValuesOnList++;

      if (currentNode?.next)
        currentNode = currentNode?.next
    }

    let newNo = new No(value)

    currentNode.next = newNo
  }
  addAtIndex(index: number, value: number): void {
    if (index >= this.length) return

    if (index === 0 || !this.head) {
      this.addAtHead(value)
      return
    }

    if (index === this.length - 1) {
      this.addAtTail(value)
      return
    }

    let countValuesOnList = 0,
      currentNo = this.head;

    while (countValuesOnList < index) {
      if (currentNo?.next)
        currentNo = currentNo.next

      countValuesOnList++
    }

    let newNo = new No(value, currentNo?.next)
    currentNo.next = newNo
    this.length++;
  }
  deleteAtIndex(index: number): void {
    if (index >= this.length || !this.head) return

    if (index === 0 && this.length === 1) {
      this.head = undefined
      this.length--;
      return
    } else if (index === 0 && this.head) {
      // i need to thing in an better way to set the next element when remove the first element
      // because it is undefined, and i set the head to be of type No
      let nextNo = this.head.next ? this.head.next : this.head

      this.head = nextNo
    }

    let countValuesOnList = 0,
      currentNo = this.head;

    while (countValuesOnList < index) {
      if (currentNo?.next)
        currentNo = currentNo.next

      countValuesOnList++
    }

    currentNo.next = currentNo?.next?.next

    this.length--;
  }
  print(): void {
    if (!this.hasValueOnList() || !this.head) console.log('null')

    let list = `${this.head?.value}`

    let currentNo = this.head

    while (currentNo?.next) {
      currentNo = currentNo.next

      list += `->${currentNo.value}`

    }
    list += `->null`

    console.log(list)
  }
}