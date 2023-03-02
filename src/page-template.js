const generateManager = function (manager) {
    return `
    <div class="card m-3 shadow bg-white rounded" style="width: 18rem">
      <div class="card-header bg-primary text-white">
        <h2>${manager.getName()}</h2>
        <h3><i class="fas fa-mug-hot"></i> Manager</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
      </ul>
    </div>
    `;
  };
  
  const generateEngineer = function (engineer) {
    return `
    <div class="card m-3 shadow bg-white rounded" style="width: 18rem">
      <div class="card-header bg-primary text-white">
        <h2>${engineer.getName()}</h2>
        <h3><i class="fas fa-glasses"></i> Engineer</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
      </ul>
    </div>
    `;
  };
  
  const generateIntern = function (intern) {
    return `
    <div class="card m-3 shadow bg-white rounded" style="width: 18rem">
      <div class="card-header bg-primary text-white">
        <h2>${intern.getName()}</h2>
        <h3><i class="fas fa-user-graduate"></i> Intern</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>
    `;
  };
  
  const generateHTML = function (team) {
    const cards = [];
  
    cards.push(team.filter((employee) => employee.getRole() === "Manager").map((manager) => generateManager(manager)).join(""));
    cards.push(team.filter((employee) => employee.getRole() === "Engineer").map((engineer) => generateEngineer(engineer)).join(""));
    cards.push(team.filter((employee) => employee.getRole() === "Intern").map((intern) => generateIntern(intern)).join(""));
  
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <script src="https://kit.fontawesome.com/7c5c8e9a8e.js"></script>
      </head>
      <body>
        <header class="bg-danger text-white mb-5 p-5">
          <h1 class="text-center">My Team</h1>
        </header>
        <div class="container">
          <div class="row">
            ${cards.join("")}
          </div>
        </div>
      </body>
    </html>
    `;
  };
  
  module.exports = generateHTML;