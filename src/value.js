import datatypes from './datatype'

export default {
  type: datatypes['String'],
  description: 'The value of the quantitative value or property value node.   For QuantitativeValue and MonetaryAmount, the recommended type for values is \'Number\'. For PropertyValue, it can be \'Text;\', \'Number\', \'Boolean\', or \'StructuredValue\'.',
  name: 'Value',
}
