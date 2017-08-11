// 闭包

// 每次打印的都是全局变量i
function wrong () {
    for (var i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
}

// es6 i是局部变量
function esRight() {
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
}

// 闭包，屏蔽全局变量i
function closureRight() {
    for (var i = 0; i < 5; i++) {
        function closure(i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }
        closure(i);
    }
}

closureRight();
