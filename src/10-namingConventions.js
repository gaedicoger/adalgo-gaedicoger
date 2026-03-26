// @ts-nocheck
/**
 * Takes a input name formatted in snakecase and return the same name in camelcase.
 *
 * @param {string} str the input name
 * @returns {string} the new output name
 */

export const toCamelCase = (str) => {
  if (!str.includes("_")) {
    //Si la string ne renvoie pas d'underscore
    return str; // déjà en camelCase, on retourne tel quel
  }
  const words = str.toLowerCase().split("_"); //méthode split découpe la string dans un nouveau tableau en fonction du séparateur

  const first = words.shift(); //garde le premier élément du tableau words
  let result = first;

  for (const word of words) {
    const capitalized = word[0].toUpperCase() + word.slice(1); //Passer la première lettre de chaque mot suivants en majuscule
    result += capitalized; //Additionner premier mot et mots suivants
  }
  // @ts-ignore
  return result; //retourner la string.
};

/**
 * Takes a input name formatted in camelcase and return the same name in snakecase.
 *
 * @param {string} str the input name
 * @returns {string} the new output name
 */
export const toSnakeCase = (str) => {
  //Ajouter un separateur underscore devant chaque majuscule
  const underString = str.replace(/[A-Z]/g, (lettre) => {
    return "_" + lettre; // !Je gardes la lettre ET tu ajoutes le _ devant
  });
  //Mettre toutes les majuscules en minuscule
  const result = underString.toLocaleLowerCase();
  return result; //retrouner la string
};
