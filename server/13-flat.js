const matrix = [
  [1, 2, 3],
  [4, 5, 6, [22, 3, 4, [155]]],
  [7, 8, 9],
];

const newArray = [];
for (let i = 0; i < matrix.length; i++) {
  const array = matrix[i];
  for (let j = 0; j < array.length; j++) {
    const element = matrix[i][j];
    newArray.push(element);
  }
}

// const rta = matrix.flat(3);

console.log("for", newArray);
// console.log("flat", rta);
