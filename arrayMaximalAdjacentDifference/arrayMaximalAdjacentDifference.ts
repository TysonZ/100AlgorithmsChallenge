export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let max = Math.abs(inputArray[0]-inputArray[1]);
    //inputArray[0]+inputArray[1];
    for( let i = 1; i<inputArray.length; i++){
        let sum = Math.abs(inputArray[i-1]-inputArray[i]);
        if(sum>max){
            max=sum;
        }
    }
    return max;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));