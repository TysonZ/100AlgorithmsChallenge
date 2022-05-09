export function compareIntegers(a: string, b: string): string {
    var val = [];
    val.push(parseInt(a),parseInt(b));
    if(val[0]>val[1]){
        return "greater"
    } else if (val[0]<val[1]){
        return "less"
    } else{
        return "equal"
    }
    console.log(val);    
}
console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));