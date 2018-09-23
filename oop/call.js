const isBrowser = typeof window !== 'undefined';

/**
 * 
 * @param {Object} context 上下文
 * @param {*} args 
 */
Function.prototype.call1 = function(context = isBrowser ? window : global, ...args) {
    // 首先要获取调用call的函数，用this可以获取
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;

    return result;
}

Function.prototype.call2 = function (context) {
    var context = Object(context) || window;
    context.fn = this;

    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }

    var result = eval('context.fn(' + args +')');

    delete context.fn
    return result;
}

// test
var foo = {
    value: 1,
    name: 'john',
    age: 23,
};

function bar(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
}

bar.call2(foo, 'allen', 34);