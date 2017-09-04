import datatypes from './datatype'

export default {
  type: datatypes['String'],
  description: 'The default value of the input.  For properties that expect a literal, the default is a literal value, for properties that expect an object, it\'s an ID reference to one of the current values.',
  name: 'Default Value',
}
