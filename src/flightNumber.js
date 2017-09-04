import datatypes from './datatype'

export default {
  type: datatypes['String'],
  description: 'The unique identifier for a flight including the airline IATA code. For example, if describing United flight 110, where the IATA code for United is \'UA\', the flightNumber is \'UA110\'.',
  name: 'Flight Number',
}
