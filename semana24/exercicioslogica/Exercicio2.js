const stringCompression = (input) => {
    const substrings = [];
    let lastChar = input[0];
    let charCount = 0;
    for (let char of input) {
        if (char !== lastChar) {
            substrings.push(lastChar + charCount);
            lastChar = char;
            charCount = 0;
        }
        charCount++;
    }
    substrings.push(lastChar + charCount);
    let result = "";
    for (const key of substrings) {
        result += key;
    }
    return result.length > input.length ? input : result;
};
// console.log(stringCompression(" aabbb"));
// console.log(stringCompression(" aabccccaaa"));
// console.log(stringCompression(" accurate"));
// console.log(stringCompression(" escola"));
// console.log(stringCompression(" accuraaaaaaaaaaaaate"));