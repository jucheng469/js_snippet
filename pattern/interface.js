class Interface {
    constructor(name, methods) {
        if (arguments.length !== 2) {
            throw new Error(`interface constructor arguments's length should be 2`);
        }

        this.name = name;
        this.methods = [];

        for (let i = 0; i < methods.length; i++) {
            if (typeof methods[i] !== 'string') {
                throw new Error('interface method should be string');
            }
            this.methods.push(methods[i]);
        }
    }

    // 保证实现某些方法
    ensureImplements(object) {
        if (arguments.length < 2) {
            throw new Error(`interface ensureImplements arguments's length should be at least 2`);
        }
        for (let i = 1; i < arguments.length; i++) {
            let oneInterface = arguments[i];

            for (let j = 0; j < oneInterface.methods.length; j++) {
                let method = oneInterface.methods[j];
                if (!object[method] || typeof object[method] !== 'function') {
                    throw new Error(`${method} not implemented in ${object}`);
                }
            }
        }
    }

};
