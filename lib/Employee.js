class Employee {
    constructor(answer) {
        this.name = answer.name
        this.id = answer.id
        this.email = answer.email
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }
}

module.exports = Employee