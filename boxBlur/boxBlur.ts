export function boxBlur(image: number[][]): number[][] {
    let total = 0;
    let count = 0;
    let result = [];
    image.forEach((row) =>{
        row.forEach((num) =>{
            total = total+num;
            count++;
        })
    })
    let tmp = Math.floor(total/count);
    result.push([tmp]);
    return result;

}

console.log(boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]]));