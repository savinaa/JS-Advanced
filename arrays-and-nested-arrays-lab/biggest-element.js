function biggestElement(matrix){
    return matrix.flat()
        .sort(function(a, b){return b-a})
        .shift()
}
console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
))