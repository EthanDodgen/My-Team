const inquirer = require('inquirer')
const Employee = require("./lib/Employee.js")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")

const promptManager = () => {
    return inquirer.prompt([
        {
         type: "input",
         name: "name",
         message: "Enter Manager name."
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
        },

        {
         type: "input",
         name: "office",
         message: "Enter office number."
        }
    ])
}

const promptMenu = () => {
    return inquirer.prompt([
        {
         type: "checkbox",
         name: "menu",
         choices: ["Add Engineer.", "Add Intern.", "Finish building team."]
        }
    ])
}

promptManager()
    .then( answer => {
        const employee = new Manager(answer)
        console.table(employee)
    })
    .then(promptMenu)
    
module.exports = promptManager






    

