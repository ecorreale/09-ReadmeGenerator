const validUrl = require('valid-url');
const urlExists = require("url-exists");npm i

exports.Repo = [{
    type: "input",
    name: "userName",
    message: "GitHub username."
  },
  {
    type: "input",
     name: "repoUrl",
    message: "GitHub project URL?",
    validate: function(value) {

      console.log("Validating provided URL")
      
      var IsValid = validUrl.isUri(value)
      if (IsValid) {
        urlExists(value, function (err, exists) {
          if (exists) {
            return true
          } else {
            console.log("Cannot resolve the provided URL")
          }
        });
      } 

      return "Please enter a vaild URL"

    }
  }
];

exports.Badges = [{
type:"list",
name: "badge"
message:




}]


exports.HasContributors = [{
  type: "confirm",
  name: "HasContrib",
  message: "Do you have any GitHub Contributors (just hit enter for YES)?"
}
];

exports.GetContributors = [{
    type: "input",
    name: "Contributor",
    message: "\nEnter Contributor's GitHub username."

  },

  {
    // Ask if more names need to be added
    type: "confirm",
    name: "addContrib",
    message: "Add another contributor (just hit enter for YES)?"
  }
];

exports.Sections = [{
    type: "input",
    name: "projTitle",
    message: "What is the title for your project?"
  },

  {
    type: "input",
    name: "projDesc",
    message: "Project Description?"
  },

  {
    type: "input",
    name: "projInstall",
    message: "What are the steps required to install your project?"
  },

  {
    type: "input",
    name: "projUsage",
    message: "Usage\nProvide instructions and examples for use. "
  },

  {
    type: "input",
    name: "projTest",
    message: "\nSection: Testing\nCan you provide test instructions"
  },

  {
    type: "list",
    name: "projLicense",
    message: "Select a license for this project.",
    choices: ["MIT License (MIT)", "GNU General Public License v3.0 (GNU GPLv3)", "Apache License 2.0", "The Unlicense", "Other"]
  },

  {
    type: "input",
    name: "projContact",
    message: "Can you provide an email address for the Questions section?"
  }
];