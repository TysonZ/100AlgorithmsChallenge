export function depositProfit(deposit: number, rate: number, threshold: number): number {
    var amount = deposit
    var count = 0
    while (amount<threshold){
        amount+=amount*(rate/100)
        count++;
    }
    return count
}

 console.log(depositProfit(100, 20, 170))