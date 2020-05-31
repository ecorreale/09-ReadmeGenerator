const inquirer = require('inquirer')
const path = require('path');
const axios = require('axios')
const fs = require('fs')
const Questions = require("./utils/questions")


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log("File Updated");
    });
}


// ToDo:Add question for Contributors

//  ToDo: Add confirm for Badges

//ToDo: ![node-current (scoped)](https://img.shields.io/node/v/@stdlib/stdlib?style=plastic)
function init() {
    const apiUrl = "https://api.github.com"

    //  https://github.com/ecorreale/09-ReadmeGenerator
    // https://api.github.com/users/ecorreale
    // ecorreale

    inquirer.prompt(Questions.Account).then(answers => {
        const profileApi = apiUrl + "/users/" + answers.userName

        const repoName = answers.repoName
        const repoApi = profileApi + "/" + repoName.replace(/ /g, "-")

        axios.get(profileApi).then((results) => {
            if (!results) {
                console.error("Unable to reach supplied Repo URL")
                throw "Please confoirm the supplied repo URL is correct and try again"
            }

            const profileImageUrl = results.data.avatar_url
            const emailAddr = results.data.email

            console.log(profileImageUrl)
            console.log(emailAddr)
        });

    });

}

init();