// Author: Ernest Correale
// Date: June-2020
// Purpose: Create Readme file from user input


const inquirer = require('inquirer')
const colors = require('colors/safe')
const axios = require('axios')
const fs = require('fs')

const Questions = require("./utils/questions")
const MarkDown = require("./utils/Markdown")

const apiUrl = "https://api.github.com"
const licenseApi = "https://api.github.com/licenses"

var licenseDict = {}
var docData = {}


// Fill license dictionary async
axios.get(licenseApi).then(results => {

    if (!results) {
        throw ("Unable to reach License API")
    } else {

        results.data.forEach(function (license) {
            licenseDict[license.name] = license
        })
    }
})

init()
function init() {
    PrintHeader("Github Readme Generator")

    inquirer.prompt(Questions.Account()).then(answers => {
        var eMailAddr
        const profileApi = apiUrl + "/users/" + answers.userName
        const repoName = answers.repoName

        axios.get(profileApi).then(results => {
                if (!results) {
                    console.error("Unable to reach supplied Repo URL")
                    throw "Please confoirm the supplied repo URL is correct and try again"
                }
                var data = results.data

                if (!data.email) {
                    eMailAddr = ""
                } else {
                    eMailAddr = (data.email)
                }

                docData["UserName"] = answers.userName
                docData["Author"] = answers.Author
                docData["RepoName"] = repoName
                docData["ProfileImage"] = data.avatar_url
                docData["eMail"] = eMailAddr

            })
            .then(() => {
                AskDocTitle()
            })
    })
}

function AskDocTitle() {

    inquirer.prompt(Questions.AskDocumemtTitle).then(answer => {
        docData["DocumentTitle"] = answer.DocumentTitle

    }).then(() => {
        SelectLicense()
    })
}

function SelectLicense() {

    var options = Object.keys(licenseDict)

    inquirer.prompt(Questions.SelectLicense(options)).then(answers => {
        var license = licenseDict[answers.SelectedLicense]

        docData["License"] = answers.SelectedLicense
        GetLicenseText(license.url)

    }).then(() => {
        IsBadgeNeeded()
    })
}


function IsBadgeNeeded() {
    inquirer.prompt(Questions.IsBadgeNeeded).then(answers => {

        if (answers.IsNeeded == true) {
            SelectBadge()
        } else {
            DocumentBody()
        }
    })
}

function SelectBadge() {

    var BadgeDict = []
    var badgeArr = []

    BadgeDict["Latest Node version badge"] = "![node-current (scoped)](https://img.shields.io/node/v/@stdlib/stdlib?style=plastic)"
    BadgeDict["GitHub, last commit badge"] = "![GitHub Last Commit](https://img.shields.io/github/last-commit/" + docData.UserName + "/" + docData.RepoName + "?style=plastic)"
    BadgeDict["License Badge"] = "![GitHub](https://img.shields.io/github/license/" + docData.UserName + "/" + docData.RepoName + "?style=plastic)"

    var options = Object.keys(BadgeDict)
    inquirer.prompt(Questions.SelectBadge(options)).then(answers => {
        (answers.Choices).map(item => {
            badgeArr.push(BadgeDict[item])
        })

        docData["Badges"] = badgeArr
    }).then(() => {
        DocumentBody()
    })
}


function DocumentBody() {
    // Prompt for document body sections and add to docData for display in ReadMe
    inquirer.prompt(Questions.DocumentQuestions).then(answers => {

        docData["ShowToc"] = answers.ShowTOC
        docData["SummaryText"] = answers.SummaryText
        docData["DescriptionText"] = answers.DescriptionText
        docData["Install"] = answers.Install
        docData["Usage"] = answers.Usage
        docData["Contributing"] = answers.Contributing
        docData["Testing"] = answers.Testing
        docData["Contact"] = answers.Contact

    }).then(() => {

        var markdown = MarkDown(docData)

        // Write markdown array to file
        WriteToFile("README.MD", markdown)
    })
}

function GetLicenseText(LicenseApiUrl) {

    axios.get(LicenseApiUrl).then(results => {

        if (!results) {
            throw ("Unable to reach License API for license text")
        }

        LicenseParser(results)
    })
}


function LicenseParser(results) {

    var year = (new Date()).getFullYear()
    var AuthorName = docData["Author"]

    var foundYear = false
    var foundName = false

    //Used to detect when a change is made
    var rawText = results.data.body
    var licenseText = rawText

    // Document tag replacements
    var nameFields = [
        "fullname",
        "name",
        "name of copyright owner",
        "name of author"
    ]

    var yearFields = [
        "year",
        "yyyy"
    ]

    var braces = [
        "[ ]",
        "[[ ]]",
        "< >",
        "<< >>"
    ]

    // Loop through dyanmically created tag fields replacing in document
    braces.forEach(brace => {

        if (!(foundName && foundYear)) {

            if (!foundName) {
                nameFields.forEach(nameField => {

                    tag = brace.replace(" ", nameField)
                    licenseText = rawText.replace(tag, AuthorName)

                    if (licenseText != rawText) {
                        foundName = true
                        rawText = licenseText //Update for next test
                    }
                })
            }

            if (!foundYear) {
                yearFields.forEach(yearField => {
                    tag = brace.replace(" ", yearField)
                    licenseText = rawText.replace(tag, year)

                    if (licenseText != rawText) {
                        foundYear = true
                        rawText = licenseText //Update for next test
                    }
                })
            }
        }
    })
    docData["licenseText"] = licenseText
    WriteToFile("LICENSE", licenseText)
} // Close: function


function WriteToFile(FileName, Data) {

    // Throw error if no data is passed
    if (!Data) {
        throw "Error: Cannot write file.  No data passed to function"
    }

    var FILESTREAM = fs.createWriteStream(FileName)

    //Error handler
    FILESTREAM.on('error', function (err) {
        console.log("Error opening Filehandle")
        console.log(err)
    })

    if (typeof (Data) == "string") {
        FILESTREAM.write(`${Data}\n`)

    } else {

        // Hash,Write array 1 element per line
        Data.map(arrayElement => {
            FILESTREAM.write(`${arrayElement}\n`)
        })
    }

    FILESTREAM.end
}

function PrintHeader(HeaderText) {

    const length = HeaderText.length + 4
    const bar = "-".repeat(length)

    const header = bar + "\n  " + HeaderText + "  \n" +bar
    console.log( colors.brightGreen(header) )

}