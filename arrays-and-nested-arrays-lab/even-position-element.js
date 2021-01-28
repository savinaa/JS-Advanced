function evenElement(arr){
    const result = arr.filter((a,i)=>i%2===0)
    console.log(result.join(' '))
}

evenElement(['20', '30', '40', '50', '60'])