export function findClosestPair(numbers: number[], sum: number): number {
    var lowest = -1
    for(var i =0; i<numbers.length; i++){
        for(var j = i+1; j<numbers.length; j++){
            if(numbers[i]+ numbers[j] == sum){
                lowest = j-i;
            }
        }
    }
    return lowest;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));