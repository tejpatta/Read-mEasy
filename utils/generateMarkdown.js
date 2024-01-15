// function to get License badge
let licensebadge = ""
let getLicenseBadge = (data) => {
switch (data) {
  case  "GNU General Public License v3.0":
   return licensebadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
     
  case  "MIT License":
    return licensebadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

  case  "Apache License 2.0":
    return licensebadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  
  case "BSD 3-Clause License":
    return licensebadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  
    default:
    return licensebadge = ""
    
}};
// function to generate markdown for README
const generateMarkdown = (data) => {
  getLicenseBadge(data.license)
  return `# ${data.title} 


  ## About
  ${licensebadge}
  
  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
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
  My GitHub profile: ${data.github}
  
  For any further questions, you can reach me via email at   ${data.questions}

`;
}

module.exports = generateMarkdown;
