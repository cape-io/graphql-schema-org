import datatypes from './datatype'

export default {
  type: datatypes['Int'],
  description: 'The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed.',
  name: 'Best Rating',
}
