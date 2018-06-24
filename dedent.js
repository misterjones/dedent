import {
  isTemplateStringObject,
  minimumLeadingWhitespaceOf,
  splitIntoLines,
} from './utils.js'

/**
 * Removes code-formatting indentation from multiline template/string literals.  
 * Can be called as a "standard" function or as a tag function.
 * @param {(string|string[])} strings A multiline String or an Array of Strings via a tag function.
 * @param {*} [keys] Template expressions via a tag function.
 * 
 * @returns {string} Multiline String with corrected indentation.
 */
const dedent = function dedentMultilineTemplateOrStringLiteral(strings, ...keys) {
  const string = (isTemplateStringObject(strings))
    ? String.raw(strings, ...keys)
    : strings
  
	const lines = splitIntoLines(string)
	const baselineIndentation = minimumLeadingWhitespaceOf(lines)
	
  const dedentedString =
    lines
      .map(line => line.substr(baselineIndentation))
      .join('\n')
  
  return dedentedString
}

export default dedent
