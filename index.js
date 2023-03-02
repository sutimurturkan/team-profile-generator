const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/page-template.js');

const writeFileAsync = util.promisify(fs.writeFile);

const employees = [];

async function init() {
  console.log("Let's build your engineering team!");

  const managerAnswers = await inquirer.prompt([
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the team manager's employee ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the team manager's email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the team manager's office number?",
      name: "officeNumber",
    },
  ]);

  const manager = new Manager(
    managerAnswers.name,
    managerAnswers.id,
    managerAnswers.email,
    managerAnswers.officeNumber
  );

  employees.push(manager);

  let finished = false;

  while (!finished) {
    const employeeTypeAnswer = await inquirer.prompt({
      type: "list",
      message: "Which type of employee would you like to add?",
      name: "employeeType",
      choices: ["Engineer", "Intern", "I'm finished adding employees"],
    });

    switch (employeeTypeAnswer.employeeType) {
      case "Engineer":
        const engineerAnswers = await inquirer.prompt([
          {
            type: "input",
            message: "What is the engineer's name?",
            name: "name",
          },
          {
            type: "input",
            message: "What is the engineer's employee ID?",
            name: "id",
          },
          {
            type: "input",
            message: "What is the engineer's email address?",
            name: "email",
          },
          {
            type: "input",
            message: "What is the engineer's GitHub username?",
            name: "github",
          },
        ]);

        const engineer = new Engineer(
          engineerAnswers.name,
          engineerAnswers.id,
          engineerAnswers.email,
          engineerAnswers.github
        );

        employees.push(engineer);

        break;

      case "Intern":
        const internAnswers = await inquirer.prompt([
          {
            type: "input",
            message: "What is the intern's name?",
            name: "name",
          },
          {
            type: "input",
            message: "What is the intern's employee ID?",
            name: "id",
          },
          {
            type: "input",
            message: "What is the intern's email address?",
            name: "email",
          },
          {
            type: "input",
            message: "What is the intern's school?",
            name: "school",
          },
        ]);

        const intern = new Intern(
          internAnswers.name,
          internAnswers.id,
          internAnswers.email,
          internAnswers.school
        );

        employees.push(intern);

        break;

      case "I'm finished adding employees":
        finished = true;
        break;

      default:
        console.log("Invalid option selected");
    }
  }

  const html = generateHTML(employees);
  await writeFileAsync("dist/index.html", html);

  console.log("Your team roster has been generated in index.html");
}

init();
