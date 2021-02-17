const inquirer = require('inquirer')
const Employee = require("./lib/Employee.js")

const promptQuestions = () => {
    return inquirer.prompt([
        {
         type: "input",
         name: "name",
         message: "Enter employee name."
        },

        {
         type: "input",
         name: "id",
         message: "Enter employee ID."
        },

        {
         type: "input",
         name: "email",
         message: "Enter employee Email."
        }
    ])
}
promptQuestions()
    .then( answer => {
        const employee = new Employee(answer)
        console.table(employee.getName())
       
    })

module.exports = promptQuestions





    

