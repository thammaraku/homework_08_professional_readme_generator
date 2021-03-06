const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// const writeAsync = util.promisify(fs.writeFile);
const writeAsync = util.promisify(writeToFile);

// import generateMarkdown
var generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What's your project title?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Your input is required otherwise default value will be used")
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "What's your project description?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Your input is required otherwise default value will be used")
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: "Could you provide instruction to install your project in details? If there are any commands needed, please input on the next question.",
    },
    {
        type: 'input',
        name: 'installation_commands',
        message: "Please list commands to install your project here.",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Could you give an example of your project usage?",
    },
    {
        type: 'input',
        name: 'credits',
        message: "Do you have any collaborators work on this project?",
    },
    {
        type: 'list',
        name: 'license',
        message: "Please choose license from the list",
        default: 'none',
        choices: ['Apache License 2.0','GNU GPLv3','Mozilla Public License 2.0', 'MIT License','Boost Software License 1.0 ', 'The Unlicense'],
    },
    {
        type: 'input',
        name: 'contribute',
        message: "If you would like would like other developers to contribute on this project, please add guidelines here.",
    },
    {
        type: 'input',
        name: 'tests',
        message: "If applicable, could you provide tests details of this project?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What's your github username?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your email address?",
    },
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('README file has been generated!');
    });

}

// function to initialize program
function init() {

    inquirer
        .prompt(questions)
        .then(answers => {

            //invoke generate markdown file
            const template = generateMarkdown(answers);

            // use util.promisify to start writing file asynchronously
            // writeToFile('project_readme.md', template);
            writeAsync('project_readme_auto_generated.md', template);



        })
        .catch(error => {
            console.log(error);
        })
}

// function call to initialize program
init();



