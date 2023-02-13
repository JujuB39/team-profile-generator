class Employee {
    role = "Employee"
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
};

//get()
function getName() {
    return this.name
};

function getId() {
    return this.id;

};

function getEmail() {
    return this.email;
}

function getRole() {
    return this.role;
}

module.exports = Employee;