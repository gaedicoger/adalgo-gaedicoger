/* Write a function named analyze_text that takes a string as argument.

 It will return an object with the following properties:
 - letters: number of alphabetical characters (A–Z, a–z)
 - words: number of words
 - sentences: number of sentences

 A word is defined as a sequence of alphabetical characters.
 A sentence ends with one of the following characters:
 '.', '!' or '?'.

 ⚠️ You are NOT allowed to use:
 - split()
 - Regular expressions

 You must iterate through the string character by character.

 Examples

 This: analyze_text("Hello world.")
 Will return:
 { letters: 10, words: 2, sentences: 1 }

 This: analyze_text("Hello world. How are you?")
 Will return:
 { letters: 21, words: 5, sentences: 2 }

 This: analyze_text("")
 Will return:
 { letters: 0, words: 0, sentences: 0 }
*/

// @ts-ignore
export const analyze_text = (str) => {
  //Déclarer les trois compteurs à incrémenter :
  let nbLetters = 0;
  let nbWords = 0;
  let nbSentences = 0;

  //passer la string: pour chaque caractères :

  for (let i = 0; i < str.length; i++) {
    // str[i] = le caractère actuel
    if (str[i] >= "a" && str[i] <= "z") {
      //Compter le nombre de lettre minuscules
      nbLetters++;
    }
    if (str[i] >= "A" && str[i] <= "Z") {
      //compter le nombre de lettre majuscules
      nbLetters++;
    }
    if (
      (str[i] === " " && str[i + 1] >= "a" && str[i + 1] <= "z") ||
      (str[i + 1] >= "A" && str[i + 1] <= "Z")
    ) {
      // Compter le nombre d'espace +1
      nbWords++;
    }
    if (str[i] === "!" || str[i] === "?" || str[i] === ".") {
      // +compter le nombre de caractères spéciaux: . ? ou !
      nbSentences++;
    }
  }
  if (str.length > 0) {
    //Si un seul mot sans espace je compte une fois.
    nbWords++;
  }

  return {
    letters: nbLetters,
    words: nbWords,
    sentences: nbSentences,
  };
};
