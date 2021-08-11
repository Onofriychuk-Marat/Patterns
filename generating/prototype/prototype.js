class Prototype {
    constructor(value1, value2, value3) {
        this.value1 = value1
        this.value2 = value2
        this.value3 = value3
    }

    clone() {
        return new Prototype(this.value1, this.value2, this.value3)
    }
}

const prototype = new Prototype(1, 2, 3)
const prototypeClone = prototype.clone()

console.log(prototype)
console.log(prototypeClone)