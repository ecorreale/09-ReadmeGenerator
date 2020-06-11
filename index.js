const inquirer = require('inquirer')
const path = require('path');
const axios = require('axios')
const fs = require('fs')

const Questions = require("./utils/questions")
const MarkDown = require("./utils/Markdown")

$licenses = Questions.GetLicenses

const licenseApi = "https://api.github.com/licenses"
var licenseHash = {}
var licenseArr = []
var IDX = 1

var docData = {}

function init() {
    const apiUrl = "https://api.github.com"
return

    inquirer.prompt(Questions.Repo).then(answers => {
            var eMailAddr
            const profileApi = apiUrl + "/users/" + answers.userName

            const repoName = answers.repoName
            const repoApi = apiUrl + "/repos/" + answers.userName + "/" + repoName.replace(/ /g, "-")

                axios.get(profileApi).then(results => {
                    if (!results) {
                        console.error("Unable to reach supplied Repo URL")
                        throw "Please confoirm the supplied repo URL is correct and try again"
                    }
                    if (!results.data.email) {
                        eMailAddr = "None Provided"
                    } else {
                        eMailAddr = (results.data.email)
                    }

                    docData["UserName"] = answers.userName
                    docData["RepoName"] = repoName
                    docData["ProfileImage"] = results.data.avatar_url
                    docData["eMail"] = eMailAddr
                })
                .then(() => {

                    Badges()
                })
            })
    }

    function Badges() {

        inquirer.prompt(Questions.IsBadgeNeeded).then(answers => {

            if (answers.IsNeeded == true) {
                // Go to next step
                GetBadges()
            } else {
                // Go to next step
                Contributors()
            }
        })
    }

    function GetBadges() {

        var BadgeTable = []
        BadgeTable[0] = "![node-current (scoped)](https://img.shields.io/node/v/@stdlib/stdlib?style=plastic)"
        BadgeTable[1] = "![GitHub Last Commit](https://img.shields.io/github/last-commit/" + docData.UserName + "/" + docData.RepoName + "?style=plastic)"
        BadgeTable[2] = "![GitHub](https://img.shields.io/github/license/" + docData.UserName + "/" + docData.RepoName + "?style=plastic)"
        var badges = []

        inquirer.prompt(Questions.Badges).then(answers => {

            (answers.Choices).map(item => {

                var selection = item.split(":")[0]
                var index = selection - 1
                badges.push(BadgeTable[index])
            })
            docData["Badges"] = badges;
        }).then(() => {

            // Go to next step
            DocumentBody()
        })
    }


    function DocumentBody() {
        // Prompt for document body sections and add to docData for display in ReadMe
        inquirer.prompt(Questions.Document).then(answers => {
            docData["DocTitle"] = answers.DocTitle
            docData["ShowToc"] = answers.ShowTOC
            docData["DescriptionText"] = answers.DescriptionText
            docData["Install"] = answers.Install
            docData["Usage"] = answers.Usage
            docData["Contributing"] = answers.Contributing
            docData["Testing"] = answers.Testing
            docData["License"] = answers.License.split(". ")[1]
            docData["Contact"] = answers.Contact

        }).then(() => {
            var markdown = MarkDown(docData)

            console.log(markdown)

            // Write markdown array to file
            writeToFile(markdown)
        })
    }



    function writeToFile(dataArray) {
        var fileName = "README.MD"

        //Open file handle
        var FILESTREAM = fs.createWriteStream(fileName)

        //Error handler
        FILESTREAM.on('error', function (err) {
            console.log("Error opening Filehandle")
            console.log(err)
        })

        //Write array 1 element per line
        dataArray.forEach(arrayElement => FILESTREAM.write(`${arrayElement}\n`))
        console.log("Complete. " + fileName)

        FILESTREAM.end
    }


    init();