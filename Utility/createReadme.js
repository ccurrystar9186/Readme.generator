function createReadme(data) { //this template show  data from the index.js file and uses is to write the ReadMe. The "#" are to the headings but looks indifferent then the actual file ¯\_(ツ)_/¯
    return `# ${data.title}
    ## Purpose
    ${data.description}
    ## Function
    ${data.function}
    ## License
    ${data.license}
    ## Collaborators
    ${data.collaborators}`
}

module.exports = createReadme;
