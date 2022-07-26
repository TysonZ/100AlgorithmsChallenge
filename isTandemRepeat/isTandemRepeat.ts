//Assuming this is a single concatination considering 'qqq' expects false, therefore we can split in half and compare.
export function isTandemRepeat(inputString: string): boolean {
    if(inputString.substring(0,inputString.length/2) == inputString.substring(inputString.length/2,inputString.length)){
        return true
    }
    return false;
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
