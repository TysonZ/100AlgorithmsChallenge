export function longestDigitsPrefix(inputString: string): string {
    var nums = [1,2,3,4,5,6,7,8,9,0]
    var result = []
    var arr = inputString.split('')
    for(var i=0; i<inputString.length;i++){
        if(nums.includes(parseInt(arr[i]))){
            result.push(arr[i])
        } else {
            return result.join();
        }
        
    }
    return result.join()
}

 console.log(longestDigitsPrefix('123aa1'));