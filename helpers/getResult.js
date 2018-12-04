const humidity = require('./getResultHumidity')
const thermometer = require('./getResultThermometer')

const TYPES_OF_SENSORS = {
  thermometer,
  humidity,
}

const isFirstLine = sensorType => {
  return Object.keys(TYPES_OF_SENSORS).includes(sensorType)
}

const getResult = (column, reference, values) => {
  const sensorType = column[0]

  if (TYPES_OF_SENSORS.hasOwnProperty(sensorType)) {
    return TYPES_OF_SENSORS[sensorType](reference[sensorType], values)
  }

  throw new Error('Unknown sensor type')
}

module.exports = {
  isFirstLine,
  getResult,
}
