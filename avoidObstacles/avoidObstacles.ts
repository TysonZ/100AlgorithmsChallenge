export function avoidObstacles(inputArray: number[]): number {
    inputArray = inputArray.sort((a,b) => a - b);
    var smallest = 1;
    var max = inputArray[inputArray.length-1];
    for(let i = 1; i<max+1; i++){
        //I didn't know about "every", or think to use modulo not equals
        if(inputArray.every((element) => element % i !==0 )){
            return(i);
        }
    }
}

//console.log(avoidObstacles([5, 3, 6, 7, 9]));
console.log(avoidObstacles([5, 3, 6, 7, 9,10,11,14]));