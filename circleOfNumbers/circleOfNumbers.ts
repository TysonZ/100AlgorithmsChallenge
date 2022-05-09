export function circleOfNumbers(n: number, firstNumber: number): number {
    return ((n/2)+firstNumber)%n;
}

console.log(circleOfNumbers(10, 2));