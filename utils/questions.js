module.exports = {

  // ####################################################
  //          Username and repo Name Questions
  // ####################################################
  Account: () => {

    AccountQuestions = [{
        type: "input",
        name: "userName",
        message: "Please enter your GitHub username:",
        default: "ecorreale"
      },

      {
        type: "input",
        name: "repoName",
        message: "\nWhat is the GitHub project Name:",
        default: "09-ReadmeGenerator"
      },
      {
        type: "input",
        name: "Author",
        message: "\nAuthor's Display Name? ",
        default: "Ernest Correale"
      }
    ]
    return AccountQuestions
  },


  // ####################################################
  //             Document Title Question
  // ####################################################

  AskDocumemtTitle: AskDocumemtTitle = {
    type: "input",
    name: "DocumentTitle",
    message: "\nTitle for your readme document? ",
    default: "Readme Generator"
  },

  // ####################################################
  //                 Badge Questions
  // ####################################################

  IsBadgeNeeded: IsBadgeNeeded = {
    type: "confirm",
    name: "IsNeeded",
    message: "\nWould you like to include any badge(s)?  (Enter for YES)"
  },


  SelectBadge: (SelectionList) => {

    var SelectedBadges = {
      type: "checkbox",
      name: "Choices",
      message: "Select from available badges.",
      choices: SelectionList
    }
    return SelectedBadges
  },


  // ####################################################
  //                 Select License Question
  // ####################################################
  SelectLicense: (SelectionList) => {

    SelectedLicense = [{
      type: "list",
      name: "SelectedLicense",
      message: "\nSelect a license for this project",
      choices: SelectionList,
      default: "MIT License"
    }]
    return SelectedLicense
  },


  // ####################################################
  //          Document Body Content Questions
  // ####################################################
  DocumentQuestions: DocumentQuestions = [

    {
      type: "confirm",
      name: "ShowTOC",
      message: "\nWould you like to display a Table of Contents? "
    },
    {
      type: "input",
      name: "SummaryText",
      message: "\nBrief one sentance summary:",
      default: "Creates a project readme as well as license file based on user inputs."
    },
    {
      type: "input",
      name: "DescriptionText",
      message: "\nProject Description Text:",
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },

    {
      type: "input",
      name: "Install",
      message: "\nPlease enter install instructions if any: ",
      default: "1. Clone repo 2. Do the hokie-pokie"
    },

    {
      type: "input",
      name: "Usage",
      message: "\nUsage Section\nProvide instructions and examples for use: ",
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },

    {
      type: "input",
      name: "Testing",
      message: "\nProvide testing details if any?",
      default: "Tested extensivly"
    },

    {
      type: "input",
      name: "Contributing",
      message: "\nWould you like to detail how others may contribute? ",
      default: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },

    {
      type: "input",
      name: "Contact",
      message: "\Please provide an email address for the Questions section?",
      default: "ecorreale@yahoo.com"
    }
  ]
} // Close Module.Exports