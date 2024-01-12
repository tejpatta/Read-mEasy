// function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 

  ${data.usage}

  ## License
    
  
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.testing}

  ## Questions
  My GitHub profile:   ${data.github}
  For any further questions, you can reach my via email at   ${data.questions}


  
`;
}

module.exports = generateMarkdown;
