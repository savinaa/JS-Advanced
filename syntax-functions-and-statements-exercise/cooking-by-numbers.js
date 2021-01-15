function cookingByNumbers(str,...params){
    let number=Number(str)
    for( i=0; i<params.length;i++){
        let operation=params[i]
        switch (operation){
            case'chop':number/=2;break;
            case'dice':number=Math.sqrt(number);break;
            case'spice':number+=1;break;
            case'bake':number*=3;break;
            case'fillet':number*=0.8;break;
        }
        console.log(number)
    }

}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')