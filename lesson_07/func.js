function add(a, b) {
    return a + b;
}

let add1 = function () {

}

console.log(add());

console.log(add.call(null, 1, 2));
console.log(add.apply(null, [1, 2]));
const add4 = add.bind(null, 1, 2);
console.log(add4());

const person = {
    name: 'Dasha',
    surname: 'Petrova',
    hello: function () {
        return `Hello ${this.name} ${this.surname}!`
    }
}

console.log(person.hello());

const person1 = {
    name: 'Ivan',
    surname: 'Kazak',
}

console.log(person.hello.call(person1));

(function () {
    console.log(12 + 13)
    return 12 + 13
})();

function multiply(a, b) {
    console.log(arguments);
    let sum = 1;
    for(let arg of arguments) {
        sum *= arg;
    }
    return sum;
}

console.log(multiply(12, 15, 13, 16))

function multiply1(a, b, ...rest) {
    console.log(rest);
    let sum = a * b;
    if(rest.length > 0) {
        sum = rest.reduce((prev, cur) => prev * cur, sum)
        sum = rest.reduce(function (prev, cur) {
            return prev * cur;
        }, sum)
    }
    return sum;
}

console.log(multiply1(12, 15, 17, 18));

function greet(name, surname, typeOfGreet = 'Hello', additional = 'glad to see you') {
    return `${typeOfGreet}! ${name} ${surname}, ${additional}!`;
}

console.log(greet('Dasha', 'Ivamova'))
console.log(greet('Masha', 'Petrova', 'Hi', 'By'))


let abc = 'Hello';

function sayHi() {
    let bce = 'Bye Bye'
    console.log(bce)
    return abc;
}
console.log(sayHi())
// console.log(bce)

const arr = [5, 10, 15, 20, 25, 30];
console.log(arr.filter((num) => {
    return num > 16
}))

console.log(arr.filter(num => num > 16));

const person2 = {
    name: 'Dasha',
    surname: 'Petrova',
    hello: () => {
        return `Hello ${this.name} ${this.surname}!`
    },
    sayHi: function () {
        return `Hello ${this.name} ${this.surname}!`
    }
}

console.log(person2.hello());
console.log(person2.sayHi());


let a = (a, b, c) => a + b + c;

console.log(a(1, 3, 6))
console.log(a.call(null, 1, 3, 6))
console.log(person2.hello.call(person1))

