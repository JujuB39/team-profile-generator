const Intern = require('../lib/Intern')

//My test example 
const name = "Juju";
const id = "3";
const email ="julissab9@gmail.com";
const school = "Notre Dame"

//push my example into intern
const intern = new Intern(name, id, email, school);

describe('Intern', () => {
    it("Returns an Intern object with a name, id, email, and school", () => {
        expect("name" in intern).toEqual(true);
        expect('id' in intern).toEqual(true);
        expect("email" in intern).toEqual(true);
        expect("school" in intern).toEqual(true)
    });

    it("Returns the correct name, id, email, and github user", () => {
        expect(intern.name).toEqual(name);
        expect(intern.id).toEqual(id);
        expect(intern.email).toEqual(email);
        expect(intern.school).toEqual(school);
    })

    it("Returns the correct name when getName() is called", () => {
        expect(intern.getName().toEqual(name))
    })

    it("Returns the correct ID when getId() is called", () => {
        expect(intern.getId().toEqual(id))
    })

    it("Returns the correct email when getEmail() is called", () => {
        expect(intern.getEmail().toEqual(email))
    })

    it("Returns the correct role when getRole() is called", () => {
        expect(intern.getRole().toEqual("Intern"))
    })

    it("Returns the correct school user when getSchool() is called", () => {
        expect(intern.getSchool().toEqual(school))
    })



});