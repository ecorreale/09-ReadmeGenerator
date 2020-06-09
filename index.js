const inquirer = require('inquirer')
const path = require('path');
const axios = require('axios')
const fs = require('fs')

const Questions = require("./utils/questions")
const MarkDown = require("./utils/generateMarkdown")

var docData = {}


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log("File Updated");
    });
}

function init() {
    const apiUrl = "https://api.github.com"


    inquirer.prompt(Questions.Repo).then(answers => {

        const profileApi = apiUrl + "/users/" + answers.userName

        const repoName = answers.repoName
        const repoApi = apiUrl + "/repos/" + answers.userName + "/" + repoName.replace(/ /g, "-")

        axios.get(profileApi).then(results => {
                if (!results) {
                    console.error("Unable to reach supplied Repo URL")
                    throw "Please confoirm the supplied repo URL is correct and try again"
                }

                docData["UserName"] = answers.userName
                docData["RepoName"] = repoName
                docData["ProfileImage"] = results.data.avatar_url
                docData["ProfileEmail"] = results.data.email

            })
            .then(() => {

                Badges()
            })
    })
}

function Badges() {

    inquirer.prompt(Questions.IsBadgeNeeded).then(answers => {

        if (answers.IsNeeded == true) {
            GetBadges()
        } else {
            Contributors()
        }
    })
}

function GetBadges() {

BadgeTable[0] = "![node-current (scoped)](https://img.shields.io/node/v/@stdlib/stdlib?style=plastic)"
BadgeTable[1] = "![GitHub Last Commit](https://img.shields.io/github/last-commit/" + docData.UserName + "/" + docData.RepoName +"?style=plastic)"
BadgeTable[2] = "![GitHub](https://img.shields.io/github/license/"+ docData.UserName + "/" + docData.RepoName + "?style=plastic)"
    var badges = {}

    inquirer.prompt(Questions.Badges).then(answers => {

        (answers.Choices).map(item => {

            var selection = item.split(":")[0]
            var index = selection -1
            badges += BadgeTable[index]
        })
        docData["Badges"] = badges;
    }).then(() => {

        DocumentBody()
    })
}




function DocumentBody() {
    console.log("Document Body")

    inquirer.prompt(Questions.Document).then(answers => {
        docData["Title"] = answers.Title
        docData["Description"] = answers.Description
        docData["Install"] = answers.Install
        docData["Usage"] = answers.Usage
        docData["Contributing"] = answers.Contributing
        docData["Testing"] = answers.Testing
        docData["License"] = answers.License
        docData["Contact"] = answers.Contact

    }).then(() => {
        MarkDown(docData)
    })
}





init();