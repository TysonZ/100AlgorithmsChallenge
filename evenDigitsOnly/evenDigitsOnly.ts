export function evenDigitsOnly(n: number): boolean {
    var s = n.toString().split('')
    for(var i = 0; i<s.length; i++){
        if(parseInt(s[i])%2 != 0){
            return false
        }
    }
    return true;
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));