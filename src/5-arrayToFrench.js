/**
 * This function takes an array of words and convert it into a french sentence. Words are separated by
 * commas and the two last words are separated by "et".
 *
 * @param {string[]} array array of words
 * @returns {string}
 *
 * @example
 *      arrayToFrench(['un', 'deux', 'trois', 'soleil']); // returns "un, deux, trois et soleil"
 *      arrayToFrench(['noir', 'blanc']); // returns "noir et blanc"
 */
export const arrayToFrench = (array) => {
  const firstWords = array.slice(0, -1);
  const lastWord = array.slice(-1);
  if (array.length >= 3) {
    return `${firstWords.join(", ")} et ${lastWord[0]}`;
  }
  if (array.length === 2) {
    return `${firstWords[0]} et ${lastWord[0]}`;
  }
  if (array.length === 1) {
    return `${lastWord[0]}`;
  }
};
