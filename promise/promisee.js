'use strict';

const PENDING = Symbol();
const FULFILLED = Symbol();
const REJECTED = Symbol();

/**
 * 实现
 */
function Promisee(fn) {
    if (typeof fn != 'function') {
        throw new Error('resolver should be a function!');
    }

    let state = PENDING;
    let value = null;
    let handler = [];

    function fulfill(result) {
        state = FULFILLED;
        value = result;
        handler.forEach(next);
        handler = null;
    }

    function reject(err) {
        state = REJECTED;
        value = err;
        handler.forEach(next);
        handler = null;
    }

    function resolve(result) {
        try {
            let then = typeof result.then == 'function' ? result.then : null;
            if (then) {
                then.bind(result)(resolve, reject);
                return;
            }
            fulfill(result);
        } catch (err) {
            reject(err);
        }
    }

    function next({ onFulfill, onReject }) {
        switch (state) {
            case FULFILLED:
                onFulfill && onFulfill(value);
                break;
            case REJECTED:
                onReject && onReject(value);
                break;
            case PENDING:
                handler.push({ onFulfill, onReject });
        }
    }

    this.then = function (onFulfill, onReject) {
        return new Promisee((resolve, reject) => {
            next({
                onFulfill: (val) => {
                    try {
                        resolve(onFulfill(val));
                    } catch (err) {

                    }
                },
                onReject: (err) => {
                    reject(onReject(err));
                }
            });
        });
    }

    fn(resolve, reject);
}

/**
 * 使用
*/
var testPromise = _ => {
    return new Promisee((resolve, reject) => {
        setTimeout(_ => {
            reject('hello world');
        }, 2000);
    });
};

testPromise().then(str => {
    console.log('res: ' + str);
}, str => {
    console.log('rej: ' + str);
});

// export default Promisee;
