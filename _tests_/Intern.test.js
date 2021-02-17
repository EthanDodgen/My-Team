const Intern = require("../lib/Intern")

test("creates manager object", () => {
    let property = {
        name: "Tammy",
        id: 45,
        email: "ethan@gmail.com",
        school: "Vanderbilt"
    }
    const employee = new Intern(property)
    
    expect(employee.getName()).toBe("Tammy")
    expect(employee.getId()).toEqual(45)
    expect(employee.getEmail()).toBe("ethan@gmail.com")
})

test("gets school through method", () => {
    let property = {
        name: "Tammy",
        id: 45,
        email: "ethan@gmail.com",
        school: "Vanderbilt"
    }

    const employee = new Intern(property)

    expect(employee.getRole()).toBe(Intern)
})

test("gets role through method", () => {
    let property = {
        name: "Tammy",
        id: 45,
        email: "ethan@gmail.com",
        school: "Vanderbilt"
    }

    const employee = new Intern(property)

    expect(employee.getRole()).toBe(Intern)
})