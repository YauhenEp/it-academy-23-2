// console.log('Starts')
//
// setTimeout(() => {
//     console.log('timeout')
// }, 0)
//
// Promise.resolve()
// .then(() => {
//     console.log('promise1')
// })
// .then(() => {
//     console.log('promise2')
// })
//
// console.log('end')

// const prom = new Promise((res, rej) => {
//     let response = 300;
//     if(response === 200) {
//         return res('Success')
//     } else {
//         return rej('Error')
//     }
// })
//     .then((abc) => {
//         console.log(abc)
//         return abc
//     })
//     .then(data => {
//         data += ' add html page';
//         // throw new Error('Error which we generate')
//         return data;
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('CATCH --- ', err);
//         console.log(err);
//         return err
//     })
//     .finally(() => {
//         console.log('Finally  block');
//     })


// Promise.resolve('Everything is done')
//     .then((data) => {
//         console.log(data)
//         throw new Error('New Error')
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//
// Promise.reject('Error was generated')
//     .catch((err) => {
//         console.log(err)
//     })

const first = Promise.resolve(10)
const second = Promise.resolve(20)
const third = Promise.resolve(30)
const forth = Promise.reject('Error')
    .catch((err) => {
        return err
    })
Promise.all([first, second, third, Promise.reject('Error')])
.then((data) => {
    console.log(data)
    return data.reduce((acc, cur) => acc + cur);
})
.then((number) => {
    console.log(number)
})
.catch((err) => {
    console.log(err)
})

function getPromise(state, timeout) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if(state === 'resolve') {
                res(timeout)
            }
            rej(timeout)
        }, timeout)
    })
}

const one = getPromise('resolve', 2000)
const two = getPromise('reject', 1000)
const three = getPromise('resolve', 1500)

// Promise.race([one, two, three])
// .then((data) => {
//     console.log(data)
// })
// .catch(err => {
//     console.log(err)
// })

// Promise.any([one, two, three])
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => console.log(err))

Promise.allSettled([one, two, three])
.then(data => console.log(data))