//I should recode this.

export function convertString(s: string, t: string): boolean {
    var a1 = s.split("")
    var a2 = t.split("")
    var array = []
    var counter=0
    for(var j=0;j<a2.length;j++){
        for(var i=counter; i<a1.length;i++){
            if(a1[i] == a2[j]){
                array.push(a1[i]);
                counter=i
                //EJECT LOOP
                i=a1.length
            }
        }
    }
    var str = array.join('')
    console.log(t)
    console.log(str)
    return str == t
        
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
