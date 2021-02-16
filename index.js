const inquirer = require('inquirer')

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
        console.table(answer)
    })

module.export = promptQuestions