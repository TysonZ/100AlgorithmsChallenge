export function arrayConversion(inputArray: number[]): number {
    var flip = false;
    var counter = 0;
    while( inputArray.length !== 1){
        inputArray = convert(inputArray, flip);
        flip = !flip;
    }
    return inputArray[0];
}

function convert(inputArray: number[], flip: boolean): number[]{
    let conversionArray = [];
    let temp = 1;
    if(!flip){
        //Do odd
        for(var i = 0; i<inputArray.length; i+=2){
            conversionArray.push(inputArray[i]+inputArray[i+1]);
        }
    } else if(flip){
        //do even
        for(var i = 0; i<inputArray.length; i+=2){
           conversionArray.push(inputArray[i]*inputArray[i+1]);

        }
    }
    return conversionArray;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
