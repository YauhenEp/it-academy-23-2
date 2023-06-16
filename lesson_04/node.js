console.log(5 + 6);
console.log(5 + "6");

const fse = require('fs-extra');

// fse.ensureDirSync('newFolder')
const obj = {
    name: 'Yauhen',
    getName: function () {
        console.log(this.name)
    }
}
obj.getName()

const obj1 = {
    name: 'Yauhen',
    getName:  () => {
        console.log(this.name)
    }
}
obj1.getName()