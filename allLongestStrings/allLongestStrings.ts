export function allLongestStrings(inputArray: string[]): string[] {
    var longest = 0;
    const wordList = [];
//Find longest length of string in array, set as longest
// I should have used foreach here.
    for(var i=0; i <  inputArray.length; i++){
        //console.log(inputArray[i].length);
        longest = inputArray[i].length < longest ? longest : inputArray[i].length;
    }

    for(var i=0; i< inputArray.length; i++){
        if(inputArray[i].length == longest){
            wordList.push(inputArray[i])
        }
    }
    return wordList;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));