/**
 * This function takes a message as parameter and replaces all occurences
 * of "pain au chocolat" by "chocolatine".
 *
 * This would work with "pains au chocolat" and "chocolatines" as well and when
 * we see "un pain au chocolat" it should be replaced by "une chocolatine".
 *
 * @param {string} message The message in which the text should be replaced
 * @returns {string} an updated message with every "pain au chocolat" replaced by "chocolatine"
 */
export const chocolatine = (message) => {
  // Si un seul pain au choco changer l'article un en une.
  if (message.match(/un pain au chocolat/gi)) {
    //flag g pour prendre en compte ttes les occurences et i pour la casse
    message = message.replace(/un/gi, "une");
  }
  // Si j'ai un pluriel je remplace par un pluriel
  if (message.match(/pains au chocolat/gi)) {
    message = message.replace(/pains au chocolat/gi, "chocolatines");
  }
  // Si j'ai chocolatine au singulier
  if (message.match(/pain au chocolat/gi)) {
    message = message.replace(/pain au chocolat/gi, "chocolatine");
  }
  // Si j'ai plusieurs chocolatines ça fonctionne aussi

  return message;
};
