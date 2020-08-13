const inquirer = require("inquirer");
const fs = require("fs");
const gerateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description,
//  Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
  {
    type: "input",
    message: "What is your Project Title?",
    name: "projectTitle",
  },
  {
    type: "input",
    message: "Provide detailed description",
    name: "projectDescription",
  },
  {
    type: "input",
    message: "Provide table of contents",
    name: "tableOfContents",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installationProcess",
  },
  {
    type: "input",
    message: "How do you use your project?",
    name: "userUsage",
  },
  {
    type: "list",
    message: "provide License url",
    name: "licenseUrl",
    choices: ["MIT", "Mozilla", "GNU"],
  },
  {
    type: "input",
    message: "Who are the contributors to your project?",
    name: "userContributors",
  },
  {
    type: "input",
    message: "How can you run the testing?",
    name: "userTesting",
  },
  {
    type: "input",
    message: "How can we contact you regarding the project?",
    name: "email",
  },
];
async function main() {
  const userResponse = await inquirer.prompt(questions);
  const readmeText = gerateMarkdown(userResponse);
  fs.writeFile("Readme.md", readmeText, (err) => {
    if (err) throw err;
    console.log("Your Readme has been gerated");
  });
}
main();
