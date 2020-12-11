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
        name: 'projectTitle',
        message: "What's your project title?",
    }


];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
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
            writeAsync('project_readme.md', template);



        })
        .catch(error => {
            console.log(error);
        })
}

// function call to initialize program
init();



