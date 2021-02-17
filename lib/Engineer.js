const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(answer) {
        super(answer)

        this.github = answer.github
    }
}

module.exports = Engineer