export function arrayPreviousLess(items: number[]): number[] {
const shiftArray = [];
    for(let i=0; i<items.length; i++){
        shiftArray[i]= items[i-1]<items[i] ? items[i-1] : -1;
    }
    return shiftArray;
}
console.log(arrayPreviousLess([3, 5, 2, 4, 5]));