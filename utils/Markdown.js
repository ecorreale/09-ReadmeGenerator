function generateMarkdown(data) {

    // Text Array
    var Markdown = []

    Markdown.push("# " + data.DocumentTitle)
    Markdown.push("<img src='" + data.ProfileImage + "' width='125px' style='float:right'>")

    if (data.ShowToc) {
        Markdown.push(
            ` <ul>
            <li>[${data.DocumentTitle}](#${data.DocumentTitle}) </li>
            <ul>
                <li>[Description](#Description)</li>
                <li>[Usage](#Usage)</li>
                <li>[Comments}](#Comments)</li>
            </ul>
        </ul>`
        )
    }

    if (data.License) {
        Markdown.push("### Licensing")
        Markdown.push("Licensed Under: " + data.License)
        Markdown.push("<br>")
    }


    // Markdown.push("### Badges")

    data.Badges.forEach(function (badge, index) {
        Markdown.push(badge)
    })


    if (data.DescriptionText) {
        Markdown.push("## Description")
        Markdown.push(data.DescriptionText)
        Markdown.push("<br/>")
    }


    if (data.eMail) {
        Markdown.push("### Email: " + data.eMail)
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


    if (data.Contributing) {
        Markdown.push("## Contributing")
        Markdown.push(data.Contributing)
        Markdown.push("<br/>")

    }


    if (data.Test) {
        Markdown.push("## Tests")
        Markdown.push(data.test)
        Markdown.push("<br/>")

    }


    Markdown.push("### Comments/Questions")
    if (data.Contact) {
        Markdown.push(data.contact)
    } else {
        Markdown.push("Please contact me through GitHub")
    }
    return Markdown
}

module.exports = generateMarkdown