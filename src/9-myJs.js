// @ts-nocheck
/**
 * This function re-implement the behavior of the .includes() array method
 * without using any existing functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *
 * @param {string[]} array
 * @param {string} searchElement
 * @returns {boolean}
 * @example
 *      myIncludes(['un', 'deux', 'trois'], 'trois'); // returns true
 *      myIncludes(['un', 'deux', 'trois'], 'quatre'); // returns false
 */
export const myIncludes = (array, searchElement) => {
  for (let element = 0; element < array.length; element++) {
    if (array[element] === searchElement) {
      return true;
    }
  }
  return false; //penser à sortir la condition pour continuer de chercher et ne pas casser la boucle.
};

/**
 * This function re-implement the behavior of the .indexOf() array method
 * without using any existing functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *
 * @param {string[]} array
 * @param {string} searchElement
 * @returns {number}
 * @example
 *      myIndexOf(['un', 'deux', 'trois'], 'trois'); // returns 3
 *      myIndexOf(['un', 'deux', 'trois'], 'quatre'); // returns -1
 */
export const myIndexOf = (array, searchElement) => {
  for (let element = 0; element < array.length; element++) {
    if (array[element] === searchElement) {
      return element;
    }
  }
  return -1;
};

/**
 * This function re-implements the behavior of the .startsWith() string method
 * without using any existing string helper functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
 *
 * @param {string} str - The full string to test.
 * @param {string} search - The substring to check for at the start.
 * @returns {boolean} True if the string starts with the given substring, false otherwise.
 * @example
 *      myStartsWith('bonjour', 'bon'); // returns true
 *      myStartsWith('bonjour', 'jour'); // returns false
 */
export const myStartsWith = (str, search) => {
  for (let letter = 0; letter < search.length; letter++) {
    if (str[letter] !== search[letter]) {
      return false;
    }
  }
  return true;
};

/**
 * This function re-implements the behavior of the .repeat() string method
 * without using any existing string helper functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 *
 * @param {string} str - The string to repeat.
 * @param {number} count - The number of times the string should be repeated.
 * @returns {string} The string repeated 'count' times.
 * @example
 *      myRepeat('ha', 3); // returns 'hahaha'
 *      myRepeat('x', 0); // returns ''
 */
export const myRepeat = (str, count) => {
  let result = "";
  //pour chaque count, je reproduit str
  for (let element = 0; element < count; element++) {
    result += str;
  }
  return result;
};

/**
 * This function re-implements the behavior of the .join() array method
 * without using any existing array helper functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 *
 * @param {any[]} array - The array whose elements will be joined.
 * @param {string} separator - The separator to insert between elements.
 * @returns {string} A string made by concatenating all array items separated by the given string.
 * @example
 *      myJoin(['a', 'b', 'c'], '-'); // returns 'a-b-c'
 *      myJoin(['hello', 'world'], ' '); // returns 'hello world'
 */
export const myJoin = (array, separator) => {
  let result = "";
  for (let element = 0; element < array.length; element++) {
    result += array[element];
    if (element < array.length - 1) {
      result += separator;
    }
  }
  return result;
};

/**
 * This function re-implements the behavior of Object.keys()
 * without using Object.keys() or any built-in reflection helpers.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 *
 * @param {Object} obj - The object from which to extract keys.
 * @returns {string[]} An array of the object's own enumerable property names.
 * @example
 *      myObjectKeys({a: 1, b: 2}); // returns ['a', 'b']
 */
export const myObjectKeys = (obj) => {
  let resultKeys = [];
  for (let key in obj) {
    resultKeys.push(key); //récupérer les clés
    //sans méthode push on peut demander à JS de créer une nouvelle case comme ça : resultKeys[resultKeys.length] = key;
    //on lui déclare un index inexistant grâce à la valeur de longueur du tableau et il ajoute une valeur au tableau
  }
  //retourner les clés
  return resultKeys;
};

/**
 * This function re-implements the behavior of Object.entries()
 * without using Object.entries() or any built-in reflection helpers.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 *
 * @param {Object} obj - The object from which to extract key/value pairs.
 * @returns {Array[]} An array of [key, value] pairs from the object's own enumerable properties.
 * @example
 *      myObjectEntries({a: 1, b: 2});
 *      // returns [['a', 1], ['b', 2]]
 */
export const myObjectEntries = (obj) => {
  let resultArray = [];
  for (let key in obj) {
    // @ts-ignore
    resultArray.push([key, obj[key]]); //récupérer clés plus valeur
  }
  //sans méthode push on peut demander à JS de créer une nouvelle case comme ça : resultArray[resultArray.length] = [key, obj[key]];
  //on lui déclare un index inexistant grâce à la valeur de longueur du tableau et il ajoute une valeur au tableau
  //retourner le resulat
  return resultArray;
};
