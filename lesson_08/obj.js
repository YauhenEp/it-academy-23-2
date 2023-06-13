const obj = {
    _property: 'hi',
    name: 'Dasha',
    surname: 'Petrova',
    age: 18,
    car: 'Ferrari',
    family: {
        mother: 'Albina',
        father: 'Leonid'
    },
    move: function () {
        console.log('I am moving')
    },
    'full name': '...',
    1: 25
}

obj.eyesColor = 'green';

console.log(obj.eyesColor)
console.log(obj.car)
delete obj.car;
console.log(obj.carColor);

let arr = [1];
console.log(arr[2]);

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

console.log(obj.toString())
console.log(obj.valueOf())

Object.defineProperty(obj, 'pets', {
    writable: false,
    enumerable: false,
    configurable: false,
    value: 'Sharik',
})

for(let key in obj) {
    console.log(obj[key])
}

obj.pets = 'Gosha';
console.log(obj.pets)

delete obj.pets;
console.log(obj.pets)

console.log(obj['full name'])
console.log(obj['1'])


function CreateObject(name, age, car) {
    this.name = name;
    this.age = age;
    this.car = car
}
const newObj = new CreateObject('Masha', 22, 'Toyota')
console.log(newObj)

