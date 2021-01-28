function biggerHalf(arr){
    const newArr=arr.sort(function(a, b){return a-b})
        .slice(Math.floor(arr.length/2))
    return newArr
}
console.log(biggerHalf([4, 7, 2, 5,12]))