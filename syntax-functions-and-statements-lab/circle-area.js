function area(argument){
    if (typeof (argument) !== 'number'){
        console.log(`We can not calculate the circle area, because we receive a ${typeof (argument)}.`)
    }else{
        console.log((Math.PI*argument**2).toFixed(2))
    }
}
area(NaN)