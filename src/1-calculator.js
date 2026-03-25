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
    return "is empty";
  }
  if (typeof y !== "number") {
    return "is empty";
  }

  if (operator === "+") {
    return x + y;
  }

  if (operator === "-") {
    return x - y;
  }

  if (operator === "*") {
    return x * y;
  }

  if (operator === "/") {
    return x / y;
  }

  return "no operators";
};
