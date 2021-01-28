function negativePositiveNumbers(arr){
    const result=[]
    while (arr.length>0){
        let value=arr.shift()
        if(value<0){
            result.unshift(value)
        }else{
            result.push(value)
        }
    }
    console.log(result.join('\n'))
}
negativePositiveNumbers([7, -2, 8, 9])