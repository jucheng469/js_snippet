function myAjax() {
    return fetch('http://echo.113.im?data=1');
}

function genRunner(genFunc) {
    return new Promise(function (res, rej) {
        var gen = genFunc();

        var innerRun = function (val) {
            var val = gen.next(val);

            if (val.done) {
                res(val.value);
                return;
            }
            if (val.value) {
                val.value.then(function (data) {
                    innerRun(data);
                });
            }
            else {
                innerRun(val.value);
            }
        }

        innerRun();
    });
}

genRunner(function *() {
    var serverData = yield myAjax();
    console.log('after ajax');
    console.log('server status: ' + serverData.status);
}).then((message) => {
    console.log(message);
})
