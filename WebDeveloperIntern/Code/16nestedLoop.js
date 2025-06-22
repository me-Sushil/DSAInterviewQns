//  console.log(nestedLoop([1,2,3,4,5,6,7], 8))  ask in interview
//  the question is add two element of array and compare sum with target
// if sum is equal to target return true else return false. and check all element of array

function nestedLoop(arr, target){
    let num = [];
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        num = arr[i];
        for(let j=i+1; j<arr.length; j++){
            sum = num + arr[j];
            if(sum === target){
                return true;
            }
        }
    }
    return false;
}

console.log(nestedLoop([1,2,3,4,5,6], 8));
console.log(nestedLoop([1,2,3,4], 8));
console.log(nestedLoop([1,2,3,4], 9));
console.log(nestedLoop([1,2,3,4,5], 10));
console.log(nestedLoop([1,2,3,4,5], 8));

