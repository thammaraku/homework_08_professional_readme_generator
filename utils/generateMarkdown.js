// function to generate markdown for README
function generateMarkdown(answers) {

  // TITLE
  let markDown = `# ${answers.title}
  `
  // LICENSE LIST
    if (answers.license === 'Apache License 2.0') {
    markDown +=
  `
  ![Badge for License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
  `
  }
  else if (answers.license === 'GNU GPLv3') {
    markDown +=
  `
  ![Badge for License](https://img.shields.io/badge/License-GPLv3-blue.svg)
  `
  }
  else if (answers.license === 'Mozilla Public License 2.0') {
    markDown +=
  `
  ![Badge for License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)
  `
  }
  else if (answers.license === 'MIT License') {
    markDown +=
  `
  ![Badge for License](https://img.shields.io/badge/License-MIT-yellow.svg)
  `
  }
  else if (answers.license === 'Boost Software License 1.0') {
    markDown +=
  `
  ![Badge for License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)
  `
  }
  else {
    markDown +=
  `
  ![Badge for License](https://img.shields.io/badge/license-Unlicense-blue.svgg)
  `
  };
  
  // PROJECT DESCRIPTION
  if (answers.description !== '') {
    markDown +=
  `## Description
  ${answers.description}
  `
  };


  // TABLE OF CONTENTS
    markDown +=
  `## Table of Contents
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

  if (answers.credits !== '') {
    markDown +=
  `* [Credits](#credits)
  `
  };

  if (answers.test !== '') {
    markDown +=
  `* [Tests](#tests)
  `
  }

  // INSTALLATION
  if (answers.installation !== '') {
    markDown +=
  `## Installation
  ${answers.installation}
  \`\`\`
  ${answers.installation_commands}
  \`\`\`
  `
  };

  // USAGE
  if (answers.usage !== '') {
    markDown +=
  `## Usage
  ${answers.usage}
  `
  };

  // CREDITS
  if (answers.credits !== '') {
    markDown +=
  `## Credits
  ${answers.credits}
  `
  };
  
  // LICENSE
  if (answers.license !== '') {
    markDown +=
  `## License
  This project is licensed under ${answers.license}.
  `
  };

  // CONTRIBUTING
  if (answers.contribute !== '') {
    markDown +=
  `## Contributing
  ${answers.contribute}
  `
  };

  // TESTS
  if (answers.test !== '') {
    markDown +=
  `## Tests
  ${answers.test}
  `
  };

  // QUESTIONS
  if (answers.email !== '' || answers.github !== '') {
    markDown +=
  `## Questions
  Any questions on this project, please contact the developer through below channels.
  
  * Email: ${answers.email}
  * GitHub: [${answers.github}](https://github.com/${answers.github})
  `
  };

  return markDown;
}

module.exports = generateMarkdown;
