//a

const printMatrix = (m: number[][]): void => {
  for (const row of m) {
    for (const element of row) {
      console.log(element);
    }
  }
};

//b. 

export const sumMatrix = (
  matrixA: number[][],
  matrixB: number[][]
): number[][] => {
  const newMatrix: number[][] = [];
  if (
    matrixA.length !== matrixB.length ||
    matrixA[0].length !== matrixB[0].length
  ) {
    throw new Error("As dimensões das matrizes devem ser iguais");
  }
  const rowSize = matrixA[0].length;
  const columnSize = matrixB[0].length;

  for (let i = 0; i < rowSize; i++) {
    let newMatrixRow = [];
    for (let j = 0; j < columnSize; j++) {
      newMatrixRow.push(matrixA[i][j] + matrixB[i][j]);
    }
    newMatrix.push(newMatrixRow);
  }
  return newMatrix;
};
