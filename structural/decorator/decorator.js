class Computer {
    constructor() {
        this.price = 1000
        this.model = 'Computer'
    }

    getPrice() {
        return this.price
    }

    getDescripton() {
        return this.model
    }
}

class PC extends Computer {
    constructor(price, model) {
        super()
        this.price = price
        this.model = model
    }
}

class Monitor {
    constructor(computer) {
        this.computer = computer
    }

    getPrice() {
        return this.computer.getPrice() + 1000
    }

    getDescripton() {
        return this.computer.getDescripton() + ' + Monitor'
    }
}

class Processor {
    constructor(computer) {
        this.computer = computer
    }

    getPrice() {
        return this.computer.getPrice() + 1333
    }

    getDescripton() {
        return this.computer.getDescripton() + ' + processor'
    }
}

let pc = new PC(100, 'lenovo')

console.log(pc)
pc = new Monitor(pc)
console.log(pc)
pc = new Processor(pc)
console.log(pc)
