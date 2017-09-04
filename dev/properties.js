import { get, reduce } from 'lodash'
import schemaInfo from './all.json'
import { getDescription } from './util'

export const header = (`import { GraphQLBoolean, GraphQLFloat, GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql'
import { GraphQLDate } from 'graphql-date'
import { GraphQLUrl } from 'graphql-url'

`)
export const datatypes = {
  Boolean: 'GraphQLBoolean',
  Date: 'GraphQLDate',
  // DataType: ,
  Float: 'GraphQLFloat',
  Integer: 'GraphQLInt',
  Number: 'GraphQLFloat',
  Text: 'GraphQLString',
  URL: 'GraphQLUrl',
  DateTime: 'GraphQLDate',
  Time: 'GraphQLDate',
}
export function createExportTxt(item) {
  const {
    id, label, ranges,
  } = item
  const type = get(datatypes, ranges[0], ranges[0])
  return (`export const ${id} = {
  type: ${type},
  description: '${getDescription(item)}',
  name: '${label}',
}
`)
}

export function createGraphQLField(res, item) {
  const field = createExportTxt(item)
  if (field) return res + field
  return res
}

export default reduce(schemaInfo.properties, createGraphQLField, header)
