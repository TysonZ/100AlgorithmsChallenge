//If we loop, we don't have to really add conditions for "second value lowest index" because i increments from 0 => a.length, so lowest will be detected first. 

export function firstDuplicate(a: number[]): number {
    var ba=[]
    for(var i=0; i<a.length; i++){
        if(ba.includes(a[i])){
            return a[i];
        }
        ba.push(a[i])
    }
    return -1
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
 console.log(firstDuplicate([2, 4, 3, 5, 1]));
