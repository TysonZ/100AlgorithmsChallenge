export function addBorder(picture: string[]): string[] {

   //find length of string
   const wallLength = picture[0].length +2;

   //build roof and floor as border
    //We can use repeat() here instead
   var border = '';
   for(var i = 0; i < wallLength; i++){
    border = border.concat('*');
   }

   for(var i = 0; i < picture.length; i++){
       picture[i] = "*" + picture[i] + "*"
   }

    // Put roof and floor on picture array
   picture.push(border);
   picture.unshift(border);

    return picture;
}

 console.log(addBorder(["abc", "ded"]));