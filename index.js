// Gather all things needed to run 
const fs = require('fs');
const inquirer = require('inquirer')
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager'); 
const generateHtml = require('./src/generateHtml')

//Hold responses
const responsesArray = []
//Hold employees
const employeeArray = []
//when entered look for team manager name/id/email/office #
const promptManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your Team Manager's name"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter your Team Manager's Employee ID"
        },
        {
            type: "input",
            name: "email",
            message: "please enter your Team Manager's email"
        }
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter to Team Manager's Office Number"
        }
    ])
    .then((responses) => {
        responsesArray.push(responses)
        promptAddEmployee()
    })
};


//THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
//engineer option
//engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const promptEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your Engineer's name"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter your Engineer's Employee ID"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your Engineer's email"
        },
        {
            type: "input",
            name: "github",
            message: "What is your Engineer's GitHub username?"
        },

    ])
    .then((responses) => {
        responsesArray.push(responses)
        promptAddEmployee()
    })
}
//intern option
//prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
const promptIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your Intern's name"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter your Intern's Employee ID"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your Intern's email"
        },
        {
            type: "input",
            name: "school",
            message: "What school does the Intern attend?"
        },
    

    ])
    .then((responses) => {
        responsesArray.push(responses)
        promptAddEmployee()
    })
    
}

const promptAddEmployee = () => {
    inquirer.prompt([
        {
            type:"list",
            name: "addEmployee",
            message: "Would you like to add another employee?",
            choices: ["Engineer", "Intern", "All Done"]
        },
    ])
    .then((responses) => {
        if (responses.addEmployee === "Engineer") {
            promptEngineer()
        } else if (responses.addEmployee === "Intern") {
            promptIntern()
        } else {
            responsesArray.forEach((employee) => {
                //distinguish employees by different requirement
                //for managers use officeNumbers 
                if(employee.officeNumber) {
                    const managers = new Manager(employee.name, employee.id, employee.email, employee.officeNumber)
                    employeeArray.push(managers)
                // for engineers use Github    
                } else if (employee.github) {
                    const engineers = new Engineer(employee.name, employee.id, employee.email, employee.github)
                    employeeArray.push(engineers)
                }else {
                    const interns = new Intern(employee.name, employee.id, employee.email, employee.school)
                    employeeArray.push(interns)
                }
            })
            //write to html file 
            fs.writeFileSync('./dist/index.html', generateHtml(employeeArray))
        }
    })
}
promptManager()