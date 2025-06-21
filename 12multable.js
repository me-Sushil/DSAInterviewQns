//multipication 1 to 10
function printMultiplicationTable(){
    for (let i=1; i<=10; i++){
        let row ='';
        for(let j=1; j<=10; j++){
            row += `${i} x ${j} = ${i*j}\t`;
        }
        console.log(row);
    }   
}
printMultiplicationTable();
