import datatypes from './datatype'

export default {
  type: datatypes['String'],
  description: 'The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text.       If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property.',
  name: 'Bed',
}
