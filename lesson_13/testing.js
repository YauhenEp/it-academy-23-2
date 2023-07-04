async function greet(greet, name, surname, add = 'How are you') {
    return `${greet}! ${name} ${surname}! ${add}?`
}

async function sleep(milliseconds) {
    return new Promise((waiter) => {
        setTimeout(waiter, milliseconds);
    });
}

module.exports = {greet, sleep}