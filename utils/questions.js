// const inquirer = require('inquirer')

const axios = require("axios")
const licenseApi = "https://api.github.com/licenses"


module.exports = {

  // CREATE LICENSE SELCTION DICTIONARY
  GetLicenseList: () => {

    var licenseDict = {}
    axios.get(licenseApi).then(results => {

      if (!results) {

        throw ("Unable to reach License API")
      } else {

        results.data.forEach(function (license) {
          licenseDict[license.key] = license
        })
        licenseArr = Object.keys(licenseDict)
      }

    }).then(() => {

      return licenseDict
    })
  },


  // ####################################################
  //          Username and repo Name Questions
  // ####################################################
  Account: () => {

    AccountQuestions = [{
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
    return AccountQuestions
  },


  // ####################################################
  //                 Badge Questions
  // ####################################################

  IsBadgeNeeded: IsBadgeNeeded = [{
    type: "confirm",
    name: "IsNeeded",
    message: "Would you like to include any badge(s)?  (Enter for YES)"
  }],


  SelectBadge: (SelectionList) => {
    var options = Object.keys(SelectionList)

    var BadgeQuestion = [{
      type: "checkbox",
      name: "Choices",
      message: "Select from available badges.",
      choices: options
    }]
    return BadgeQuestion
  },



  // ####################################################
  //                 Select License Question
  // ####################################################
  SelectLicense: (SelectionList) => {
    var options = Object.keys(SelectionList)

    BadgeSelectionQuestion = [{
      type: "list",
      name: "License",
      message: "\nLicense\nSelect a license for this project",
      choices: options
    }]
    return BadgeSelectionQuestion
  },


  // ####################################################
  //          Document Body Content Questions
  // ####################################################
  DocumentQuestions:Document [{
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
  ]
} // \Module.Exports
