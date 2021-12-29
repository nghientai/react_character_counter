function findFrequentCharacter(str) {
    let characterArr = str.split(''),
        charCount = {};

    // Count the number of times each character appears in the string
    // and store in the hash table
    characterArr.map((char) => (charCount[char] = (charCount[char] || 0) + 1));

    // Map the hash table to an array of objects and sort by the count
    let sortedCharCount = Object.keys(charCount)
        .map((key) => ({
            character: key,
            count: charCount[key],
        }))
        .sort((a, b) => b.count - a.count);

    // Return the most frequent character in order of appearance
    return sortedCharCount;
}

const text = 'Encrypt & Decrypt Text Online';
console.log(mostFrequentCharacter(text));
