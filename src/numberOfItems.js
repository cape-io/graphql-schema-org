import datatypes from './datatype'

export default {
  type: datatypes['Int'],
  description: 'The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.',
  name: 'Number of Items',
}
