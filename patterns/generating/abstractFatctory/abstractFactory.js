// ABSTRACT
class AbstractComputerFactory {
    createStationaryComputer(product) {
        return new AbsctractStationaryComputer(product)
    }

    createNotebookComputer(product) {
        return new AbstractNotebookComputer(product)
    }
}

class AbstractStationaryComputer {
    constructor(model) {
        this.type = 'stationary'
        this.model = model
    }
}

class AbstractNotebookComputer {
    constructor(model) {
        this.type = 'notebook'
        this.model = model
    }
}

// REALIZATION
class AppleFactory extends AbstractComputerFactory {
    createStationaryComputer(model) {
        return new Imac(model)
    }

    createNotebookComputer(model) {
        return new Macbook(model)
    }
}

class Imac extends AbstractStationaryComputer {
    contructor(model) {
        this.super(model)
    }
}

class Macbook extends AbstractNotebookComputer {
    contructor(model) {
        this.super(model)
    }
}

const factory = new AppleFactory()

const imac2015 = factory.createStationaryComputer('2015')
const imac2020 = factory.createStationaryComputer('2020')

const macbook2017 = factory.createNotebookComputer('2017')
const macbook2020 = factory.createNotebookComputer('2020')

console.log(imac2015)
console.log(imac2020)

console.log(macbook2017)
console.log(macbook2020)
