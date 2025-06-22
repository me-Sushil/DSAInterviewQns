function oddNuminArray(arr){
    let odd =[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 !== 0){
            odd.push(arr[i]);
        }
    }
    return odd;
}
//console.log(oddNuminArray([1,2,3,4,5,6,7]));

const arr = [1,2,3,4,5,6,7];
const odd = oddNuminArray(arr);
console.log("the odd num is", odd);