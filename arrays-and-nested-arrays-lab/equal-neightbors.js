function equalNeightbors(matrix) {
    let sumOfNeightbors = 0

    const validIndex = function ([row, col]) {
        return row < matrix.length
            && row >= 0
            && col < matrix[0].length
            && col >= 0
    }

    const foundNeightbor = function ([row, col]) {
        let value = matrix[row][col]
        let down = validIndex([row + 1, col]) ? matrix[row + 1][col] : undefined
        let right = validIndex([row, col + 1]) ? matrix[row][col + 1] : undefined
        return (value === down)
            + (value === right)
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            sumOfNeightbors += foundNeightbor([row, col])
        }
    }
    return sumOfNeightbors
}

console.log(equalNeightbors([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
))