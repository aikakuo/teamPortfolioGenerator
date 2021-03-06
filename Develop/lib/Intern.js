// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school, title) {
        super(name, id, email);
        this.school = school;
        this.title = "Intern";
    }
    getRole() {
        return this.title;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;