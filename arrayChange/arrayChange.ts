export function arrayChange(inputArray: number[]): number {
var counter = 0;
for(var i = 1; i<inputArray.length;i++){
    while(inputArray[i]<=inputArray[i-1]){
        inputArray[i]++;
        counter++;
    }

}

return counter;
}

 console.log(arrayChange([1, 1, 1]));