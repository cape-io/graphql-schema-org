import datatypes from './datatype'

export default {
  type: datatypes['Url'],
  description: 'A URL pointing to a player for a specific video. In general, this is the information in the src element of an embed tag and should not be the same as the content of the loc tag.',
  name: 'Embed Url',
}
