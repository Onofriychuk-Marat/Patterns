class LearnProgramming {

    constructor() {
        this.skills = []
    }

    learnMath() {
        this.skills.push('math')
        console.log('Learn math')
    }

    learnAlgoritms() {
        this.skills.push('algoritm')
        console.log('Learn algoritm')
    }

    learnPatterns() {
        this.skills.push('patterns')
        console.log('Learn patterns')
    }

    learnDataStructures() {
        this.skills.push('data structures')
        console.log('Learn data structures')
    }

    learnNetwork() {
        this.skills.push('network')
        console.log('Learn network')
    }

    learnCleanCode() {
        this.skills.push('clean code')
        console.log('Learn clean code')
    }

    learnLinux() {
        this.skills.push('linux')
        console.log('Learn linux')
    }

    learnDevops() {
        this.skills.push('devops')
        console.log('Learn devops')
    }
}

class FacadeLearnProgramming {
    constructor(course) {
        this.course = course
    }

    makeCourse() {
        this.course.learnMath()
        this.course.learnAlgoritms()
        this.course.learnPatterns()
        this.course.learnDataStructures()
        this.course.learnNetwork()
        this.course.learnCleanCode()
        this.course.learnLinux()
        this.course.learnDevops()
        return this.course
    }
}

const facade = new FacadeLearnProgramming(new LearnProgramming())
const course = facade.makeCourse()

console.log(course)