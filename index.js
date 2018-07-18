const sample = `
Ruben blades
Datsik
Rusko

Allah las
Darkside
Air

ali farka & toumani diabate
Lunacidal tendencies
Kocani orkestar

highlight tribe
Mija shitrit

hippiehaus (Secret blue)
Jon swift
* Growndation
Hazmat modine
Xavier rudd
* Hol baumann
Fritz kalkbrenner

steel pulse
Emeterians
Blueskank
Pyramid blue
Hot drop
Tasty grooves
Katchafire. 
NAtural vibrations. 
Beirut
.hyperpotamus
.James Vincent mc morroe. 
Lali puna. 
Max romeo. 
Metronomy. 
Phoenix. 
Non palidece.
satellite stories. 
Samamidon. 
Trixie whitley. 
Yo la tengo. 
Zuco 103. 
Abyssians. 
Adem. 
The album leaf. 
Alt J. 
Ani di franco. 
Balmorhea. 
Baobab. 
Clinton fearon. 
Death cab for cutie.
 East park reggae collective. Fink.freelance whales. 
 Heptones. 
 Horace andy
 Iron & wine. 
The ethiopians. 
Israel vibrations.
 Fat freddys drop. 
 Lone ark. 
 
Camille
Junior kelly
`

const sampleDelimiters = ['\\.', '\\,', '\\n', '\\*', '\\t', '\\r']

// --------------------------------------------------------------------- //




/**
 * Create a regexp from the given delimiters
 * 
 * @param {String[]} delimiters 
 */
function regexDelimiter(delimiters) {
  return new RegExp('['.concat(delimiters.join('')).concat(']'))
}


/**
 * Reduce a dirty array to an "even-cased, trimmed and non-empty-items" one
 * 
 * @param {String[]} accomulator 
 * @param {String} currentItem 
 */
function reducer(accomulator, currentItem) {
  let normalized = currentItem.toLowerCase().trim()
  if (normalized != '') accomulator.push(normalized)
  return accomulator
}


/**
 * Parse and clean a string of raw items based on the given delimiter
 * 
 * @param {String} raw 
 * @param {String[]} delimiters
 */
function parser(raw, delimiters) {
  let delimiter = regexDelimiter(delimiters)
  let parsed = raw.split(delimiter)
  let cleaned = parsed.reduce(reducer, [])
  console.log(cleaned)

  return cleaned
}


// RUN TEST
parser(sample, sampleDelimiters)