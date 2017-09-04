import { has, reduce, sortBy, sortedUniq } from 'lodash'
import schemaInfo from './all.json'
import { getDescription } from './util'

const header = '\n// types \n'
export function createFieldTxt(id) {
  if (id === 'yield') return null
  return (`
    ${id},`)
}
export function createFieldsTxt(res, prop) {
  const field = createFieldTxt(prop)
  return field ? res + field : res
}
export function createExportTxt(item) {
  const {
    id, label, properties,
  } = item
  return (`export const ${id} = new GraphQLObjectType({
  description: '${getDescription(item)}',
  name: '${label}',
  fields: () => ({${reduce(sortedUniq(sortBy(properties)), createFieldsTxt, '')}
  }),
})
`)
}

export function createGraphQLField(res, item) {
  const field = createExportTxt(item)
  if (field) return res + field
  return res
}

export default reduce(schemaInfo.types, createGraphQLField, header)
