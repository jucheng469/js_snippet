class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        return `hi, my name is ${this.name}`;
    }

    sayAge() {
        return `I'm ${this.age} years old.`;
    }

    getJob() {
        return 'my job is a person';
    }
};

class Teacher extends Person {
    constructor(...args) {
        super(...args);
    }

    getJob() {
        return 'my job is a teacher';
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name, age);
    }

    getJob() {
        return 'my job is a student';
    }
}

// test
const persona = new Student('deinal', 10);

const teacher = new Teacher('John', 26);
const job = teacher.getJob();

const student = new Student('alice', 18);
Object.getOwnPropertyNames(student);

delete student.getJob;
Object.getOwnPropertyNames(student);

// 把原型上的属性删除了，实例对象都不能访问该属性了
delete Person.prototype.sayAge;
Object.getOwnPropertyNames(person);

