const promptQuestions = () => {
    return inquirer.prompt([
        {
         type: "input",
         name: "employee name",
         message: "Enter employee name."
        }
    ])
}
promptQuestions()