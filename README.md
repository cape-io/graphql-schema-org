# graphql-schema-org

Trying to convert schema.org definitions into graphql objects.

## Usage

If you want access to the entire thing all in one import:

`import { brand, Thing } from 'graphql-schema-org'`

If you want to import specific fields:

`import url from 'graphql-schema-org/lib/url'`

Need to use GraphQLUnionType when many possible types. How to programmatically create `resolveType`?

Warning: The index import is 1MB in file size.
