export function largestOfFour(nums: number[][]): number[] {
    var result = []
    nums.forEach((arr) =>{
        var max = 0;
        arr.forEach((num) => {
            max = num>max?num:max;
        })
        result.push(max)
    })
    return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) );
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));