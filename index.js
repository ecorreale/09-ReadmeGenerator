const inquirer = require('inquirer')
const axios = require('axios')
const fs = require('fs')
const Questions = require("./utils/questions")


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log("File Updated");
    });
}

function init() {
    let myURL = ""
    let apiUrl = "https://api.github.com"

    //  https://github.com/ecorreale/09-ReadmeGenerator
    // https://api.github.com/users/ecorreale
    // ecorreale

    inquirer.prompt(Questions.RepoQuestions).then(answers => {

        try {
            //Use URL class to parse out the URL Path
             myURL = new URL(answers.repoUrl)
        } catch {
            console.error("Error parsing supplied repo url")
        }

      let  repoName = (myURL.pathname).split('/')[2]
      let  profileApiUrl = apiUrl + "/users/" + answers.userName
      let  repoApiUrl = profileApiUrl + "/" + repoName

        axios.get(profileApiUrl).then((results) => {
            if (!results) {
                console.error("Unable to reach supplied Repo URL")
                throw "Please confoirm the supplied repo URL is correct and try again"
            }

            const profileImageUrl = results.data.avatar_url
            const email = results.data.email

            console.log(profileImageUrl)
            console.log(email)
        });

    });


    // let userName = "ecorreale"
    // const queryUrl = `https://api.github.com/users/${userName}/repos`;
    // axios.get(queryUrl).then(function (res) {
    //         console.log(res.data[0].name);
    //     });

}

init();