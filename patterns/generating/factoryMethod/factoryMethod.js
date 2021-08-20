class BMW {
    constructor(version, price) {
        this.version = version
        this.price = price
    }
}

class FactoryBMW {
    create(type) {
        if (type === 'x5') {
            return new BMW(5, 100000)
        }
        if (type === 'x6') {
            return new BMW(6, 50000)
        }
    }
}

const factory = new FactoryBMW()
const x5 = factory.create('x5')
const x6 = factory.create('x6')

console.log(x5)
console.log(x6)