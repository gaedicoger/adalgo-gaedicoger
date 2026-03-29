/*
This function modifies a given word based on its ending.

If the word does not end with "ing",
the function should add "ing" to the end of the word.

If the word already ends with "ing",
the function should add "ly" instead.

The function should return the updated word.

For example:

ingly("play") => return "playing"

ingly("playing") => return "playingly"

ingly("swim") => return "swiming"
*/

// @ts-ignore
export const ingly = (word) => {
  const isUpperCase = word.length > 0 && word === word.toUpperCase(); // Si les conditions sont remplies ça renvoie true sinon false

  if (word.match(/ing$/i)) {
    //Si mon mot est fini par ing quelque soit la casse
    //méthode match avec la string comprise entre flash, $ signigie fin du mot ça évite que ça prenne ing n'importe où dans le mot et le i "flag insensible à la casse"
    if (isUpperCase) {
      //S'il est en majuscule : j'ajoute LY en majuscule
      return `${word}LY`;
    } else {
      return `${word}ly`;
    }
  } else {
    if (isUpperCase) {
      //Sinon on ajouter ING en majuscule ou non
      return `${word}ING`;
    } else {
      return `${word}ing`;
    }
  }
};
