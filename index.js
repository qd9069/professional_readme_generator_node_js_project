// TODO: Include packages needed for this application

// TODO: import the generateMarkdown function from utils/generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Write code to get user input, generate markdown, and save it to a file.
const inquirer = require('inquirer');
const fs = require('fs');

// Step1: set a function to prompt the following questions
const init = () => {
    inquirer
        .prompt([
            // 1. title of the project  
            {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
            },
            // 2. enter description
            {
            type: 'input',
            message: 'Please enter the description of your project.',
            name: 'description',
            },
            // 3. enter installation instructions
            {
            type: 'input',
            message: 'Please enter the installation instructions of your project.',
            name: 'installation',
            },
            // 4. enter usage information
            {
            type: 'input',
            message: 'Please enter the usage information of your project.',
            name: 'usage',
            },
            // 5. select a license from a list of options
            {
            type: 'list',
            message: 'Please choose a license for your project.',
            name: 'license',
            choices: ['Apache License 2.0', 
                        'GNU General Public License v3.0', 
                        'MIT License',
                        'Boost Software License 1.0',
                        'GNU Affero General Public License v3.0',
                        'GNU General Public License v2.0',
                        'GNU Lesser General Public License v2.1',
                        'Mozilla Public License 2.0',
                        'The Unlicense'],
            },
            // 6. enter contribution guidelines
            {
            type: 'input',
            message: 'Please enter the contribution guidelines of your project.',
            name: 'contribution',
            },
            // 7. enter tests instructions
            {
            type: 'input',
            message: 'Please enter the tests instructions of your project.',
            name: 'tests',
            },
            // 8. enter for questions: Github username, email address
            {
            type: 'input',
            message: 'Please enter your GitBub username.',
            name: 'username',
            },
            {
            type: 'input',
            message: 'Please enter your email address.',
            name: 'email',
            },
        ])
        .then((data) => {
            console.log(data);

            const readmePageContent = generateMarkdown(data);

            // fs.writeFile('index.html', htmlPageContent, (err) =>
            //     err ? console.log(err) : console.log('Successfully created index.html!')
            // );

        });

}

init();

// Step2: to generate the table of contents

// Step3: print all the user responses in the README file
