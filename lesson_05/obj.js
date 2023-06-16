const obj = {
    name: 'Misha',
    age: 7,
    height: 20,
    color: 'brown',
    sex: 'male',
    helloMisha: function () {
        console.log(`It's ${this.name}. He is ${this.age} years old. HE is ${this.color} and he is ${this.sex}`)
    }
}
obj.helloMisha();
obj.age = 8;
obj.helloMisha();
obj.numberOfLegs = 4
console.log(obj.numberOfLegs)
const obj1 = new Object({})

const obj2 = {
    'hi hi': 'hello',
    'by by': 'goodbye'
}

const key = 'hi hi'

console.log(obj2[key]);
console.log(obj2.key);

const sym = Symbol('hi')
const sym1 = Symbol('hi')
console.log(sym === sym1)

const sym2 = Symbol.for('hi')
const sym3 = Symbol.for('hi')
console.log(sym2 === sym3)
console.log(sym1 === sym3)

const arr = [10, 'strinf', true, {}, [], false];
console.log(arr[0])

console.log(arr.join(' - '));
console.log(arr)

const numberArr = [20, 40, 10, 1, 9, 5, 12, 56];

console.log(numberArr.sort());
console.log(numberArr.sort((a, b) => a - b));
console.log(numberArr.sort((a, b) => b - a));
console.log(numberArr);

let newNumberArr = numberArr.sort((a, b) => a - b);
console.log(newNumberArr);

newNumberArr = numberArr.filter((num) => num > 10)
console.log(newNumberArr);
console.log(numberArr);

console.log(numberArr.slice(2, 5));

const popNumber = numberArr.pop();
console.log(popNumber)
console.log(numberArr)

const shiftNumber = numberArr.shift();
console.log(shiftNumber)
console.log(numberArr)

const pushNumber = numberArr.push(56);
console.log(pushNumber)
console.log(numberArr)

const unshiftNumber = numberArr.unshift(1);
console.log(unshiftNumber)
console.log(numberArr)

const reducedArr = numberArr.reduce((acc, curr) => acc + curr)
console.log(reducedArr)

const reducedArr2 = numberArr.reduce((acc, curr) => acc + curr, 100)
console.log(reducedArr2)

console.log(getDeclartionFunction(20, 25));

const getExpressionFunction = function (a, b) {
    return a + b;
}

function getDeclartionFunction(a, b) {
    return a + b;
}

console.log(getExpressionFunction(10, 15))
console.log(getDeclartionFunction(20, 25))

console.log('' == 0);
console.log('' === 0);

console.log('' != 0);
console.log('' !== 0);

console.log(true && 0 && 1 && 10 && 12);


console.log(0 || 0 || 0 || 0 || 0)