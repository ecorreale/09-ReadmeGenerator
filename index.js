const inquirer = require('inquirer')
const path = require('path');
const axios = require('axios')
const fs = require('fs')
const Questions = require("./utils/questions")
 var badges = {}


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log("File Updated");
    });
}
//  https://github.com/ecorreale/09-ReadmeGenerator
// https://api.github.com/users/ecorreale
// ecorreale

// ToDo:Add question for Contributors

//  ToDo: Add confirm for Badges

//ToDo: ![node-current (scoped)](https://img.shields.io/node/v/@stdlib/stdlib?style=plastic)


function init() {
    const apiUrl = "https://api.github.com"


    inquirer.prompt(Questions.Repo).then(answers => {
        const profileApi = apiUrl + "/users/" + answers.userName

        const repoName = answers.repoName
        const repoApi = profileApi + "/" + repoName.replace(/ /g, "-")

        axios.get(profileApi).then(results => {
                if (!results) {
                    console.error("Unable to reach supplied Repo URL")
                    throw "Please confoirm the supplied repo URL is correct and try again"
                }

                const profileImageUrl = results.data.avatar_url
                const emailAddr = results.data.email

            })
            .then(() => {
                console.log("\n---------------Then--------------------\n")
                getBadges()
            })
    })
}

function getBadges() {
    var badgeKey = ""
    inquirer.prompt(Questions.IsBadgeNeeded).then(answers => {

        if (answers.IsBadgeNeeded) {

            inquirer.prompt(Questions.Badges).then(answers => {

                (answers.badgesSelected).map(item => {
                    badgeKey = item.split(":")[0]
                    badgeValue = item.split(":")[1]

                    badges[badgeKey] = badgeValue
                })

            }).then(() => {
                console.log("\n---------------Then--------------------\n")
                contributors()
            })
        }
    })
}

function contributors() {
    inquirer.prompt(Questions.AnyContributors).then(answers => {
        if (answers.HasContributor) {
            repeatingQuestion(Questions.Contributors)
        }
    })
}


function repeatingQuestion(Question) {
    inquirer.prompt(Question).then(answers => {
        output.push(answers.value);
        if (answers.askAgain) {
            repeatingQuestion(Question);
        } else {
            console.log('List: ', output.join(', '));
        }
    });
}

init();