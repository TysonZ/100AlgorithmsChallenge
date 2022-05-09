export function chessBoardCellColor(cell1: string, cell2: string): boolean {
    var c1a = cell1.split("",2);
    var c2a = cell2.split("",2);
    
    var result = c1a[0].charCodeAt(0)%2 == c2a[0].charCodeAt(0)%2 && c1a[1].charCodeAt(0)%2 == c2a[1].charCodeAt(0)%2 ? true : false;
    return result;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
