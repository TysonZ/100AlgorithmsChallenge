export function centuryFromYear(year: number): number {
    let result = year %100;
    if(result < 1){
    //return first 2 chars
        return Math.floor(year/100);
    } else {
        //return first 2 chars+1
        return Math.floor(year/100)+1
    }
}
 console.log(centuryFromYear(1905));
 console.log(centuryFromYear(1700));