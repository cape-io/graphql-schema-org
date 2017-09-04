import datatypes from './datatype'

export default {
  type: datatypes['String'],
  description: 'The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See GS1 GTIN Summary for more details.',
  name: 'Gtin12',
}
