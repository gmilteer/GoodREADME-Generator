// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
${data.projectDescription}
## Table of Contents
${data.tableOfContents}
## Installation Process
${data.insallationProcess}
## User Usage
${data.userUsage}
## License
${data.licenseUrl}
`;
}

module.exports = generateMarkdown;
