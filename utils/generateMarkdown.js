// function to get License badge
let licensebadge = ""
let getLicenseBadge = (data) => {
switch (data) {
  case  "GNU General Public License v3.0":
   return licensebadge = ""
     
  case  "MIT License":
    return licensebadge = ""

  case  "Apache License 2.0":
    return licensebadge = ""
  default:
    return licensebadge = ""
    
}};
// function to generate markdown for README
const generateMarkdown = (data) => {
  getLicenseBadge(data.license)
  return `# ${data.title} 


  ## Description

  ${data.description}
  ${licensebadge}

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 

  ${data.usage}

  ## License

  This application is covered under ${data.license}.
  
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
