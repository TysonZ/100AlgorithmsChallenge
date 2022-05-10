export function differentSymbolsNaive(s: string): number {
    var arr = []
    var counter = 0;

    for(var i = 0; i<s.length; i++){
        if(!arr.includes(s[i])){
            counter++;
        }
        arr.push(s[i]);
    }
    return counter;
}

console.log(differentSymbolsNaive('cabca'));

