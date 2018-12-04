const { getResult, isFirstLine } = require('./helpers/getResult')
const getReference = require('./helpers/getReference')

const evaluateLogFile = data => {
  let CONTENT_FILE = [],
    REFERENCE = {},
    VALUES = [],
    RESULT = {}
  const SPLIT_LINES = data.split('\n')
  const SPLIT_COLUMNS = SPLIT_LINES.map(line => line.split(' '))
  SPLIT_COLUMNS.forEach((column, index, array) => {
    if (index === 0) {
      REFERENCE = getReference(...column)
      return
    }
    const FIRST_LINE = isFirstLine(...column)
    if (FIRST_LINE) {
      if (CONTENT_FILE.length !== 0) {
        // reset interator
        // initial sensorName
        RESULT[CONTENT_FILE[1]] = getResult(CONTENT_FILE, REFERENCE, VALUES)
      }
      VALUES = []
      CONTENT_FILE = column
      return
    }
    if (index === array.length - 1) {
      RESULT[CONTENT_FILE[1]] = getResult(CONTENT_FILE, REFERENCE, VALUES)
    }
    VALUES.push(parseFloat(column[1]))
  })
  return RESULT
}

module.exports = evaluateLogFile
