function smallestTwoNum(arr){
    console.log(arr.sort(function(a, b){return a-b})
        .slice(0,2)
        .join(' '))
}
smallestTwoNum([30, 15, 50, 5])