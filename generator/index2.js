function myAjax() {
    return fetch('http://echo.113.im?data=1');
}

function *myLogic() {
    var serverData = yield myAjax();

    console.log('logic after myAjax');
    console.log('status of server: ' + serverData.status);
}


var myLogic = myLogic();

function genRunner(val) {
    var yieldValue = myLogic.next(val);
    var promise = yieldValue.value;

    if (promise) {
        promise.then((serverData) => {
            genRunner(serverData);
        });
    }
}
