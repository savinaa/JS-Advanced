function pieceOfPie(arr,str1,str2){
    const result=arr.slice(arr.findIndex(searched=>searched===str1),arr.findIndex(searched=>searched===str2)+1)
    return result
}

console.log(pieceOfPie(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
))