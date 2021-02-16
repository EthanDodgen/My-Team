const Employee = require("../lib/Employee.js")

const index = require("../index.js")

test("creates employee object", () => {
    const employee = new Employee(answer)
    
    expect(employee.name).toBe("")
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toBe("")
})

test("gets players name", () => {
    expect(employee.getName()).toHaveProperty("")
})

test("gets players Id", () => {
    expect(employee.getId()).toHaveProperty("")
})

test("gets players Email", () => {
    expect(employee.getEmail()).toHaveProperty("")
})