const inquirer = require("inquirer");
const fs = require("fs");
const gerateMarkdown = require("./utils/generateMarkdown");
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
    choices: [
      "MIT",
      "Mozilla Public 2.0",
      "GNU AGPLv3",
      "GNU GPLv3",
      "Apache 2.0",
    ],
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
    message: "What is your GitHub username?",
    name: "gitHub",
  },
  {
    type: "input",
    message: "How can we contact you regarding the project?",
    name: "email",
  },
];
async function main() {
  const userInput = await inquirer.prompt(questions);

  const markDownText = gerateMarkdown(userInput);
  fs.writeFile("Readme.md", markDownText, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Success! A ReadMe has been generated!");
  });
}

main();
