export function incorrectPasscodeAttempts(passcode: string, attempts: string[]): boolean {
    var counter = 0;
    var result = false;
    attempts.forEach((attempt) => {
        if(attempt != passcode){ counter++;
        } else { counter=0;}
        result = counter == 10 ? true : result;
    })
    return result
}

console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));