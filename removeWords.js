function removeWords(original, wordsToRemove) {
    let words = original.split(' ');
    let filteredWords = words.filter(word => !wordsToRemove.includes(word));
    return filteredWords.join(' ');
    
}

module.exports = removeWords;