class Engine2 {
    simpleInterface() {
        console.log('Engine 2.0 tr-tr-tr')
    }
}

class EngineV8 {
    complecatedInterface() {
        console.log('Engine v8 wroom - wroom!')
    }
}

class EngineV8Adapter {
    constructor(engine) {
        this.engine = engine
    }

    simpleInterface() {
        this.engine.complecatedInterface()
    }
}

class Auto {
    startEngine(engine) {
        engine.simpleInterface()
    }
}

let myCar = new Auto()
const oldEngine = new Engine2()

myCar.startEngine(oldEngine)

myCar = new Auto()
const engineAdapter = new EngineV8Adapter(new EngineV8Adapter)

myCar.startEngine(engineAdapter)

myCar = new Auto()
const engineAdapter = new EngineV8()

myCar.startEngine(engineAdapter) // Error
