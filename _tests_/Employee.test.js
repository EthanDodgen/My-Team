const Employee = require("../lib/Employee")

test("creates employee object", () => {
    const employee = new Employee("Manager")
    
    expect(employee.name).toBe("Manager")
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toBe("rad")
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