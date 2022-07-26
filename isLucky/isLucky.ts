export function isLucky(n: number): boolean {
    console.log(n.toString.length%1)
    if(n.toString().length%2 == 0){
        //Even
       var half1 = n.toString().substring(n.toString().length/2,n.toString().length).split('')
       var half2 = n.toString().substring(0,n.toString().length/2).split('')
       var h1t = 0
       var h2t = 0
        half1.forEach((num) =>{
            h1t+=parseInt(num);
        })
        half2.forEach((num) =>{
            h2t+=parseInt(num);
        })
        if(h1t == h2t){
            return true;
        }
    }
        //Odd
        return false
}

 console.log(isLucky(1230));
 console.log(isLucky(239017));