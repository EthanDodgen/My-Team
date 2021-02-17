class Employee {
    constructor(data) {
        this.name = data.name
        this.id = data.id
        this.email = data.email
        this.office = data.office
        this.school = data.school
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

    getRole() {
        return Employee
    }
}

module.exports = Employee