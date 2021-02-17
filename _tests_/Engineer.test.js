const Engineer = require("../lib/Engineer")

test("creates engineer object", () => {
    let property = {
        name: "Tammy",
        id: 45,
        email: "ethan@gmail.com",
        github: "gitgit"
    }
    const employee = new Engineer(property)
    
    expect(employee.getName()).toBe("Tammy")
    expect(employee.getId()).toEqual(45)
    expect(employee.getEmail()).toBe("ethan@gmail.com")
    expect(employee.getGithub()).toBe("gitgit")
})

test("gets github through method", () => {
    let property = {
        name: "Tammy",
        id: 45,
        email: "ethan@gmail.com",
        github: "gitgit"
    }

    const employee = new Engineer(property)

    expect(employee.getGithub()).toBe("gitgit")
})