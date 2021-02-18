const inquirer = require('inquirer')
const Employee = require("./lib/Employee.js")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")
const generatePage = require("./src/template.js")

const askData = []





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
         type: "list",
         name: "menu",
         choices: ["Add Engineer", "Add Intern", "Finish building team"]
        }
    ])
}

const promptEngineer = () => {
    return inquirer.prompt([
        {
         type: "input",
         name: "name",
         message: "Enter Engineer name."
        },

        {
         type: "input",
         name: "id",
         message: "Enter Engineer ID."
        },

        {
         type: "input",
         name: "email",
         message: "Enter Engineer Email."
        },

        {
         type: "input",
         name: "github",
         message: "Enter Github link."
        }
    ])
}

const promptIntern = () => {
    return inquirer.prompt([
        {
         type: "input",
         name: "name",
         message: "Enter intern name."
        },

        {
         type: "input",
         name: "id",
         message: "Enter intern ID."
        },

        {
         type: "input",
         name: "email",
         message: "Enter intern Email."
        },

        {
         type: "input",
         name: "school",
         message: "Enter school attended."
        }
    ])
}

promptManager()
    
    .then( answer => {
        const employee = new Manager(answer)
        console.table(employee)
        console.log(employee.name)
    })
    .then(promptMenu)
    .then(answer => {
        if (answer.menu === "Add Engineer" ) {
            promptEngineer()
                .then(answer => {
                    const engineer = new Engineer(answer)
                    console.table(engineer)
                })
                .then(promptMenu)
                .then(answer => {
                    if (answer.menu === "Add Intern" ) {
                        promptIntern()
                            .then(answer => {
                                const intern = new Intern(answer)
                                console.table(intern)
                            })
                    }
                })
        }
        else { 
            if (answer.menu === "Add Intern" ) {
            promptIntern()
                .then(answer => {
                    const intern = new Intern(answer)
                    console.table(intern)
                })
                .then(promptMenu)
                .then(answer => {
                    if (answer.menu === "Add Engineer" ) {
                        promptEngineer()
                            .then(answer => {
                                const engineer = new Engineer(answer)
                                console.table(engineer)
                            })
                    }
                })
            }
            else { 
            if (answer.menu === "Finish building team" ) {
            generatePage(employee, intern, engineer)
            console.log(generatePage(employee, intern, engineer))
            }   
            }     
        
        }
        
    })
    
    
    

    
