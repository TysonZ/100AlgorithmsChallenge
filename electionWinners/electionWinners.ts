export function electionsWinners(votes: number[], k: number): number {
    var max = 0
    var counter = 0;
    for(var i = 0; i<votes.length; i++){
        max = votes[i]>max ? votes[i] : max;
    }
    votes.forEach((num) => {
        counter = (num+k)>max ? counter=counter+1 : counter;
    })
    return counter;
}

console.log(electionsWinners([2, 3, 5, 2], 3));