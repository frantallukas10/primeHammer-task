const getReference = require('../helpers/getReference')

describe('Test check getReference function', () => {
  let check, thermometer, humidity
  test('1st sample', () => {
    check = 'reference'
    thermometer = '70.0'
    humidity = '45.0'
    expect(getReference(check, thermometer, humidity)).toMatchSnapshot()
  })

  test('2st sample', () => {
    check = ''
    thermometer = '70.0'
    humidity = '45.0'
    expect(() => {
      getReference(check, thermometer, humidity)
    }).toThrowErrorMatchingSnapshot()
  })
  test('3st sample', () => {
    check = 'reference'
    thermometer = ''
    humidity = ''
    expect(() => {
      getReference(check, thermometer, humidity)
    }).toThrowErrorMatchingSnapshot()
  })
  test('4st sample', () => {
    check = 'reference'
    thermometer = ''
    humidity = '45.0'
    expect(() => {
      getReference(check, thermometer, humidity)
    }).toThrowErrorMatchingSnapshot()
  })
  test('5st sample', () => {
    check = 'reference'
    thermometer = 'bla'
    humidity = 'bla'
    expect(() => {
      getReference(check, thermometer, humidity)
    }).toThrowErrorMatchingSnapshot()
  })
  test('6st sample', () => {
    check = 'reference'
    thermometer = 'undefined'
    humidity = '10'
    expect(() => {
      getReference(check, thermometer, humidity)
    }).toThrowErrorMatchingSnapshot()
  })
  test('7st sample', () => {
    check = 'reference'
    thermometer = 'null'
    humidity = '10'
    expect(() => {
      getReference(check, thermometer, humidity)
    }).toThrowErrorMatchingSnapshot()
  })
  test('8st sample', () => {
    check = 'reference'
    thermometer = 'NaN'
    humidity = '10'
    expect(() => {
      getReference(check, thermometer, humidity)
    }).toThrowErrorMatchingSnapshot()
  })
})
