const getReference = (check, thermometer, humidity) => {
  if (
    check !== 'reference' ||
    isNaN(parseFloat(thermometer)) ||
    isNaN(parseFloat(humidity))
  ) {
    throw new Error(`First line of file should start with reference line and
      it shoud contain referenc text,
      thermometer value should number,
      humidity value should number.
      actual values are: ${(check, thermometer, humidity)}`)
  }
  return {
    thermometer: parseFloat(thermometer),
    humidity: parseFloat(humidity),
  }
}

module.exports = getReference
