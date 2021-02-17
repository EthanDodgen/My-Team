const Employee = require("./Employee")

class Intern extends Employee {
    constructor(property) {
        super(property)

        this.github = property.github
        this.school = property.school
    }

    getSchool() {
        return this.school
    }
    
    getRole() {
        return Intern
    }
}

module.exports = Intern