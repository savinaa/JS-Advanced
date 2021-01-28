function lastK(n, k) {
    let result=[1]
    for (let i = 1; i < n; i++) {
        let sumPrevious=0
        for (let j = 0; j < Math.min(result.length,k); j++) {
            sumPrevious+=result[result.length-1-j]
        }
        result.push(sumPrevious)
    }
    return result
}

console.log(lastK(6,3))