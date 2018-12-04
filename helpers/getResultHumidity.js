const math = require('mathjs')

const PERCENTAGE_THRESHOLD = 0.01

const getResultHumidity = (reference, values) => {
  const THRESHOLD = math.multiply(reference, PERCENTAGE_THRESHOLD)
  const UPPERTHRESHOLD = reference + THRESHOLD
  const LOWERTHRESHOLD = reference - THRESHOLD
  return values.every(v => v >= LOWERTHRESHOLD && v <= UPPERTHRESHOLD)
    ? 'keep'
    : 'discard'
}

module.exports = getResultHumidity
