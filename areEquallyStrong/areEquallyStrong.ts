export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    var yourmax = Math.max(yourLeft, yourRight);
    var yourmin = Math.min(yourLeft, yourRight);
    var friendsmax = Math.max(friendsLeft, friendsRight);
    var friendsmin = Math.min(friendsLeft, friendsRight);

    if(friendsmax == yourmax && friendsmin == yourmin){
        return true;
    } else {
        return false;
    }
}

 console.log(areEquallyStrong(10, 15, 15, 10))
 console.log(areEquallyStrong(15, 10, 15, 10))
 console.log(areEquallyStrong(15, 10, 15, 9))
