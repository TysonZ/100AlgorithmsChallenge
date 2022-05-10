export function alphabeticShift(inputString: string): string {

    const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const inputarray = inputString.toLowerCase().split("");
    for(var i = 0; i < inputarray.length; i++){
        var index = alpha.indexOf(inputarray[i])+1;
        console.log(index)
        index = index%26
        inputarray[i]=alpha[index];
    }
    return inputarray.join('');
}

console.log(alphabeticShift('crazy'));