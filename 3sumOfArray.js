function sumofArray(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i]; 
    }
    return sum;
}

console.log(sumofArray([1,3,4,5,6]));