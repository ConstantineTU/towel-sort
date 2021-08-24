module.exports = function towelSort(matrix) {
  let matrixArr = []
  if (matrix === [] || matrix === undefined) {
    return matrixArr
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrixArr.push(matrix[i][j])
      }
    } else {
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        matrixArr.push(matrix[i][j])
      }
    }
  }
  return matrixArr
}