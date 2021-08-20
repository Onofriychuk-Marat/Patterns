class Singleton {
    constructor() {
        if (Singleton.instance !== undefined) {
            return Singleton.instance
        }
        this.count = 0
        Singleton.instance = this
        return this
    }

    getCount() {
        return this.count
    }

    incrementCount() {
        this.count++
    }
}

const s1 = new Singleton()
const s2 = new Singleton()

s1.incrementCount()
s1.incrementCount()
s2.incrementCount()
s2.incrementCount()

console.log(s1.getCount())
console.log(s2.getCount())