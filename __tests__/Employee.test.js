const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should create an object with name, id, and email properties", () => {
    const employee = new Employee("John Doe", 1, "johndoe@test.com");

    expect(employee.name).toEqual("John Doe");
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual("johndoe@test.com");
  });

  it("should return the employee's name", () => {
    const employee = new Employee("John Doe", 1, "johndoe@test.com");

    expect(employee.getName()).toEqual("John Doe");
  });

  it("should return the employee's id", () => {
    const employee = new Employee("John Doe", 1, "johndoe@test.com");

    expect(employee.getId()).toEqual(1);
  });

  it("should return the employee's email", () => {
    const employee = new Employee("John Doe", 1, "johndoe@test.com");

    expect(employee.getEmail()).toEqual("johndoe@test.com");
  });

  it("should return the employee's role as 'Employee'", () => {
    const employee = new Employee("John Doe", 1, "johndoe@test.com");

    expect(employee.getRole()).toEqual("Employee");
  });
});
