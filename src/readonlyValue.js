import datatypes from './datatype'

export default {
  type: datatypes['Boolean'],
  description: 'Whether or not a property is mutable.  Default is false. Specifying this for a property that also has a value makes it act similar to a "hidden" input in an HTML form.',
  name: 'Readonly Value',
}
