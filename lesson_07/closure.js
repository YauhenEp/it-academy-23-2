function counter() {
    let count = 0;
    return function() {
        return count++;
    }
}

console.log(counter())
console.log(counter())
let c = counter();
console.log(c());
console.log(c());
let count1 = counter();
console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());
console.log(c());
console.log(c());


function fibonachi(number) {
    return number <= 1 ? number : fibonachi(number - 1) + fibonachi(number - 2)
}

console.log(fibonachi(5))