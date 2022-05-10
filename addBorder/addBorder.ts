export function addBorder(picture: string[]): string[] {
    const star: string = '*'
    const result: string[] = []
    for (let i = 0; i < picture.length; i++) {
        result.push(star + picture[i] + star)
    }
    const itemLength: number = result[0].length;
    result.push(star.repeat(itemLength));
    result.unshift(star.repeat(itemLength));
    return result;
}

console.log(addBorder(["abc", "ded"]));