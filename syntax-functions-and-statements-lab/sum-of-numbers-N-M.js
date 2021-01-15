function sumNumbers(n,m){
   let N=Number(n)
    let M=Number(m)
    let sum=0;
    for (number=N; number<=M;number++){
        sum+=number
    }
    return sum
}

console.log(sumNumbers('1','5'))