const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should create an object with name, id, email, and school properties", () => {
    const intern = new Intern("John Doe", 1, "johndoe@test.com", "University of Test");

    expect(intern.name).toEqual("John Doe");
    expect(intern.id).toEqual(1);
    expect(intern.email).toEqual("johndoe@test.com");
    expect(intern.school).toEqual("University of Test");
  });

  it("should return the intern's name", () => {
    const intern = new Intern("John Doe", 1, "johndoe@test.com", "University of Test");

    expect(intern.getName()).toEqual("John Doe");
  });

  it("should return the intern's id", () => {
    const intern = new Intern("John Doe", 1, "johndoe@test.com", "University of Test");

    expect(intern.getId()).toEqual(1);
  });

  it("should return the intern's email", () => {
    const intern = new Intern("John Doe", 1, "johndoe@test.com", "University of Test");

    expect(intern.getEmail()).toEqual("johndoe@test.com");
  });

  it("should return the intern's role as 'Intern'", () => {
    const intern = new Intern("John Doe", 1, "johndoe@test.com", "University of Test");

    expect(intern.getRole()).toEqual("Intern");
  });

  it("should return the intern's school", () => {
    const intern = new Intern("John Doe", 1, "johndoe@test.com", "University of Test");

    expect(intern.getSchool()).toEqual("University of Test");
  });
});

