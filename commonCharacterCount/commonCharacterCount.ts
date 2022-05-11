export function commonCharacterCount(s1: string, s2: string): number {
    var a1 = s1.split("");
    var a2 = s2.split("");
    var counter = 0;

    for(var j=0; j<a1.length; j++){
        var found = false;
           for(var i=0; i<a2.length; i++){  
                if(!found){
                    if(a1[j] == a2[i]){
                        console.log(a1[j], a2[i])

                        a2.splice(i,1)
                        counter++;
                        found = true;
                    }
                } 
        }
         
    }
    return counter;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));