function generateMarkdown(data) {
    var Markdown = []

    Markdown.push( "# Title:${data.title}")

    Markdown.push("### ![profile Image](${data.ProfileImage})")

    Markdown.push("### Email: [${data.ProfileEmail}](MailTo:${data.ProfileEmail})")



    Markdown.push("### Badges")

    data.Badges.forEach(function (badge, index) {
        Markdown.push(badge)
    })

    if (data.ShowToc) {
        Markdown.push("## Table of Contents")
        Markdown.push("[Description](#Description)")
        Markdown.push("[Usage](#Usage)")
        Markdown.push("[Contributors](#Contributors)")

        Markdown.push("")
        Markdown.push("")
    }



    if (data.Description) {
        Markdown.push("## Description")
        Markdown.push(data.Description)

        Markdown.push("")
        Markdown.push("")
    }
    console.log(Markdown)
    if (data.installation) {
        Markdown.push("## Installation Instructions")
        Markdown.push(data.installation)

        Markdown.push("")
        Markdown.push("")
    }


    if (data.Usage) {
        Markdown.push("## Usage")
        Markdown.push(data.Usage)

        Markdown.push("")
        Markdown.push("")
    }


    if (data.License) {
        Markdown.push("### License")
        Markdown.push(data.License)

        Markdown.push("")
        Markdown.push("")
    }

    if (data.Contributing) {
        Markdown.push("## Contributing")
        Markdown.push(data.Contributing)

        Markdown.push("")
        Markdown.push("")
    }


    if (data.Test) {
        Markdown.push("## Tests")
        Markdown.push(data.test)

        Markdown.push("")
        Markdown.push("")
    }

    if (data.Contact) {
        Markdown.push("### Questions")
        Markdown.push("Email: ${data.Contact}")
    }

    console.log(Markdown)
    return Markdown
}

module.exports = generateMarkdown