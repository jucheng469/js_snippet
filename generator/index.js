function myAjax() {
    return fetch('http://echo.113.im?data=1');
}

function *myLogic() {
    var serverData = yield myAjax();

    console.log('logic after myAjax');
    console.log('status of server: ' + serverData.status);
}


var myLogic = myLogic();
var promise = myLogic.next().value;

promise.then(function(serverData) {
    myLogic.next(serverData)
});
