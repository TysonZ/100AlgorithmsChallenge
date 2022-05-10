export function confirmEnding(str: string, target: string) {
    var result = str.substring((str.length - target.length), str.length) == target ? true : false;
    return result;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));