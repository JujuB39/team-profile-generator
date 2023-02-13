const Employee = require('./Employee.js');

class Manager extends Employee {
    role = "Manager";
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;