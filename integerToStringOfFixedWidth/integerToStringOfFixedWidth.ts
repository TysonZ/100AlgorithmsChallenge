export function integerToStringOfFixedWidth(number: number, width: number): string {
    var result = number.toString().length < width ? 0 : number.toString().length-width;
    return number.toString().slice(result ,number.toString().length)
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
