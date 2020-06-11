function generateMarkdown(data) {
    console.log("In Markdown")
    console.log(data)

    var Markdown = []

    Markdown.push( "# " + data.DocTitle)

    Markdown.push("![profile Image](" + data.ProfileImage + "){:height='36px' width='36px'}")

    Markdown.push("### Email: " + data.eMail)

    Markdown.push("### Badges")

    data.Badges.forEach(function (badge, index) {
        Markdown.push(badge)
    })

    if (data.ShowToc) {
        Markdown.push("## Table of Contents")
        Markdown.push("[Description](#Description)")
        Markdown.push("[Usage](#Usage)")
        Markdown.push("[Contributors](#Contributors)")

        Markdown.push("<br/>")
    }



    if (data.DescriptionText) {
        Markdown.push("## Description")
        Markdown.push(data.DescriptionText)
        Markdown.push("<br/>")
    }

    if (data.installation) {
        Markdown.push("## Installation Instructions")
        Markdown.push(data.installation)
        Markdown.push("<br/>")
    }


    if (data.Usage) {
        Markdown.push("## Usage")
        Markdown.push(data.Usage)
        Markdown.push("<br/>")
    }


    if (data.License) {
        Markdown.push("### License")
        Markdown.push(data.License)
        Markdown.push("")

    }

    if (data.Contributing) {
        Markdown.push("## Contributing")
        Markdown.push(data.Contributing)
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