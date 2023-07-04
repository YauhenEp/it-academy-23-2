function sayHi(say: string, greet: string, buy?: string) {
    return `${greet}! ${say}! ${buy}!`
}

console.log(sayHi('Hi', 'How are you'))

function sayHi1(say: string, greet: string, buy: string = 'Chao') {
    return `${greet}! ${say}! ${buy}!`
}

console.log(sayHi1('Hi', 'How are you'))


function addOverload(a: string, b: string): string;

function addOverload(a: number, b: number): number;

function addOverload(a: any, b: any): any {
    return a + b;
}

addOverload(1, 2);
addOverload('str', 'asdf');

function returnValue <T>(arg: T): T {
    console.log(typeof arg)
    return arg;
}
returnValue(200)
returnValue("hello")