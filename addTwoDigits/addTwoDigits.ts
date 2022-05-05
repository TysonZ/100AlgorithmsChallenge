export function addTwoDigits(n: any): number {

    var str = n.toString();
    let numbers = str.split("");
    var total = 0;
    numbers.forEach((num) => {
        num = parseInt(num);
        total +=num;
    })
    return total;
}

console.log(addTwoDigits(29));