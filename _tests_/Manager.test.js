const Manager = require("../lib/Manager")

test("creates manager object", () => {
    let property = {
        name: "Tammy",
        id: 45,
        email: "ethan@gmail.com",
        office: 2
    }
    const employee = new Manager(property)
    
    expect(employee.getName()).toBe("Tammy")
    expect(employee.getId()).toEqual(45)
    expect(employee.getEmail()).toBe("ethan@gmail.com")
    expect(employee)
})

test("gets role through method", () => {
    let property = {
        name: "Tammy",
        id: 45,
        email: "ethan@gmail.com",
        office: 2
    }

    const employee = new Manager(property)

    expect(employee.getRole()).toBe(Manager)
})