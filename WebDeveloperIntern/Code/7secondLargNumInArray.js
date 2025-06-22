function secondLargestNumInarray(arr){

    if(arr.length <2 ){
        console.log("invalid array");
    }
    let largeNum = -Infinity;
    let secondLargeNum = -Infinity;

    for(let i = 0; i<arr.length; i++){
        if(arr[i] > largeNum){
            secondLargeNum = largeNum;
            largeNum = arr[i];
        }else if(arr[i] > secondLargeNum && arr[i] !== largeNum){
            largeNum = arr[i];
        }
    }
    return secondLargeNum;

}

console.log(secondLargestNumInarray([1,2,3,4,5,6,7,8]));