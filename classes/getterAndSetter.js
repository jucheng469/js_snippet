class Person {
    constructor(name = 'person') {
        this._name = name;
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    sayName() {
        return `My name is: ${this.name}`;
    }
}

// test
const john = new Person('john');

john.sayName();
john.name = 'jon';
john.sayName();

