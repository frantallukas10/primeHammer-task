const math = require('mathjs')

const getPrecision = (
  deviationLinit,
  deviation,
  mean,
  lowerThreshold,
  upperThreshold
) =>
  mean >= lowerThreshold && mean <= upperThreshold && deviation < deviationLinit

const isUltraPresise = (...a) => getPrecision(3, ...a)
const isVeryPresise = (...a) => getPrecision(5, ...a)

const TEMP_THRESHOLD = 0.5

const getResultThermometer = (reference, values) => {
  const MEAN = math.mean(values)
  const DEVIATION = math.std(values)
  const UPPERTRESHOLD = reference + TEMP_THRESHOLD
  const LOWERTHRESHOLD = reference - TEMP_THRESHOLD

  const args = [DEVIATION, MEAN, LOWERTHRESHOLD, UPPERTRESHOLD]

  if (isUltraPresise(...args)) {
    return 'ultra presise'
  }
  if (isVeryPresise(...args)) {
    return 'very presise'
  }
  return 'presise'
}

module.exports = getResultThermometer
