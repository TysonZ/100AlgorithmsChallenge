export function bishopAndPawn(bishop: string, pawn: string): boolean {
    let bCoords = bishop.split('');
    let pCoords = pawn.split('');
    let result = Math.abs(bCoords[0].toString().charCodeAt(0) - pCoords[0].toString().charCodeAt(0)) == Math.abs(parseInt(bCoords[1])-parseInt(pCoords[1])) ? true : false;
    return result;
    /*
    if(Math.abs(bCoords[0].toString().charCodeAt(0) - pCoords[0].toString().charCodeAt(0)) == Math.abs(parseInt(bCoords[1])-parseInt(pCoords[1]))){
        return true;
    } else {
        return false;
    }
    */
}

console.log(bishopAndPawn('a1', 'c3'));