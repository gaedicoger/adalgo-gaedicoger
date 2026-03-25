/*
This function generates the Fibonacci sequence.

The Fibonacci sequence starts with 0 and 1.
Each next number is the sum of the two previous numbers.

The function takes a number as parameter,
which represents how many elements of the sequence
should be generated.

If the number is 0, the function should return an empty array.
If the number is 1, it should return [0].
If the number is 2, it should return [0, 1].

For example:

const max = 5
fibonacci(max) => return 0, 1, 1, 2, 3

const max = 1
fibonacci(max) => return 0

const max = 0
fibonacci(max) => return []
*/

// @ts-ignore
export function fibonacci(number) {
  const arrayFibo = [0, 1]; //déclarer mon tableau qui va contenir la suite
  if (number === 0) {
    //Inclure les conditons des tests notamment les premières
    return [];
  }
  if (number === 1) {
    return [0];
  }
  for (let i = 0; i < number - 2; i++) {
    //boucle pour push dans la tableau l'addition de l'avant derniere et de la derniere valeur du tableau
    arrayFibo.push(
      arrayFibo[arrayFibo.length - 1] + arrayFibo[arrayFibo.length - 2],
    );
  }
  return arrayFibo;
}
