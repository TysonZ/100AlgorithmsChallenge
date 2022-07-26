export function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
    var counter = 0;
    var height = 0;
    while(height<desiredHeight){
        counter++
        height += upSpeed;
        if(height>=desiredHeight){
            return counter;
        }
        height -=downSpeed;
    }
    return counter;
}

 console.log(growingPlant(100, 10, 910))