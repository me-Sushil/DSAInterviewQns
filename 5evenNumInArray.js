function evenNumInArray(arr){
    let even = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 === 0){
            even.push(arr[i]);
        }
    }
    return even;
}
console.log(evenNumInArray([1,2,3,4,5,6,7]));