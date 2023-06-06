let a = 0;
while (a > 10) {
    console.log(a);
    a++;
}

do {
    console.log(a);
    a++;
} while (a < 10)

let b = [10, 20, 30 ,40]

for(let i = 0; i < b.length; i++) {
    console.log(b[i] + 1);
}

b.forEach((num) => console.log(num + 1))

let c = b.map((num) => num + 1)
console.log(c);

for(let num of b) {
    console.log(num + 1);
}

const obj = {
    name: 'Dasha',
    age: 18,
    surname: 'Petrova',
    car: 'BMW'
}

for(let key in obj) {
    console.log(obj[key]);
}

const date = new Date(Date.UTC(2000, 1, 1))

console.log(date.getMonth());
console.log(date.getDay());

try {
    console.log(a);
    const a = 10;
} catch (err) {
    console.log(`${err}`);
}
console.log('FINISH');

try {
    const response = 404;
    if(response === 404) {
        throw new Error('Page is not found')
    }
} catch (err) {
    console.log(`${err}`);
} finally {
    console.log('I run everytime')
}

console.log('FINISH');