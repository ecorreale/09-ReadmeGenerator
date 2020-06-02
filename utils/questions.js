const inquirer = require('inquirer')

// ####################################################
//          Username and repo Name Questions
// ####################################################
exports.AcctRepo = [{

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
  name: "IsBadgeNeeded",
  message: "Would you like to include badge(s)?  (Enter for YES)"
}];

exports.Badges = [{
  type: "checkbox",
  name: "badgesSelected",
  message: "Select from available badges.",
  // Choice Name Format [BadgeKey]:[Badge Description]
  choices: [
    new inquirer.Separator("======= Platform & Version Support ========\n"),
    {
      name: "1: Latest Node version badge"
    },
    {
      name: "2: GitHub, last commit badge"
    },
    {
      name: "3: We don't need no stink'n badges!"
    }
  ]
}];

// ####################################################
//              Contributors Questions
// ####################################################
exports.AnyContributors = [{
  type: "confirm",
  name: "HasContributor",
  message: "Do you have any GitHub Contributors? (Enter for YES)"
}];


exports.Contributors = [{
    type: "input",
    name: "value",
    message: "Enter Contributor's GitHub username."
  },

  {
    // Ask if more names need to be added
    type: "confirm",
    name: "askAgain",
    message: "Add another contributor (Enter for YES)?"
  }
];


// ####################################################
//             Document Content Questions
// ####################################################
exports.Sections = [{
    type: "input",
    name: "Title ",
    message: "What is the title for your project ? "
  },

  {
    type: "input",
    name: "Description ",
    message: "Project Description ? "
  },

  {
    type: "input",
    name: "Install",
    message: "What are the steps required to install your project ? "
  },

  {
    type: "input",
    name: "Usage",
    message: "Usage\nProvide instructions and examples for use. "
  },

  {
    type: "input",
    name: "Test",
    message: "\nSection: Testing\nCan you provide test instructions"
  },

  {
    type: "list",
    name: "License",
    message: "Select a license for this project",
    choices: ["MIT License (MIT)", "GNU General Public License v3.0 (GNU GPLv3)", "Apache License 2.0", "The Unlicense", "Other"]
  },

  {
    type: "input",
    name: "Contact",
    message: "Can you provide an email address for the Questions section?"
  }
];