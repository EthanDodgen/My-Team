const Employee = require("./Employee")

class Manager extends Employee {
    constructor(property) {
        super(property)
    }
    
    getRole() {
        return Manager
    }
}

module.exports = Manager