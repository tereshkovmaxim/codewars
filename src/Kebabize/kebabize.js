/**
 * Modify the kebabize function so that it converts a camel case string into a kebab case.
 * Notes: the returned string should only contain lowercase letters
 */
function kebabize(str) {
  return str.replace(/\d/g, '')
            .replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`)
            .replace(/^-/, '');     
}

module.exports = kebabize;