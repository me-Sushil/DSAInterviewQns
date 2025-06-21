function vowelCountinStr(str){
    let vowel = 'aeiouAEIOU';
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(vowel.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(vowelCountinStr('sushilo'));