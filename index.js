const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');


const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
      },
    
      {
        type: "input",
        name: "description",
        message: "Please write a short description of your project.",
      },
    
      {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
      },
    
      {
        type: "input",
        name: "usage",
        message: "Please provide examples of how your project's usage and explain how to use it.",
      },
      {
        type: "list",
        name: "license",
        message: "Choose what license you would like to use for your project.",
        choices: [
          {
            name: "GNU General Public License v3.0",
          },
          {
            name: "MIT License",
          },
          {
            name: "Apache License 2.0",
          },
    
        ],
      },
      {
        type: "input",
        name: "contributing",
        message: "Please provide some guidelines on how to contribute to your project",
      },
    
      {
        type: "input",
        name: "testing",
        message: "Are there any test instructions for this project? Please provide an explanation of any tests",
      },
    
      {
        type: "input",
        name: "questions",
        message: "What is your email address?",
      },

      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
      },
];

const prompt = () => {
    return inquirer.prompt(questions);
}

prompt()
  .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
  .then(() => console.log('Successfully generated Readme!'))
  .catch((err) => console.error(err));
