let num: number = 12;
// num = 'string';
let str: string = 'str';
let bool: boolean = true;
let nu: null = null;
let undef: undefined;

let obj: object = {

}

let arr: string[] = ['str'];
let arr1: Array<number> = [12, 15, 16, 16];
let arr2: [number, object, string] = [12, {}, 'str'];
let a: any = 12;
a = 'str';
a = true;

let arr3: any[] = [12, 'str', true, undefined]

function sayHello(say: string | number, times: number, add?: string): void {
    for(let i = 0; i < times; i++) {
        console.log(say)
    }
}

sayHello('Hello', 12);

let numStr: number | string = '10';
numStr = 'str';

async function greed(say: string, times: number): Promise<number>  {
    for(let i = 0; i < times; i++) {
        console.log(say)
    }
    return 10
}

let abs: number = 123;
console.log(abs)
console.log('Hi it academy!')

console.log('Hi it academy! !!!!!!!!!!!!!!!!')
console.log('Hi it academy! 123344325436')

enum Color {
    blue = 'blue',
    red = 'red',
    white = 'white'
}

console.log(Color.red)