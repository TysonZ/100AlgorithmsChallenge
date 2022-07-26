//O(1) additional memory usage, s+x memory usage independent of input array.

export function firstNotRepeatingCharacter(s: string): string {
   var char = '';
    while(s.length>0){
        char=s[0];
        s=s.slice(1);
        if(!s.includes(char)){
            return char;
        }
        s=s.replace(char,'')
    }
    return '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
