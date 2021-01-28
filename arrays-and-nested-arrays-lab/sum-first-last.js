function sumFirstLast(arr){
    const arrNum=arr.map(i=>Number(i))
    let sum=arrNum.shift()+arrNum.pop()
    return sum
}

console.log(sumFirstLast(['20', '30', '40']))