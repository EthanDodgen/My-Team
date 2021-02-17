const Employee = require("../lib/Employee.js")

test("creates employee object", () => {
    let property = {
        name: "Tammy",
        id: 45,
        email: "ethan@gmail.com"
    }

    const employee = new Employee(property)
    
    expect(employee.name).toBe("Tammy")
    expect(employee.id).toBe(45)
    expect(employee.email).toBe("ethan@gmail.com")
})


test("gets name through method", () => {
    let property = {
        name: "Tammy",
        id: 45,
        email: "ethan@gmail.com",
    }

    const employee = new Employee(property)

    expect(employee.getName()).toBe("Tammy")
})

test("gets id through method", () => {
    let property = {
        name: "Tammy",
        id: 45,
        email: "ethan@gmail.com",
    }

    const employee = new Employee(property)

    expect(employee.getId()).toBe(45)
})

test("gets email through method", () => {
    let property = {
        name: "Tammy",
        id: 45,
        email: "ethan@gmail.com",
    }

    const employee = new Employee(property)

    expect(employee.getEmail()).toBe("ethan@gmail.com")
})

test("gets role through method", () => {
    let property = {
        name: "Tammy",
        id: 45,
        email: "ethan@gmail.com",
    }

    const employee = new Employee(property)

    expect(employee.getRole()).toBe(Employee)
})


