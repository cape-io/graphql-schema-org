import { GraphQLBoolean, GraphQLFloat, GraphQLInt, GraphQLString } from 'graphql'
import { GraphQLDate } from 'graphql-iso-date'
import { GraphQLUrl } from 'graphql-url'

export default {
  Boolean: GraphQLBoolean,
  Date: GraphQLDate,
  Float: GraphQLFloat,
  Integer: GraphQLInt,
  Number: GraphQLInt,
  Text: GraphQLString,
  URL: GraphQLUrl,
  // DataType: ,
  DateTime: GraphQLDate,
  Time: GraphQLDate,
}
