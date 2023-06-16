// Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды, после
// которой промис должен зарезолвится (то есть выполнится успешно).
new Promise((res, rej) => {
    setTimeout(() => {
        res('Success')
    }, 3000)
})
    .then((data) => {
        console.log(data)
    })

//Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды, после которой промис
// должен зареджектится (то есть выполнится с ошибкой).
new Promise((res, rej) => {
    setTimeout(() => {
        rej('Error')
    }, 3000)
})
    .catch((err) => {
        console.log(err)
    })
// Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так, чтобы
// сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
// Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6
// до 10.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

new Promise((res, rej) => {
    const number = getRandomNumber(1, 10)
    setTimeout(() => {
        if(number > 0 && number < 6) {
            res(`Success --- ${number}`)
        } else {
            rej(`Error --- ${number}`)
        }
    }, number * 1000)
})
    .then((data) =>  console.log(data))
    .catch(err => console.log(err))

// Сделайте промис, который через 5 секунд случайным образом выполнится или с успехом,
// или с ошибкой. Примените изученный метод catch для отлавливания ошибок.


// Сделайте цепочку из трех промисов. Пусть первый промис возвращает число. Сделайте так,
// чтобы каждый последующий промис через 3 секунды возводил в квадрат результат предыдущего
// промиса. После окончания манипуляций выведите число консоль лог на экран.
new Promise((res, rej) => {
    const number = getRandomNumber(1, 10);
    res(number);
})
    .then(number => {
        setTimeout(() => {
            return Math.pow(number , 2);
        }, 3000)
    })
    .then((number => {
        setTimeout(() => {
            return Math.pow(number , 2);
        }, 3000)
    }))
    .then(number => console.log(number))
    .catch(err => console.log(err))


// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой
// от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью
// Promise.all получите массив результатов, найдите его сумму, выведите на экран.

function returnPromise() {
    return new Promise((res) => {
        const delay = getRandomNumber(1, 5);
        setTimeout(() => {
            res(delay);
        }, delay * 1000)
    })
}

const promOne = returnPromise()
const promTwo = returnPromise()
const promThree = returnPromise()

Promise.all([promOne, promTwo, promThree])
    .then((array) => {
        return array.reduce((a, b) => a + b, 0)
    })
    .then(number => {
        console.log(number)
    })