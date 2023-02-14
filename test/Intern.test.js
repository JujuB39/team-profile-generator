const Engineer= require('../lib/Engineer')

//My test example 
const name = "Juju";
const id = "3";
const email ="julissab9@gmail.com";
const github = "jujub39"

//push my example into engineer
const engineer = new Engineer(name, id, email, github);

describe('Enigneer', () => {
    it("Returns an Engineer object with a name, id, email, and github", () => {
        expect("name" in engineer).toEqual(true);
        expect('id' in engineer).toEqual(true);
        expect("email" in engineer).toEqual(true);
        expect("github" in engineer).toEqual(true)
    });

    it("Returns the correct name, id, email, and github user", () => {
        expect(engineer.name).toEqual(name);
        expect(engineer.id).toEqual(id);
        expect(engineer.email).toEqual(email);
        expect(engineer.github).toEqual(github);
    })

    it("Returns the correct name when getName() is called", () => {
        expect(engineer.getName().toEqual(name))
    })

    it("Returns the correct ID when getId() is called", () => {
        expect(engineer.getId().toEqual(id))
    })

    it("Returns the correct email when getEmail() is called", () => {
        expect(engineer.getEmail().toEqual(email))
    })

    it("Returns the correct role when getRole() is called", () => {
        expect(engineer.getRole().toEqual("Engineer"))
    })

    it("Returns the correct github user when getGithub() is called", () => {
        expect(engineer.getGithub().toEqual(github))
    })



});