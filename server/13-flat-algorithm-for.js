const matrix = [1, 2, 3, [5, 6, [7, 8, [9, 10]]]];

const newArray = [];
for (let i = 0; i < matrix.length; i++) {
  const array = matrix[i];
  if (typeof array === "number") {
    newArray.push(array);
  }
  for (let j = 0; j < array.length; j++) {
    const element = matrix[i][j];
    if (typeof element === "number") {
      newArray.push(element);
    }
    for (let h = 0; h < element.length; h++) {
      const element = matrix[i][j][h];
      if (typeof element === "number") {
        newArray.push(element);
      }
      for (let l = 0; l < element.length; l++) {
        const element = matrix[i][j][h][l];
        if (typeof element === "number") {
          newArray.push(element);
        }
      }
    }
  }
}
console.log(newArray);
