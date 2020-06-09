const inquirer = require('inquirer')

// ####################################################
//          Username and repo Name Questions
// ####################################################
exports.Repo = [{

    type: "input",
    name: "userName",
    message: "GitHub username.",
    default: "ecorreale"
  },
  {
    type: "input",
    name: "repoName",
    message: "GitHub project Name?",
    default: "09-ReadmeGenerator"
  }
];


// ####################################################
//                 Badge Questions
// ####################################################
exports.IsBadgeNeeded = [{
  type: "confirm",
  name: "IsNeeded",
  message: "Would you like to include any badge(s)?  (Enter for YES)"
}];

exports.Badges = [{
  type: "checkbox",
  name: "Choices",
  message: "Select from available badges.",
  // Choice Name Format [BadgeKey]:[Badge Description]
  choices: [
    {
      name: "1: Latest Node version badge"
    },
    {
      name: "2: GitHub, last commit badge"
    },
    {
      name: "3: License Badge"
    }
  ]
}];


// ####################################################
//             Document Content Questions
// ####################################################
exports.Document = [{
    type: "input",
    name: "Title ",
    message: "Title for your readme document? "
  },

  {
    type: "input",
    name: "Description ",
    message: "Description ? ",
    default: "This is the Description Section of the Document"
  },

  {
    type: "input",
    name: "Install",
    message: "\nInstallation Instructions\nWhat are the steps required to install your project? ",
    default: "Install steps "
  },

  {
    type: "input",
    name: "Usage",
    message: "\nUsage Section\nProvide instructions and examples for use. ",
    default: "Instuctions for the project"
  },

  {
    type: "input",
    name: "Testing",
    message: "\nSection: Testing\nCan you provide test instructions"
  },

  {
    type: "list",
    name: "License",
    message: "\nLicense\nSelect a license for this project",
    choices: [
        "1. MIT License (MIT)",
        "2. GNU General Public License v3.0 (GNU GPLv3)",
        "3. Apache License 2.0",
        "4. The Unlicense",
        "5. Other - I'll Enter in document myself"
      ]
  },

  {
    type: "input",
    name: "Contributing",
    message: "Please enter Contributing text if any"
  },

  {
    type: "input",
    name: "Contact",
    message: "Can you provide an email address for the Questions section?",
    default: "ecorreale@yahoo.com"
  }
];