var parser = require('../index')


// Example of a raw dirty and unorganized text list of bands
var sample = `
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

// Delimiter regex test options
var sampleDelimiters = ['\\.', '\\,', '\\n', '\\*', '\\t', '\\r']
var sampleRegexDelimiters = '[\\.\\,\\n\\*\\t\\r]'


// --------------------------------------------------------------------- //


// Return as an array of strings
var resultArray = parser(sample, sampleDelimiters)
console.log(resultArray)

// Return in text format with a line-break as the separator
var resultText = parser(sample, sampleRegexDelimiters, true, '\n')
console.log('\n' + resultText)

// Return in text format with the default separator
var resultTextDefSep = parser(sample, sampleRegexDelimiters, true)
console.log('\n' + resultTextDefSep)


// README examples
var raw = `
  sample  ,
, raw  .  
text *  to 
  parse
`

var delimiter = '[\\.\\,\\n\\*\\t]'

// One example
console.log(
  parser(raw, delimiter, true, '\n')
)

// Another example
console.log(
  parser(raw, delimiter, true, ', ')
)