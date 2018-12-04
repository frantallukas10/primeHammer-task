const evaluateLogFile = require('./evaluateLogFile')
const fs = require('fs')

const fileContents = INPUT_FILE => fs.readFileSync(INPUT_FILE, 'utf8')

const INPUT_FILE = './input/data.txt'
const DATA = fileContents(INPUT_FILE)

console.log(JSON.stringify(evaluateLogFile(DATA)))
