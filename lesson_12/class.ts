/**
 *
 */
class Person {
    name: string;
    static readonly secondName = 'Egor';
    constructor(name) {
        this.name = name;
    }

    public sayHello(): string {
        return `Hello! ${this.name}!`
    }

    protected sayHi(): string {
        return `Hi! ${this.name}!`
    }

    private sayBye(): string {
        return `Buy! ${this.name}!`
    }

    public inputBye(): void {
        console.log(this.sayBye())
    }

    public static printBye(): void {
        console.log(`Buy! ${this.secondName}!`)
    }
}

class SecondPerson extends Person {
    constructor(name) {
        super(name)
    }

    public hello() {
        return this.sayHello()
    }

    public hi() {
        return this.sayHi()
    }

    // public buy() {
    //     return this.sayBuy()
    // }
}

const person = new Person('Dasha');
const secondPerson = new SecondPerson('Masha');

console.log(person.sayHello())
console.log(secondPerson.hello())
console.log(secondPerson.sayHello())

// console.log(person.sayHi())
console.log(secondPerson.hi())
// console.log(secondPerson.sayHi())

person.inputBye()

Person.printBye();
SecondPerson.printBye()

abstract class Car {
    static move() {
        console.log('Moved')
    }
}

Car.move()

