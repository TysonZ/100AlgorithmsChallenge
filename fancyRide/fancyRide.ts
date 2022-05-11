export function fancyRide(l: number, fares: number[]): string {
    var ubers = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"]
    var price = []
    for(var i=0; i < fares.length; i++){
        price.push(fares[i]*l)
    }
    for(var j=price.length-1; j>=0; j--){
        if(price[j]<=20) return ubers[j]
    }
    return "none"
}
console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));