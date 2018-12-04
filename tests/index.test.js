const fs = require('fs')
const fileString = fs.readFileSync('./input/data.txt', 'utf-8')
const evaluateLogFile = require('../evaluateLogFile')

describe('Test file reading data with fs', () => {
  test('1st sample', () => {
    expect(evaluateLogFile(fileString)).toMatchSnapshot()
  })
})
