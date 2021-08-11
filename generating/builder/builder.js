class Robot {
    constructor() {}
}

class RobotBuilder {
    constructor() {
        this.robot = new Robot()
        return this
    }

    addLeg(leg) {
        this.robot.leg = leg
        return this
    }

    addHand(hand) {
        this.robot.hand = hand
        return this
    }

    addSoul(soul) {
        this.robot.sout = soul
        return this
    }

    build() {
        return this.robot
    }
}

const anatoli = new RobotBuilder()
                        .addLeg('Leg')
                        .addHand('Hand')
                        .addSoul('Soul')
                        .build()

console.log(anatoli)