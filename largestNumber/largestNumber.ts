export function largestNumber(n: number): number {
    var result = ''
    for(var i = 0; i<n; i++){
        result = result +'9'
    }
    return parseInt(result)
}
console.log(largestNumber(2));