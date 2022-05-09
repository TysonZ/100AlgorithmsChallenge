export function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {

    inputArray.forEach((num, i) => {
        inputArray[i] = num == elemToReplace ? substitutionElem : num;
    })
    return inputArray
}

console.log(arrayReplace([1, 2, 1], 1, 3));