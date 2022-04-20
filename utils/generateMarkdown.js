// TODO: Add code to generate markdown for README given a data object parameter containing the user input.
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

// README list order:
// 1. title of the project
// 2. Description
// 3. Table of Contents 
  // click on the links here, user will be taken to the corresponding section of README
// 4. Installation 
// 5. Usage
// 6. License: select from an option list
  // a badge for that license is added near the top of the README
  // a notice is added to explain which license the application is covered under
// 7. Contributing
// 8. Tests
// 9. Questions: display Github username, with a link to the Github profile
  // display email address, with instructions on how to reach me with additional questions