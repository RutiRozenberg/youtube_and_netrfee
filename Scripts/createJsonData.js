const fs = require('fs');
const path = require('path');
const { getTableJsonData } = require('./formatJson');

const jsonFilePath = process.argv[2]; 
const pageTitle = process.argv[3]; 
const name = process.argv[4]; 
const author = process.argv[5]; 
const durationOrNumberOfParts = process.argv[6]; 
const language = process.argv[7]; 
const link = process.argv[8]; 
const notes = process.argv[9];

const tableJsonDate = getTableJsonData(pageTitle, name, author, durationOrNumberOfParts, language, link, notes);

const createJsonFile = (jsonFilePath, jsonData) => {
    const jsonFilename = path.join(__dirname, `../${jsonFilePath}`);

    fs.writeFile(jsonFilename, JSON.stringify(jsonData, null, 4), (err) => {
        if (err) {
            console.error('Error creating JSON file:', err);
        } else {
            console.log(`${jsonFilename} has been created.`);
        }
    });
}

createJsonFile(jsonFilePath, tableJsonDate); 