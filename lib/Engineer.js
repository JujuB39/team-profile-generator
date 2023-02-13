
//github
//getGithub()

//because thic class extends Employee gather Employee.js
const Employee = require('./Employee.js');

class Engineer extends Employee {
    role = "Engineer";
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
}

function getGithub() {
    return this.github;
}