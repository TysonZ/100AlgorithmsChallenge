export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    var sum = 0;
    var max = 0;
    for(let i = 0; i<inputArray.length-k+1; i++){
        sum = 0;
        let j = i+k;
        for(let y = i; y<j; y++){
            sum+=inputArray[y]
        }
        if(sum>max){
            max=sum;
        }
    }
    return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));