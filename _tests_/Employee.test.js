const Employee = require("../lib/Employee.js")
//const index = require("./index.js")

test("creates employee object", () => {
    let Billy = {
        name: "Tammy",
        id: 45,
        email: "ethan@gmail.com"
    }
    const employee = new Employee(Billy)
    
    expect(employee.getName()).toBe("Tammy")
    expect(employee.getId()).toEqual(45)
    expect(employee.getEmail()).toBe("ethan@gmail.com")
})

test("gets players name", () => {
    let answer = {
        name: "Tammy",
        id: "45",
        email: "ethan@gmail.com"
    }
    const employee = new Employee(answer)

    expect(employee.getName()).toHaveProperty("Tammy")
})

test("gets players Id", () => {
    let answer = {
        name: "",
        id: "",
        email: ""
    }
    const employee = new Employee(answer)

    expect(employee.getId()).toHaveProperty("")
})

test("gets players Email", () => {
    let answer = {
        name: "",
        id: "",
        email: ""
    }
    const employee = new Employee(answer)

    expect(employee.getEmail()).toHaveProperty("")
})