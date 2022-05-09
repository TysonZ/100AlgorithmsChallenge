export function characterParity(symbol: string): string {
   var result = parseInt(symbol);  
   result = result % 2;
   if(result.toString() == 'NaN'){
       return "not a digit"
   } else if (result == 0){
       return "even"
   } else if (result == 1){
       return "odd"
   }
  return result.toString();
}

 console.log(characterParity('5'))
console.log(characterParity('8'))
 console.log(characterParity('q'))
