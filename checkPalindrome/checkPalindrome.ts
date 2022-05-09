
export function checkPalindrome(inputString: string): boolean {
    var a1 = inputString.toLowerCase().split("");
    var a2 = a1.slice().reverse();
    for(let i=0; i<a1.length; i++){
        if(a1[i]!=a2[i]){
            return false
        }
    }
    return true
}

 console.log(checkPalindrome('aabaa'));
 console.log(checkPalindrome('abac'));
 console.log(checkPalindrome('a'));
