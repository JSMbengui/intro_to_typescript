export class Person {
  instantiatedAt:Date

  // constructor(name: string, age: number) {
  //   this.name = name
  //   this.age = age
  //   this.instantiatedAt = new Date()
  //   console.log(`Constructor called with name=${name}`)
  // }
  constructor(
    public name: string, 
    public age: number) {
    this.instantiatedAt = new Date()
    console.log(`Constructor called with name=${name}`)
  }

  public getBirthYear() {
    return new Date().getFullYear() - this.age
  }
}

interface Logger {
  debug(message: string, metadata?: Record<string, unknown>): void;
  info(message: string, metadata?: Record<string, unknown>): void
  warning(message: string, metadata?: Record<string, unknown>): void
  error(message: string, metadata?: Record<string, unknown>): void
}
interface Clearable {
  clear(): void
}

export class ConsoleLogger implements Logger, Clearable { 
  clear(): void {
    console.clear()
  }
  debug(message: string, metadata?: Record<string, unknown>): void {
    console.info(message, metadata)
  }
  error(message: string, metadata?: Record<string, unknown>): void {
    console.error(message, metadata)
  }
  info(message: string, metadata?: Record<string, unknown>): void {
    console.info(message, metadata)
  }
  warning(message: string, metadata?: Record<string, unknown>): void {
    console.warn(message, metadata)
  }
}

// 
abstract class Stream {
  abstract read(count: number): Buffer
  abstract write(data: Buffer): void

  copy(count: number, targetBuffer: Buffer, targetBufferOffset: number) {
    const data = this.read(count)

    data.copy(targetBuffer, targetBufferOffset)
  }
}

export class FileStream extends Stream {
  read(count: number): Buffer {
    return new Buffer('')
  }

  write(data: Buffer): void {
    
  }
}

class Employee {
  constructor(
    protected identifier: string
  ) {

  }
}

export class FinanceEmployee extends Employee {
  getFinanceIdentifier() {
    return this.identifier
  }
  isSameEmployeeAs(employee: FinanceEmployee) {
    return this.identifier === employee.getFinanceIdentifier();
  }
}