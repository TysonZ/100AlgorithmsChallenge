export function encloseInBrackets(inputString: string): string {
//unshift and push
    var arr = inputString.split('');
    arr.push(')')
    arr.unshift('(')
    return arr.join('')
}

console.log(encloseInBrackets('abacaba'));