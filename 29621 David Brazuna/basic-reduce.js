function countWords(inputWords) {
    return inputWords.reduce(function (uniqueWords, word) { 
        if (word in allwords) {
            uniqueWords[word]++
        }
        else {
            uniqueWords[word] = 1
        }
        return uniqueWords
      }, {})
    
  }

  module.exports = countWords