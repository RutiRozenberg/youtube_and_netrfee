const fs = require('fs');
const path = require('path');
const { getLinkJsonData } = require('./formatJson');

const jsonFilePath = process.argv[2]; 
const name = process.argv[3]; 
const author = process.argv[4]; 
const durationOrNumberOfParts = process.argv[5]; 
const language = process.argv[6]; 
const link = process.argv[7]; 
const notes = process.argv[8]; 

const jsonLinkData = getLinkJsonData(name, author, durationOrNumberOfParts, language, link, notes);

const writeUpdateDataToJsonFile = (jsonFilename, jsonData) => {

    fs.writeFile(jsonFilename, JSON.stringify(jsonData, null, 4), (err) => {
        if (err) {
            console.error('Error writing JSON file:', err);
        } else {
            console.log('Object added successfully.');
        }
    });
}

const addLinkData = (jsonLinkData) =>{
    
    const jsonFilename = path.join(__dirname, `../${jsonFilePath}`);

    fs.readFile(jsonFilename, 'utf8', (err, data) => {
        
        if (err) {
            console.error('Error reading JSON file:', err);
            return;
        }
    
        const jsonData = JSON.parse(data);
        jsonData.table.push(jsonLinkData); 
        writeUpdateDataToJsonFile(jsonFilename, jsonData)
       
    });
}

addLinkData(jsonLinkData);