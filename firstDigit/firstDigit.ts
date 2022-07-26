export function firstDigit(inputString: string): string {
    for(var i =0; i<inputString.length; i++){
        if(isFinite(parseInt(inputString[i])) && parseInt(inputString[i]) != NaN){
            return inputString[i];
        }
    }
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
