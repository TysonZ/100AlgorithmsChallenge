export function incrementalBackups(lastBackupTime: number, changes: number[][]): number[] {
    var result = []
    changes.forEach((change) => {
        if(change[0] > lastBackupTime){
            result.push(change[1])
            console.log(change)
        }
    })

    result = result.sort((a,b) => (a-b)); //Sort 
    result = [... new Set(result)] //Remove duplicates
    return result
}

 console.log(incrementalBackups(461620205, [[461620203, 1], 
     [461620204, 2], 
     [461620205, 6],
     [461620206, 5], 
     [461620207, 3], 
     [461620207, 5], 
     [461620208, 1]]));
