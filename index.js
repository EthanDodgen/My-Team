const inquirer = require('inquirer')
const Employee = require("./lib/Employee.js")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")
const generatePage = require("./src/template.js")
const fs = require('fs')

let managerInfo = null
let internInfo = null
let engineerInfo = null

const promptManager = () => {
    return inquirer.prompt([{
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
    return inquirer.prompt([{
        type: "list",
        name: "menu",
        choices: ["Add Engineer", "Add Intern", "Finish building team"]
    }])
}

const promptEngineer = () => {
    return inquirer.prompt([{
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
    return inquirer.prompt([{
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

    .then(answer => {
        const employee = new Manager(answer)
        managerInfo = employee
        console.table(employee)
        console.log(employee.name)
    })
    .then(promptMenu)
    .then(answer => {
        if (answer.menu === "Add Engineer") {
            promptEngineer()
                .then(answer => {
                    const engineer = new Engineer(answer)
                    engineerInfo = engineer
                    console.table(engineer)
                })
                .then(promptMenu)
                .then(answer => {
                    if (answer.menu === "Add Intern") {
                        promptIntern()
                            .then(answer => {
                                const intern = new Intern(answer)
                                internInfo = intern
                                console.table(intern)
                            })
                            .then(promptMenu)
                            .then(answer => {
                                if (answer.menu === "Finish building team") {
                                    generatePage(managerInfo, internInfo, engineerInfo)
                                    console.log(generatePage(managerInfo, internInfo, engineerInfo))
                                    fs.writeFile('index.html', generatePage(managerInfo, internInfo, engineerInfo), err => {
                                        if (err) throw err;
                                    })
                                }
                            })
                    }
                })
        } else {
            if (answer.menu === "Add Intern") {
                promptIntern()
                    .then(answer => {
                        const intern = new Intern(answer)
                        internInfo = intern
                        console.table(intern)
                    })
                    .then(promptMenu)
                    .then(answer => {
                        if (answer.menu === "Add Engineer") {
                            promptEngineer()
                                .then(answer => {
                                    const engineer = new Engineer(answer)
                                    engineerInfo = engineer
                                    console.table(engineer)
                                })

                                .then(promptMenu)
                                .then(answer => {
                                    if (answer.menu === "Finish building team") {
                                        generatePage(managerInfo, internInfo, engineerInfo)
                                        console.log(generatePage(managerInfo, internInfo, engineerInfo))
                                        fs.writeFile('index.html', generatePage(managerInfo, internInfo, engineerInfo), err => {
                                            if (err) throw err;
                                        })
                                    }
                                })

                        }
                    })
            } else {
                if (answer.menu === "Finish building team") {
                    generatePage(managerInfo, internInfo, engineerInfo)
                    console.log(generatePage(managerInfo, internInfo, engineerInfo))
                    fs.writeFile('index.html', generatePage(managerInfo, internInfo, engineerInfo), err => {
                        if (err) throw err;
                    })
                }
            }

        }

    })

// fs.writeFile('index.html', generatePage(managerInfo, internInfo, engineerInfo), err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!')
// })