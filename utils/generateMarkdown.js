// function to generate markdown for README
function generateMarkdown(answers) {
  let markDown = `# ${answers.title}
  ![Badge for License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]

  ## Description
  ${answers.description}

  ## Table of Contents
  `

  if (answers.installation !== '') {
    markDown +=
  `* [Installation](#installation)
  `
  };

  if (answers.usage !== '') {
    markDown +=
  `* [Usage](#usage)
  `
  };

  if (answers.usage !== '') {
    markDown +=
  `* [Contributing](#contributing)
  `
  };

  if (answers.test !== '') {
    markDown +=
  `* [Tests](#tests)
  `
  }

  // TEST SECTION

  if (answers.installation !== '') {
    markDown +=
  `## Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  ${answers.installation}
  \`\`\`
  `
  };

  if (answers.usage !== '') {
    markDown +=
  `## Usage
  ${answers.usage}
  `
  };

  `## License
  This project is licensed under ${answers.license}
  `

  if (answers.contribute !== '') {
    markDown +=
  `## Contributing
  ${answers.contribute}
  `
  };

  if (answers.test !== '') {
    markDown +=
  `## Tests
  Instruction to test application:
  ${answers.usage}
  `
  };

    markDown +=

  `## Questions
  Any questions, please contact ${answers.email}.You can find more of my work at ${answers.github}.
  `

  return markDown;
}

module.exports = generateMarkdown;
