import datatypes from './datatype'

export default {
  type: datatypes['String'],
  description: 'Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime). Supersedes requirements.',
  name: 'Software Requirements',
}
