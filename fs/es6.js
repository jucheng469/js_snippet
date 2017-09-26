class A {
    constructor() {
        this.state = '123456';
    }

    test() {
        console.log(this);
    }
};
var a = new A();
a.test();
