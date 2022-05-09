export function companyBotStrategy(trainingData: number[][]): number {
    var total = 0;
    var count = 0;
    trainingData.forEach((arr) => {
        if(arr[1]>0){
            total+=arr[0];
            count++;
        }
    })
    if(count!=0){
        total = total/count;
    }
 return total;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
