export function houseNumbersSum(inputArray: number[]): number {
    var sum = 0;
    var counter = 0;
    while(counter <= inputArray.length){
        if(inputArray[counter] != 0){
            sum += inputArray[counter]
        } else{
            return sum
        }
        counter++
    }
    return -1
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));