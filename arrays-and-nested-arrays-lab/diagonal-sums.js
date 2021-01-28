function diagonalSums(matrix) {
    let sum1 = 0
    let sum2 = 0
    let row=0
    let col=0
    while(row<matrix.length){
        sum1+=matrix[row][col]
        sum2+=matrix[row++][matrix.length-1-col++]
    }
    console.log(sum1+' '+sum2)
}
diagonalSums([[20, 40],
    [10, 60]]
)
