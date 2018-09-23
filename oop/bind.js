const name = 'person';

function Person(name) {
    this.name = name;
}

// Person.prototype.constructor = Person;

Person.prototype = {
    sayName: function () {
        return this.name;
    }
};

// test
const person = new Person('john');

const func = person.sayName;
console.log(func === person.sayName);
console.log(func());

// console.log(person.sayName1());

class Person1 {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        return this.name;
    }
}