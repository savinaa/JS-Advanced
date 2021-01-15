function aggregation(arr){
    let sumElements=arr.reduce((a, b) => a + b, 0)
    let sumInversed=0
    for(i=0;i<arr.length;i++){
        sumInversed+=1/arr[i]
    }
    let concat=arr.join('')
    console.log(sumElements)
    console.log(sumInversed)
    console.log(concat)
}

aggregation([1,2,3])