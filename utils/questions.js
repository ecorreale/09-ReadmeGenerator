const inquirer = require('inquirer')
const axios = require("axios")
const licenseApi = "https://api.github.com/licenses"

var licenseArr = []

function GetLicenseOptions() {

  console.log("In Get License")
  var licenseHash = {}
  axios.get(licenseApi).then(results => {

    if (!results) {
      throw ("Unable to reach License API")
    } else {
      // Create lookup hash and license selection array
      results.forEach(license => {
        console.log(license)
        var license = results.data.name
        licenseHash[restults.data.key] = license
        licenseArr.push(license)
      })
    }
  }).then(() => {
    console.log(licenseArr)
    return licenseHash
  })
}


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
  choices: [{
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
//          Document Body Content Questions
// ####################################################
exports.Document = [{
    type: "input",
    name: "DocTitle ",
    message: "Title for your readme document? ",
    default: "09-Readme Generator"
  },

  {
    type: "confirm",
    name: "ShowTOC ",
    message: "Would you like to display a Table of Contents? "
  },

  {
    type: "input",
    name: "DescriptionText",
    message: "Project Description Text",
    default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },

  {
    type: "input",
    name: "Install",
    message: "\nInstallation Instructions\nWhat are the steps required to install your project? ",
    default: "Install steps to follow"
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
    choices: [licenseArr]
  },

  // {
  //   type: "list",
  //   name: "License",
  //   message: "\nLicense\nSelect a license for this project",
  //   choices: licenseArr

  //   // [

  //   //   "1. MIT License (MIT)",
  //   //   "2. GNU General Public License v3.0 (GNU GPLv3)",
  //   //   "3. Apache License 2.0",
  //   //   "4. The Unlicense",
  //   //   "5. Other - I'll Enter in document myself"
  //   // ]
  // },

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

exports.GetLicenses = GetLicenseOptions()
