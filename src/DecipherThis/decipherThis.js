/**
 * You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
 * For each word:
 * -the second and the last letter is switched (e.g. Hello becomes Holle)
 * -the first letter is replaced by its character code (e.g. H becomes 72)
 * Note: there are no special characters used, only letters and spaces
 */
function decipherThis(str) {
  return str.replace(/\d+/g, match => String.fromCharCode(match))
            .replace(/([A-z])([A-z])([A-z]*)([A-z])/gi, "$1$4$3$2");
}

module.exports = decipherThis;