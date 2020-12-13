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
        default: 'none',
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
        default: 'none',
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
        message: "Could you provide steps to install your project?",
        default: 'none',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Your input is required otherwise default value will be used")
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: "Could you give an example of your project usage?",
        default: 'none',
    },
    {
        type: 'input',
        name: 'contribute',
        message: "Do you have any other contributors on this project?",
        default: 'none',
    },
    {
        type: 'input',
        name: 'tests',
        message: "If applicable, could you provide tests details of this project?",
        default: 'none',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Your input is required otherwise default value will be used")
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'license',
        message: "Please choose license from the list",
        default: 'none',
        choices: ['Mozilla Public License 2.0', 'MIT License', 'The Unlicense'],
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



