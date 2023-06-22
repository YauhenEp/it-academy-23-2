function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getResult (number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.pow(number , 2));
        }, 3000)
    })
}

new Promise((resolve, reject) => {
    const number = getRandomNumber(1, 10);
    resolve(number);
})
    .then(number => getResult (number))
    .then(number => getResult (number))
    .then(number => console.log(number))
    .catch(err => console.log(err));