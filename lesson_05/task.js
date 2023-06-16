var newVariable = 'Hello';
let newLetVariable = 23;
const newConstVariable = true;
let newVar = null;
let newVar2;
let newVar3 = {};

// newLetVariable = 'string';

console.log(newVar2);

console.log(typeof newVariable)
console.log(typeof newLetVariable)
console.log(typeof newConstVariable)
console.log(typeof newVar2)
console.log(typeof newVar3)
console.log(typeof newVar)

console.log(typeof typeof newVar)

let first = 1,
    second = 2,
    third = 3;

let number = 'string';
let number1 = new String('10');
console.log(number1 + number);

console.log(number.toUpperCase())

console.log(number instanceof String)
console.log(number1 instanceof String)

console.log(0.3 === (+(0.1 + 0.2).toFixed(2)))

console.log(parseInt('100', 10));
console.log(parseInt('100', 16));
console.log(parseInt('100', 8));
console.log(parseInt('100', 2));

console.log(Math.ceil(10.1))
console.log(Math.floor(10.9))
console.log(Math.round(10.4))
console.log(Math.round(10.5))

console.log(Math.floor(Math.random() * (100 - 1 + 1) + 1));

console.log(11 % 3);

console.log('Hello')
console.log("Hello")
console.log(`Hello`)

function getString(name, lastName, add) {
    return 'Hello, ' + name + '! Is your last name ' + lastName + '! ' + add + '.'
}

console.log(getString('Dasha', 'Ivanova', 'I love you'))

function getString1(name, lastName, add) {
    return `Hello, ${name}! Is your last name ${lastName}! ${add}.`
}

console.log(getString1('Masha', 'Petrova', 'I hate you'));

let str = 'hello world';

console.log(str.charAt(1))
console.log(str[2])

console.log(str.indexOf('rld'));

console.log(str.slice(0, 3));
console.log(str.slice(5));

console.log(str.split(' '))
console.log(str.split(''))