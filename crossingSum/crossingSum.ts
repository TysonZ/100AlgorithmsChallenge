export function crossingSum(matrix: number[][], a: number, b: number): number {
    var sum = 0;

    for(var i = 0; i<matrix[a].length;i++){
        sum+=matrix[a][i]
    }
    for(var i = 0; i<matrix.length;i++){
        if(i!= a){
            sum+=matrix[i][b]
        }
    }
    return sum;
}

 console.log(crossingSum([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], 1, 3));