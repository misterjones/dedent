const isTemplateStringObject = function isTemplateStringObject(variable) {
  return (Array.isArray(variable) && variable.hasOwnProperty('raw'))
}

const minimumLeadingWhitespaceOf = function minimumLeadingWhitespaceOf(array) {
  const nonWhitespaceOrEndOfLine = /\S|$/

  return array.reduce(
    (acc, cur) => Math.min(acc, cur.search(nonWhitespaceOrEndOfLine)),
    Infinity
  )
}

const isEmptyOrWhitespace = function isEmptyOrWhitespace(string) {
  const emptyOrWhitespace = /^\s*$/
  return emptyOrWhitespace.test(string)
}

const pop = function pop(array) {
  return array.slice(0, -1)
}

const shift = function shift(array) {
  return array.slice(1)
}

const trimEmptyFirstAndLast = function trimEmptyFirstAndLastElements(array) {
  const firstElementIsEmptyOrWhitespace = isEmptyOrWhitespace(array[0])
  const lastElementIsEmptyOrWhitespace = isEmptyOrWhitespace(array[array.length - 1])
  let trimmedArray = array

	if (firstElementIsEmptyOrWhitespace) {
    trimmedArray = shift(trimmedArray)
  }
  if (lastElementIsEmptyOrWhitespace) {
    trimmedArray = pop(trimmedArray)
  }

  return trimmedArray
}

const splitIntoLines = function splitIntoLines(multilineString) {
  let lines = multilineString.split('\n')
  lines = trimEmptyFirstAndLast(lines)

  return lines
}


export {
  isTemplateStringObject,
  minimumLeadingWhitespaceOf,
  splitIntoLines,
}
