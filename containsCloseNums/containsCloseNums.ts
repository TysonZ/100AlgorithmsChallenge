export function containsCloseNums(nums: number[], k: number): boolean {
    var repeats = [];
    var result = false;
    

    nums.forEach((num,index) => {
        if(repeats.includes(num) && Math.abs(repeats.indexOf(num)-index) <=k){
            result = true;
        }
        repeats.push(num)
    });
    return result;

}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));