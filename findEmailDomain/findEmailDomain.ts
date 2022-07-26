export function findEmailDomain(address: string): string {
    var start = 0
    for(var i = 0; i<address.length; i++){
        start = address[i] == "@" ? i : start;
    }
    return address.slice(start+1)
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
