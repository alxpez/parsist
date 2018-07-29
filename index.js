/*!
 * parsist
 * Copyright(c) 2018 Alex Perez (alxpez)
 * MIT Licensed
 */

'use strict'


/**
 * Module exports.
 * @public
 */
module.exports = parsist


/**
 * Parse and clean a string of raw items based on the given regex-character delimiters
 * 
 * @param {String} raw Raw text/paragraph to parse and clean
 * @param {(String|String[])} delimiters Delimiters must be valid regex characters
 * @param {Boolean} toString Whether to get the result as a string or not (return an array of strings)
 * @param {String} separator Used as the item separator when returning a string
 * 
 * @public
 */
function parser(raw, delimiters, toString, separator) {
  var delimiter = _regexDelimiter(delimiters)
  var parsed = raw.split(delimiter)
  var cleaned = parsed.reduce(_reducer, [])
  return toString ? cleaned.join(separator || ', ') : cleaned
}


/**
 * Create a regular expression from the given regex-character delimiters
 * 
 * @param {(String|String[])} delimiters
 * 
 * @private
 */
function _regexDelimiter(delimiters) {
  return Array.isArray(delimiters)
    ? new RegExp('['.concat(delimiters.join('')).concat(']'))
    : new RegExp(delimiters)
}


/**
 * Reduce a dirty array to an "even-cased", "trimmed" and with "non-empty-items" one
 * 
 * @param {String[]} accomulator 
 * @param {String} currentItem 
 * 
 * @private
 */
function _reducer(accomulator, currentItem) {
  var normalized = currentItem.toLowerCase().trim()
  if (normalized !== '') accomulator.push(normalized)
  return accomulator
}