// function to generate markdown for README
function generateMarkdown(answers) {


  let markDown =

    `# ${answers.title}

    ![GitHub license](https://img.shields.io/badge/license-APACHE 2.0-blue.svg)
    
    ## Description
    ${answers.description}

    ## Table of Contents     
      `
  if (answers.installation !== "none") {
    markDown += `
      * [Installation](#installation)
      To install necessary dependencies, run the following command:`

      \`\`\`
      ${answers.installation}
      \`\`\`
    `
  };

  if (answers.usage !== "none") {
    markDown += `
      * [Usage](#usage)
      ${answers.usage}
    `
  };

  if (answers.usage !== "none") {
    markDown += `
      * [Contributing](#contributing)
      ${answers.contribute}
      `
  };

  if (answers.test !== "none") {
    markDown += `
      * [Tests](#tests)
      Instruction to test application:
      ${answers.usage}
        `
  };

  `
    * [Questions](#questions)
  Any questions, please contact ${ answers.email }.You can find more of my work at ${ answers.github }.
    
  ## License
  This project is licensed under ${ answers.license }
  `
  return markDown;

}

module.exports = generateMarkdown;