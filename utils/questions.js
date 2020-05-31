exports.Account = [{

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


exports.Badges = [{
  type: "checkbox",
  name: "prjBadges",
  message: "Select from available badges.",
  choices: [
    new inquirer.Separator("======= Platform & Version Support ========\n"),
    {
      name: "Latest version badge"
    },
    {
      name: "GitHub last commit badge"
    },
    {
      name: "Badges? We don't need no stink'n badges!"
    }
  ]
}];


exports.AnyContributors = [{
  type: "confirm",
  name: "HasContrib",
  message: "Do you have any GitHub Contributors (just hit enter for YES)?"
}];

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
    name: "prjTitle ",
    message: "What is the title for your project ? "
  },

  {
    type: "input",
    name: "prjDesc ",
    message: "Project Description ? "
  },

  {
    type: "input",
    name: "prjInstall",
    message: "What are the steps required to install your project ? "
  },

  {
    type: "input",
    name: "prjUsage",
    message: "Usage\nProvide instructions and examples for use. "
  },

  {
    type: "input",
    name: "prjTest",
    message: "\nSection: Testing\nCan you provide test instructions"
  },

  {
    type: "list",
    name: "prjLicense",
    message: "Select a license for this project",
    choices: ["MIT License (MIT)", "GNU General Public License v3.0 (GNU GPLv3)", "Apache License 2.0", "The Unlicense", "Other"]
  },

  {
    type: "input",
    name: "prjContact",
    message: "Can you provide an email address for the Questions section?"
  }
];