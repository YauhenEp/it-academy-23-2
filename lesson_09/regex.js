const str = 'Hello World! I love you! Love! Love! Love!';

let newStr = str.replace('love', 'hate')
console.log(newStr)

let newStr1 = str.replace(/love|Love/g, 'hate')
console.log(newStr1)

let newStr2 = str.replace(/.*/, 'DDD')
console.log(newStr2)