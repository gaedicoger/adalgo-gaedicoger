/*
This function should return the result
of an addition,
subtraction,
multiplication, or
division

depending on the operator provided.

For example:

const x = 2
const y = 3
const operator = '+'

calculator(x, y, operator) => return 5
*/
// @ts-ignore
export const calculator = (x, y, operator) => {
  if (typeof x !== "number") {
    //Si x est différent d'un nombre
    return "is empty";
  }
  if (typeof y !== "number") {
    //si y est différent d'un nombre
    return "is empty";
  }

  if (operator === "+") {
    //Si le signe est une addition alors on fait une addition
    return x + y;
  }

  if (operator === "-") {
    //si le signe est une soustraction alors on fait une soustraction
    return x - y;
  }

  if (operator === "*") {
    return x * y;
  }

  if (operator === "/") {
    return x / y;
  }

  return "no operators"; //si pas de signe :
};
