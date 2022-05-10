export function composeRanges(nums: number[]): string[] {
    var arr = []
    var min = NaN
    for(var i=0; i<nums.length; i++){
        min = min<nums[i] ? min : nums[i]
        if(nums[i+1]-nums[i] != 1){
            if(min==nums[i]){
                arr.push(min);
            } else{
                            arr.push(min+'->'+nums[i]);
            }
            min = NaN
        }
    }
    return arr
}

 console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));