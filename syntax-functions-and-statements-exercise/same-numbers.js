function sameNumbers(n) {
    let numberAsCharArray = (n + '').split('')
    let uniqueDigits =new Set(numberAsCharArray)
    let sumOfDigits=numberAsCharArray.reduce((a,b)=> Number(a)+Number(b),0)
    console.log(uniqueDigits.size === 1)
    console.log(sumOfDigits)
}

sameNumbers(333)