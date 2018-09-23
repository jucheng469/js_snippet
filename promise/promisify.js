/**
 * 异步函数 => promise
 * @param {Function} func 异步函数
 */
function promisify(func = () => {}) {
    if (typeof func !== 'function') throw new TypeError('Expected function');

    return (...args) => new Promise((resolve, reject) => {
        func(...args, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

// test
const fs = require('fs');
const path = require('path');
const promiseForReadFile = promisify(fs.readFile);

promiseForReadFile(path.resolve(__dirname, '../fs/file'), 'utf8')
    .then(data => {
        console.log('==========');
        console.log(data);
        console.log('==========');
    })
    .catch(err => {console.error(err)});
