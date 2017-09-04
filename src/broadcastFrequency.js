import datatypes from './datatype'

export default {
  type: datatypes['String'],
  description: 'The frequency used for over-the-air broadcasts. Numeric values or simple ranges e.g. 87-99. In addition a shortcut idiom is supported for frequences of AM and FM radio channels, e.g. "87 FM".',
  name: 'Broadcast Frequency',
}
