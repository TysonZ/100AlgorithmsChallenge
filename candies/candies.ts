export function candies(n: number, m: number): number {
    var total = Math.floor(m/n);
    return total*n;
}
console.log(candies(3, 10));