const fse = require('fs-extra');

fse.ensureDir('FirstFolder', () => {
    fse.ensureFile('FirstFolder/newFile.txt', () => {
        fse.ensureDir('SecondFolder', () => {
            fse.move('FirstFolder/newFile.txt', 'SecondFolder/newFile.txt', () => {
                fse.ensureDir('ThirdFolder', () => {
                    fse.copy('SecondFolder/newFile.txt', 'ThirdFolder/newFile.txt', () =>{
                        fse.remove('SecondFolder/newFile.txt')
                        fse.remove('ThirdFolder/newFile.txt', () => {
                            fse.remove('FirstFolder')
                            fse.remove('SecondFolder')
                            fse.remove('ThirdFolder')
                        })
                    });
                });
            });
        });
    });
});

new Promise((resolve, reject) => {
    resolve()
})
    .then(() => {
        return fse.ensureDir('FirstFolder')
    })
    .then(() => {
        return fse.ensureFile('FirstFolder/newFile.txt')
    })
    .then(() => {
        return fse.ensureDir('SecondFolder')
    })
    .then(() => {
        return fse.move('FirstFolder/newFile.txt', 'SecondFolder/newFile.txt')
    })
    .then(() => {
        return fse.ensureDir('ThirdFolder')
    })
    .then(() => {
        return fse.copy('SecondFolder/newFile.txt', 'ThirdFolder/newFile.txt')
    })
    .then(() => {
        fse.remove('SecondFolder/newFile.txt')
        return fse.remove('ThirdFolder/newFile.txt')
    })
    .then(() => {
        fse.remove('FirstFolder')
        fse.remove('SecondFolder')
        return fse.remove('ThirdFolder')
    })


async function asynch() {
    await fse.ensureDir('FirstFolder')
    await fse.ensureFile('FirstFolder/newFile.txt')
    await fse.ensureDir('SecondFolder')
    await fse.move('FirstFolder/newFile.txt', 'SecondFolder/newFile.txt')
    await fse.ensureDir('ThirdFolder')
    await fse.copy('SecondFolder/newFile.txt', 'ThirdFolder/newFile.txt')
    await fse.remove('SecondFolder/newFile.txt')
    await fse.remove('ThirdFolder/newFile.txt')
    await fse.remove('FirstFolder')
    await fse.remove('SecondFolder')
    await fse.remove('ThirdFolder')
}

asynch()



