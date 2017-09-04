import datatypes from './datatype'

export default {
  type: datatypes['Int'],
  description: 'The CO2 emissions in g/km. When used in combination with a QuantitativeValue, put "g/km" into the unitText property of that value, since there is no UN/CEFACT Common Code for "g/km".',
  name: 'Emissions CO2',
}
