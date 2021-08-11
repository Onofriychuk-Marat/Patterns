class Detail {
    setPrice(price) {
        this.price = price
    }

    setName(name) {
        this.name = name
    }

    getPrice() {
        return this.price || 0
    }

    getName() {
        return this.name
    }

}

class Monitor extends Detail {
    constructor() {
        super()
        this.setName('Monitor')
        this.setPrice(100)
    }
}

class Processor extends Detail {
    constructor() {
        super()
        this.setName('Processor')
        this.setPrice(230)
    }
}

class Mouse extends Detail {
    constructor() {
        super()
        this.setName('Mouse')
        this.setPrice(555)
    }
}

class Composite extends Detail {
    constructor() {
        super()
        this.details = []
    }

    add(detail) {
        this.details.push(detail)
    }

    getPrice() {
        return this.details.map(detail => detail.getPrice()).reduce((a, b) => a + b)
    }
}

class PC extends Composite {
    constructor(name) {
        super()
        this.name = name
    }
}

const pc1 = new PC('pc1')

pc1.add(new Monitor())
pc1.add(new Processor())
pc1.add(new Mouse())

console.log(pc1.getPrice())
