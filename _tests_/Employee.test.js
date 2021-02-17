const Employee = require("../lib/Employee.js")
const mock = require("../lib/__mocks__/Employee")
jest.mock('../lib/Employee.js')

test("creates employee object", () => {
    const employee = new Employee()
    
    expect(employee.name).toBe("Tammy")
    expect(employee.id).toBe(45)
    expect(employee.email).toBe("ethan@gmail.com")
})

