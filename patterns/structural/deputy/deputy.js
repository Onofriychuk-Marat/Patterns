class Human {
    constructor(age) {
        this.age = age
    }

    walk() {
        console.log('Human walk')
    }
}

class ProxyHuman {
    constructor(human) {
        this.human = human
    }

    walk() {
        if (this.human.age > 1) {
            this.human.walk()
        } else {
            console.log('Human is too small to walk')
        }
    }
}

const human1 = new ProxyHuman(new Human(24))
const human2 = new ProxyHuman(new Human(0))
human1.walk()
human2.walk()
