export function factorializeANumber(num: number): number {
    var res = 1;
    while(num>1){
        res = res*num
        num=num-1;
    }
    return res
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));