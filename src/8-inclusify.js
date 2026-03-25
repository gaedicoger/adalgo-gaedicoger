/**
 * This function tries to use french inclusive notation instead of masculine or feminine gender in sentences.
 * *This is a simplified version that focuses on simple pronouns replacement.*
 * The function should :
 * - replace il, elle by iel
 * - replace ils, elles by iels
 * - replace ceux, celle by celleux
 * Be carreful to properly handle edge cases from tests.
 * @param {string} text
 */

export const inclusify = (text) => {
  text = text.replace(/\bIl\b|\bElle\b/g, "Iel"); // j'ai enlevé le match car il ne sert pas, replace détecte ce qu'il y a à remplacer
  text = text.replace(/\bil\b|\belle\b/g, "iel"); // \b pour isoler les mots et éviter de prendre un il dans un mot
  text = text.replace(/\bIls\b|\bElles\b/g, "Iels"); //g pour regarder toute la string et pas juste la première occurence
  text = text.replace(/\bils\b|\belles\b/g, "iels");

  return text;
};
