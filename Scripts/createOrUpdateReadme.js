const fs = require('fs');
const path = require('path');

const jsonFilePath = process.argv[2]; 
const readmePath = process.argv[3];

const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
const tableData = jsonData.table;

const tableTemplete = tableData.map(columnData => {
    return (
    `<tr>
            <td style="text-align: right;">${columnData.name || ''}</td>
            <td style="text-align: right;">${columnData.author}</td>
            <td style="text-align: right;">${columnData.durationOrNumberOfParts}</td>
            <td style="text-align: right;">${columnData.language}</td>
            <td style="text-align: right;">
                <a href="${columnData.link}">${columnData.link}</a>   
            </td>
            <td style="text-align: right;">${columnData.notes || ''}</td>
        </tr>`
    )
})

const template = `<div dir="rtl">
    <h1>${jsonData.titlePage}</h1>
    <table>
        <tr>
            <th style="text-align: right;">שם</th>
            <th style="text-align: right;">מחבר</th>
            <th style="text-align: right;">משך הזמן/מס' חלקים</th>
            <th style="text-align: right;">שפה</th>
            <th style="text-align: right;">קישור</th>
            <th style="text-align: right;">הערות</th>
        </tr>
        ${tableTemplete.join('')}
    <table>
</div>`;

const createReadme = (readmePath, template) => {
    const readmeFilename = path.join(__dirname, `../${readmePath}`);
    
    fs.writeFile(readmeFilename, template, (err) => {
        if (err) {
            console.error('Error creating README:', err);
        } else {
            console.log(`${readmeFilename} has been created.`);
        }
    });
}

createReadme(readmePath, template);