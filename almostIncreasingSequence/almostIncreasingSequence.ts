export function almostIncreasingSequence(sequence: number[]): boolean {
    var changes = 0;

   for (var i = 0; i < sequence.length; i++){

    if(sequence[i] <= sequence[i-1]){
        changes++;
        
        // Need another if here to check for same numbers twice
        if(sequence[i-1] >= sequence[i+1]){
            return false;
        }

    } 

   }
    return changes <=1;
}

 console.log(almostIncreasingSequence([1, 3, 2, 1])) 
 console.log(almostIncreasingSequence([1, 3, 2]))
 console.log(almostIncreasingSequence([1, 2, 3,3]))