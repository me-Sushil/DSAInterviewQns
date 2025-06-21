function maxNuminArray(arr){
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] > max ){
            max = arr[i];
        }
    }
    return max;
}

console.log(maxNuminArray([1,3,4,5,7,2,6,8,9]));