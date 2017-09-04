import { forEach, get } from 'lodash'
import { outputFileSync } from 'fs-extra'
import schemaInfo from './all.json'
import { getDescription } from './util'
import datatypes from '../src/datatype'

export const header = (`import datatypes from './datatype'

`)

export function createExportTxt(item) {
  const {
    label, ranges,
  } = item
  const type = get(datatypes, ranges[0], null)
  return type ? (`export default {
  type: datatypes['${type}'],
  description: '${getDescription(item)}',
  name: '${label}',
}
`) : null
}

export function createGraphQLField(res, item) {
  const field = createExportTxt(item)
  if (field) return res + field
  return res
}
export function createGraphQLFieldFile(item, id) {
  const text = createExportTxt(item)
  if (text) outputFileSync(`./src/${id}.js`, header + text)
}
export default forEach(schemaInfo.properties, createGraphQLFieldFile)
