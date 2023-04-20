//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your your project title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
      },
      {
          type: 'input',
          message: 'Provide instructions and examples for use',
          name: 'usage',
        },
        {
          type: 'input',
          message: 'List your collaborators, if any, with links to their GitHub profiles',
          name: 'collaborators',
        },
          {
            type: 'checkbox',
            message: 'Choose a license?',
            name: 'license',
            choices: ['MIT', 'Apache 2.0', 'The Unlicense'],
          },
          {
            type: 'input',
            message: 'Whats your GitHub username?',
            name: 'gitHub',
          },
          {
            type: 'input',
            message: 'Whats your email address?',
            name: 'email',
          },

];

// Create a function to write README file
function writeToFile(fileName, templateFile) {
  
  fs.writeFile(fileName,templateFile,(err)=>{
    if(err){
        throw err
    }
    console.log("Success! Your file have been created.");
})

}

//function to create Markdown template

function generateMarkdown(data) {
const titleReadme = `${data.title.toLowerCase().split(' ').join('-')}.md`;
const license = `${data.license}`
const readmeTemplate = `
# ${data.title}\n

![badge image](https://img.shields.io/badge/${license.split(' ').join('')}-License-lightgrey) \n

## Description
${data.description} \n

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation 

${data.installation}

## Usage

${data.usage}

## Credits

${data.collaborators}

## License

${data.license} License.

## Questions

For additional inquiries about this application you can contact me on:

GitHub:https://github.com/${data.gitHub}

Email: ${data.email}

`
//Call to write file after template has been created
writeToFile(titleReadme,readmeTemplate);

  }
  

// Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers)=>{

    generateMarkdown(answers);

  })
  
   
}

// Function call to initialize app
init();

 


