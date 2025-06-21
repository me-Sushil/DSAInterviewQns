function minNumsArray (arr){

    let min = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
// console.log(minNumsArray([1,2,5,5,3,6,7]));
// console.log(indexOf(min));

const arr = [1, 2, 5, 5, 3, 6, 7];
const min = minNumsArray(arr);
const index = arr.indexOf(min); // <-- Gets index of first occurrence of min

console.log("Min value:", min);
console.log("Index of min value:", index);