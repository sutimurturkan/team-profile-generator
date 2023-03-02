const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should create an object with name, id, email, and office number properties", () => {
    const manager = new Manager("John Doe", 1, "johndoe@test.com", "1234");

    expect(manager.name).toEqual("John Doe");
    expect(manager.id).toEqual(1);
    expect(manager.email).toEqual("johndoe@test.com");
    expect(manager.officeNumber).toEqual("1234");
  });

  it("should return the manager's name", () => {
    const manager = new Manager("John Doe", 1, "johndoe@test.com", "1234");

    expect(manager.getName()).toEqual("John Doe");
  });

  it("should return the manager's id", () => {
    const manager = new Manager("John Doe", 1, "johndoe@test.com", "1234");

    expect(manager.getId()).toEqual(1);
  });

  it("should return the manager's email", () => {
    const manager = new Manager("John Doe", 1, "johndoe@test.com", "1234");

    expect(manager.getEmail()).toEqual("johndoe@test.com");
  });

  it("should return the manager's role as 'Manager'", () => {
    const manager = new Manager("John Doe", 1, "johndoe@test.com", "1234");

    expect(manager.getRole()).toEqual("Manager");
  });

  it("should return the manager's office number", () => {
    const manager = new Manager("John Doe", 1, "johndoe@test.com", "1234");

    expect(manager.getOfficeNumber()).toEqual("1234");
  });
});
