export function digitDegree(n: number): number {
    var counter = 0;

    while(n>9){
        var arr = n.toString().split('');
        var sum =0;
        arr.forEach((ele) => {
            sum += parseInt(ele);
        })
        n=sum
        counter++;
    }
    return counter;
}

console.log(digitDegree(5));
console.log(digitDegree(100));
console.log(digitDegree(91));