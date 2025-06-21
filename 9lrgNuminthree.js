//Find the largest of three numbers using if-else

function largestNumInThree(a,b,c){
    if(a>=b && a>=c){
        console.log(a);
    }else if(b>=a && b>=c){
        console.log(b);
    }else{
        console.log(c);
    }
}

largestNumInThree(9,9,3);