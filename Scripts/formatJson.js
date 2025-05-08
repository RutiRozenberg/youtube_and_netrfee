const getLinkJsonData = (name, author, durationOrNumberOfParts, language, link, notes) => {
    return {
        name,
        author,
        durationOrNumberOfParts,
        language,
        link,
        notes
    };
};

const getTableJsonData = (titlePage, name, author, durationOrNumberOfParts, language, link, notes) => {
    return{
        titlePage,
        table: [getLinkJsonData(name, author, durationOrNumberOfParts, language, link, notes)]
    }
}

module.exports = {getLinkJsonData, getTableJsonData}