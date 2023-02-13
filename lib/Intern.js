//Needed 
//name
//id
//email
//getName()
//getId()
//getEmail()
//get role 
//school
//getSchool()

//other classes extends Employee 
const Employee = require('./Employee.js');

class intern extends Employee {
    role = "Intern"
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
};

module.exports = Intern;