function crateMatrix(n) {
    const matrix = []
    for (let i = 0; i < n; i++) {
        matrix[i] = []
        for (let j = 0; j < n; j++) {
            matrix[i][j] = 0
            if (j === i) matrix[i][j] = 1
        }
    }
    return matrix
}

const newMatrix = crateMatrix(5)
console.log(newMatrix)
