const Manager = require('../lib/Manager')

//My test example 
const name = "Juju";
const id = "3";
const email ="julissab9@gmail.com";
const officeNumber = "212-987-6543"

//push my example into manager
const manager = new Manager(name, id, email, officeNumber);

describe('Manager', () => {
    it("Returns a Manager object with a name, id, email, and office Number", () => {
        expect("name" in manager).toEqual(true);
        expect('id' in manager).toEqual(true);
        expect("email" in manager).toEqual(true);
        expect("officeNumber" in manager).toEqual(true)
    });

    it("Returns the correct name, id, email, and office number", () => {
        expect(manager.name).toEqual(name);
        expect(manager.id).toEqual(id);
        expect(manager.email).toEqual(email);
        expect(manager.officeNumber).toEqual(officeNumber);
    })

    it("Returns the correct name when getName() is called", () => {
        expect(manager.getName()).toBe(name);
    })

    it("Returns the correct ID when getId() is called", () => {
        expect(manager.getId()).toBe(id);
    })

    it("Returns the correct email when getEmail() is called", () => {
        expect(manager.getEmail()).toBe(email);
    })

    it("Returns the correct role when getRole() is called", () => {
        expect(manager.getRole()).toBe("Manager");
    })

    it("Returns the correct officeNumber user when getOfficeNumber() is called", () => {
        expect(manager.getOfficeNumber()).toBe(officeNumber);
    })



});



