const fs = require('fs');

function readFromTxt(path) {
    const readTxt = fs.readFileSync(path, 'utf-8');
    return readTxt;
}

function writeToTxt(path, str) {
    fs.writeFileSync(path, str, 'utf-8');
}

function addToFile(path, str) {
    fs.appendFileSync(path, str + ' ', 'utf-8');
}


module.exports;