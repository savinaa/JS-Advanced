function fruit(name, weight, price){
    let kgWeight=weight/1000
    let money=price*kgWeight
    console.log(`I need $${money.toFixed(2)} to buy ${kgWeight.toFixed(2)} kilograms ${name}.`)
}

fruit('orange', 2500, 1.80)