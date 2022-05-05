export function adjacentElementsProduct(inputArray: number[]): number {

    /* This is dangerous if the array turned negative
    var n = 0;
    */

    var n = inputArray[0] * inputArray[1];

    //i could be 1 here because we manually set n as the first product.
    for(var i = 0; i < inputArray.length-1; i++){
        if(inputArray[i]*inputArray[i+1] > n){
            n=inputArray[i]*inputArray[i+1];
        }
    }
    return n;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));