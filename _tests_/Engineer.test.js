const Engineer = require("../lib/Engineer")

test("creates engineer object", () => {
    let Billy = {
        name: "Tammy",
        id: 45,
        email: "ethan@gmail.com",
        github: "gitgit"
    }
    const employee = new Engineer(Billy)
    
    expect(employee.getName()).toBe("Tammy")
    expect(employee.getId()).toEqual(45)
    expect(employee.getEmail()).toBe("ethan@gmail.com")
    expect(employee.getGithub()).toBe("gitgit")
    
})