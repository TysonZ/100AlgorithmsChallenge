export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    var sum = 0;
    for(let i = 0; i<inputArray.length-1; i++){
        if(inputArray[i]+inputArray[i+1]>sum){
            sum = inputArray[i]+inputArray[i+1];
        }
    }
    return sum;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));