 const Employee = require('../lib/Employee')

//My test example 
const name = "Juju";
const id = "3";
const email ="julissab9@gmail.com";

//push my example into employee
const employee = new Employee(name, id, email);

describe('Employee', () => {
    it("Returns an Employee object with a name, id and email", () => {
        expect("name" in employee).toEqual(true);
        expect('id' in employee).toEqual(true);
        expect("email" in employee).toEqual(true);
    });

    it("Returns the correct name, id and email", () => {
        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email);
    })

    it("Returns the correct name when getName() is called", () => {
        expect(employee.getName().toEqual(name))
    })

    it("Returns the correct ID when getId() is called", () => {
        expect(employee.getId().toEqual(id))
    })

    it("Returns the correct email when getEmail() is called", () => {
        expect(employee.getEmail().toEqual(email))
    })

    it("Returns the correct role when getRole() is called", () => {
        expect(employee.getRole().toEqual("Employee"))
    })



});
