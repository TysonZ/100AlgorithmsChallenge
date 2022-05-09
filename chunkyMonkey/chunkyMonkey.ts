export function chunkyMonkey(arr: any[], size: number): any[][] {
    var result = []
    var tmp = []
    for(let j=0; j<arr.length; false) {
            tmp.push(arr[j]);
            j++;
        if(j%size == 0){
        result.push(tmp)  
        tmp = [];
        } else if( j==arr.length){
            result.push(tmp)  
        }
        
    }
    return result 
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));