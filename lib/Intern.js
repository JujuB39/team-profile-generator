const Employee = require('./Employee.js');

class Intern extends Employee {
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