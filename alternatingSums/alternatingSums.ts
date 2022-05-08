export function alternatingSums(a: number[]): number[] {

    let teams = [0,0];
    var flip = 0;
    a.forEach((num) =>{
        teams[flip] += num;
        flip=(flip+1) % 2;
    })
    return teams;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))