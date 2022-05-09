export function isCaseInsensitivePalindrome(inputString: string): boolean {
    var a1 = inputString.toLowerCase().split("");
    var a2 = a1.slice().reverse();
    for(let i=0; i<a1.length; i++){
        if(a1[i]!=a2[i]){
            return false
        }
    }
    return true
}
