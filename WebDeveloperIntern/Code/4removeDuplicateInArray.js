function rmvDuplicateInArr(arr){
    let seen = {};
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(!seen[arr[i]]){
            seen[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(rmvDuplicateInArr([1,2,3,4,4,5,6]));