export function alphabetSubsequence(s: string): boolean {
    const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const strArray = s.toLowerCase().split('')
    var i = -1;
    var pass = true;
    strArray.forEach((letter) => {
        if( i < alpha.indexOf(letter)){
            i = alpha.indexOf(letter);
        } else {
            pass = false;
        }
        
    })
    return pass;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
