// function to generate markdown for README
function returnBadge(licenseUrl) {
  if (licenseUrl === "MIT")
    return "(https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)";
  else if (licenseUrl === "GNU AGPLv3")
    return "(https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  else if (licenseUrl === "GNU GPLv3")
    return "(https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  else if (licenseUrl === "GNU LGPLv3")
    return "(https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  else if (licenseUrl === "Mozilla Public 2.0")
    return "(https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  else if (licenseUrl === "Apache 2.0")
    return "(https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
}

function generateMarkdown(data) {
  return `
  # ${data.projectTitle}

  [![licenseUrl]${returnBadge(data.licenseUrl)}

  Table of Contents:
  1. [Project Description](#projectDescription)
  2. [Installation Process](#installationProcess)
  3. [User Usage](#userUsage)
  4. [License](#licenseUrl)
  5. [Contributors](#userContributors)
  6. [Testing](#userTesting)
  7. [Questions](#questions)

  # projectDescription:
  ${data.projectDescription}
  
  # installationProcess:
  ${data.installationProcess}
  
  # userUsage:
  ${data.userUsage}
  
  # licenseUrl:
  ${data.licenseUrl}
  
  # userContributors:
  ${data.userContributors}
  
  # userTests:
  ${data.userTesting}
  
  
  GitHub: https://github.com/${data.gitHub}        
  For any additional questions, please reach out to me at ${data.email}`;
}

module.exports = generateMarkdown;
