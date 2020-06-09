function generateMarkdown(data) {
    var Markdown = []

    Markdown += "# Title:${data.title}"

    Markdown += "### ![profile Image](${data.ProfileImage})"

    Markdown += "### Email: [${data.ProfileEmail}](MailTo:${data.ProfileEmail})"



    Markdown += "### Badges"

    data.Badges.forEach(function (badge, index) {
        Markdown += badge
    })

    if (data.ShowToc) {
        Markdown += "## Table of Contents"
        Markdown += "[Description](#Description)"
        Markdown += "[Usage](#Usage)"
        Markdown += "[Contributors](#Contributors)"

        Markdown += ""
        Markdown += ""
    }



    if (data.Description) {
        Markdown += "## Description"
        Markdown += data.Description

        Markdown += ""
        Markdown += ""
    }

    if (data.installation) {
        Markdown += "## Installation Instructions"
        Markdown += data.installation

        Markdown += ""
        Markdown += ""
    }


    if (data.Usage) {
        Markdown += "## Usage"
        Markdown += data.Usage

        Markdown += ""
        Markdown += ""
    }


    if (data.License) {
        Markdown += "### License"
        Markdown += data.License

        Markdown += ""
        Markdown += ""
    }

    if (data.Contributing) {
        Markdown += "## Contributing"
        Markdown += data.Contributing

        Markdown += ""
        Markdown += ""
    }


    if (data.Test) {
        Markdown += "## Tests"
        Markdown += data.test

        Markdown += ""
        Markdown += ""
    }

    if (data.Contact) {
        Markdown += "### Questions"
        Markdown += "Email: ${data.Contact}"
    }

    return Markdown
}

module.exports = generateMarkdown