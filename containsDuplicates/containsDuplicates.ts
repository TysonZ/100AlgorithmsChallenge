export function containsDuplicates(a: number[]): boolean {
    var array = []
    var result = false;
    a.forEach((num) => {
        if(array.includes(num)){
            result = true
        }
        array.push(num);
    })
    return result;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
