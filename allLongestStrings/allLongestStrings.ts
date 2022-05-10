export function allLongestStrings(inputArray: string[]): string[] {
    let max: number = 0;
    let maxArray: string[] = [];
    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i].length > max) {
            max = inputArray[i].length;
        }
    }
    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i].length === max) {
            maxArray.push(inputArray[i]);
        }
    }
    return maxArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));