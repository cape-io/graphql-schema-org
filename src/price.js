import datatypes from './datatype'

export default {
  type: datatypes['String'],
  description: 'The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.  Usage guidelines:   Use the priceCurrency property (with ISO 4217 codes e.g. "USD") instead of   including ambiguous symbols such as \'$\' in the value. Use \'.\' (Unicode \'FULL STOP\' (U+002E)) rather than \',\' to indicate a decimal point. Avoid using these symbols as a readability separator. Note that both RDFa and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting. Use values from 0123456789 (Unicode \'DIGIT ZERO\' (U+0030) to \'DIGIT NINE\' (U+0039)) rather than superficially similiar Unicode symbols.',
  name: 'Price',
}
