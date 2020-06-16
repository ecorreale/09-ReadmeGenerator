function generateMarkdown(data) {

    // Text Array
    var Markdown = []
    const imageHeight = 135
    const detailBoxHeight = imageHeight + 10

    Markdown.push("# " + data.DocumentTitle)
    Markdown.push("")

    Markdown.push("<img src='" + data.ProfileImage +
        "' height='" + imageHeight +"' style='float:left;margin:10px'>")
    Markdown.push("")

    // Table of Contents Right-Justified on page
    if (data.ShowToc) {

        Markdown.push("<div style='float:right;margin-right:35px;;margin-top:-20px'>\n")

        Markdown.push("#### Table of Contents\n")

        Markdown.push("- [" + data.DocumentTitle + "](#)")

        if (data.DescriptionText) {
            Markdown.push("  - [Description](#Description)")
        }
        if (data.Usage) {
            Markdown.push("  - [Usage](#Usage)")
        }
        if (data.License) {
            Markdown.push("  - [License](#License)")
        }

        if (data.DescriptionText) {
            Markdown.push("  - [Comments](#Comments)")
        }
        if (data.Install) {
            Markdown.push("  - [Installation](#Installation)")
        }

        Markdown.push(" ")
        Markdown.push("</div>")
    }



    // Create property details box
    Markdown.push("<div style='min-height:" + detailBoxHeight + "px;'\n")

    if (data.Author) {
        Markdown.push("**Author:** " + data.Author)
        Markdown.push("<br/>")
    }

    if (data.License) {
        Markdown.push("**License:** " + data.License)
        Markdown.push("<br/>")
    }
    if (data.SummaryText) {
        Markdown.push("**Summary:** " + data.SummaryText)
    }

    Markdown.push("\n</div>\n")


    // Print out each selected badge
    data.Badges.forEach(function (badge, index) {
        Markdown.push(badge)
    })


    if (data.DescriptionText) {
        Markdown.push("# Description")
        Markdown.push(data.DescriptionText)
        Markdown.push(" ")
    }


    if (data.eMail) {
        Markdown.push("### Email: <" + data.eMail + ">")
    }


    if (data.Install) {
        Markdown.push("# Installation Instructions")
        Markdown.push(data.Install)
        Markdown.push(" ")
    }


    if (data.Usage) {
        Markdown.push("# Usage")
        Markdown.push(data.Usage)
        Markdown.push(" ")
    }

    if (data.licenseText) {
        Markdown.push("# License")
        Markdown.push(data.licenseText)
        Markdown.push(" ")
    }



    if (data.Contributing) {
        Markdown.push("# Contributing")
        Markdown.push(data.Contributing)
        Markdown.push(" ")
    }


    if (data.Testing) {
        Markdown.push("# Testing")
        Markdown.push(data.Testing)
        Markdown.push(" ")
    }


    Markdown.push("### If you have any questions email us @")
    if (data.Contact) {
        Markdown.push("<" + data.Contact + ">")
    } else {
        Markdown.push("Please contact me through GitHub")
    }
    return Markdown
}

module.exports = generateMarkdown