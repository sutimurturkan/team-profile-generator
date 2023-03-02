const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should create an object with name, id, email, and github properties", () => {
    const engineer = new Engineer("John Doe", 1, "johndoe@test.com", "johndoe");

    expect(engineer.name).toEqual("John Doe");
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toEqual("johndoe@test.com");
    expect(engineer.github).toEqual("johndoe");
  });

  it("should return the engineer's name", () => {
    const engineer = new Engineer("John Doe", 1, "johndoe@test.com", "johndoe");

    expect(engineer.getName()).toEqual("John Doe");
  });

  it("should return the engineer's id", () => {
    const engineer = new Engineer("John Doe", 1, "johndoe@test.com", "johndoe");

    expect(engineer.getId()).toEqual(1);
  });

  it("should return the engineer's email", () => {
    const engineer = new Engineer("John Doe", 1, "johndoe@test.com", "johndoe");

    expect(engineer.getEmail()).toEqual("johndoe@test.com");
  });

  it("should return the engineer's role as 'Engineer'", () => {
    const engineer = new Engineer("John Doe", 1, "johndoe@test.com", "johndoe");

    expect(engineer.getRole()).toEqual("Engineer");
  });

  it("should return the engineer's GitHub username", () => {
    const engineer = new Engineer("John Doe", 1, "johndoe@test.com", "johndoe");

    expect(engineer.getGithub()).toEqual("johndoe");
  });
});
