function processOdd(arr){
    const result=[]
    for(let i=1;i<arr.length;i+=2){
        result.unshift(arr[i]*2)
    }
    console.log(result.join(' '))
}
console.log(processOdd([10, 15, 20, 25]))