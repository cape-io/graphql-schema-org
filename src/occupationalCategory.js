import datatypes from './datatype'

export default {
  type: datatypes['String'],
  description: 'Category or categories describing the job. Use BLS O*NET-SOC taxonomy: http://www.onetcenter.org/taxonomy.html. Ideally includes textual label and formal code, with the property repeated for each applicable value.',
  name: 'Occupational Category',
}
