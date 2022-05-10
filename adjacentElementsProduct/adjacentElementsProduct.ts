export function adjacentElementsProduct(inputArray: number[]): number {
    let max: number = 0;
    for(let i = 0; i < inputArray.length - 1; i++) {
        let product: number = inputArray[i] * inputArray[i + 1];
        if(product > max) max = product;
    }
    return max;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));