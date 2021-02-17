const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(property) {
        super(property)

        this.github = property.github
    }
    
    getGithub() {
        return this.github
    }
}

module.exports = Engineer