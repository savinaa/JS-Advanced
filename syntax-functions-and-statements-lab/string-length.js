function strLength(str1, str2, str3){
    let len1=str1.length
    let len2=str2.length
    let len3=str3.length
    let totalChars=len1+len2+len3
    let avg=Math.floor(totalChars/3)
    console.log(totalChars)
    console.log(avg)
}
strLength('a','b','c')